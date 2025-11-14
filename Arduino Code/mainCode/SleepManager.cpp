/*
 * SleepManager.cpp
 * Implementação do SleepManager para CogniBee (ESP32)
 *
 * Observações:
 * - Usa RTC memory (RTC_DATA_ATTR) para preservar o último peso e o intervalo
 *   entre ciclos mesmo após deep sleep.
 * - A decisão de reduzir o intervalo é baseada em variação absoluta do peso,
 *   comparando o peso corrente com o peso armazenado no RTC.
 *
 * Compilável no Arduino IDE (ESP32 cores).
 */

#include "SleepManager.h"
#include "esp_sleep.h"

// Variáveis preservadas em RTC memory (sobrevivem ao deep sleep)
RTC_DATA_ATTR static float rtc_last_weight_kg = -1.0f;          // -1 indica não inicializado
RTC_DATA_ATTR static unsigned long rtc_sleep_interval_sec = DEFAULT_SLEEP_INTERVAL_SEC;
RTC_DATA_ATTR static uint8_t rtc_alert_flag = 0;               // 0 = normal, 1 = alerta

// Variáveis internas
static unsigned long default_interval = DEFAULT_SLEEP_INTERVAL_SEC;
static unsigned long alert_interval = ALERT_SLEEP_INTERVAL_SEC;
static float swarm_threshold = SWARM_THRESHOLD_KG;

void SleepManager_begin(unsigned long default_sleep_interval_sec) {
  // Inicializa os parâmetros locais e, se rtc não inicializado, define defaults.
  default_interval = (default_sleep_interval_sec == 0) ? DEFAULT_SLEEP_INTERVAL_SEC : default_sleep_interval_sec;

  if (rtc_sleep_interval_sec == 0xFFFFFFFFUL || rtc_sleep_interval_sec == 0) {
    // Caso estranho: inicializa rtc com default
    rtc_sleep_interval_sec = default_interval;
  }

  // Se last weight não inicializado, mantemos -1.0 para sinalizar que a primeira leitura
  // não deve ser interpretada como variação.
  if (rtc_last_weight_kg < 0.0f) {
    rtc_last_weight_kg = -1.0f;
  }

  // Se o valor de intervalo RTC não estiver setado, inicializa
  if (rtc_sleep_interval_sec == 0) {
    rtc_sleep_interval_sec = default_interval;
  }
}

void SleepManager_updateWeightAndDecide(float current_weight_kg) {
  // Se não há leitura anterior, grava e mantém intervalo default
  if (rtc_last_weight_kg < 0.0f) {
    rtc_last_weight_kg = current_weight_kg;
    rtc_sleep_interval_sec = default_interval;
    rtc_alert_flag = 0;
    return;
  }

  // Calcula variação absoluta (kg)
  float delta = rtc_last_weight_kg - current_weight_kg;
  if (delta < 0.0f) delta = -delta; // abs

  // Se a variação absoluta exceder o limiar, ativa modo alerta
  if (delta >= swarm_threshold) {
    rtc_alert_flag = 1;
    rtc_sleep_interval_sec = alert_interval;
  } else {
    // Nenhuma variação crítica: limpa alerta e retorna ao intervalo default
    rtc_alert_flag = 0;
    rtc_sleep_interval_sec = default_interval;
  }

  // Atualiza o peso guardado para ser usado na próxima comparação
  rtc_last_weight_kg = current_weight_kg;
}

void SleepManager_forceAlertMode(void) {
  rtc_alert_flag = 1;
  rtc_sleep_interval_sec = alert_interval;
}

void SleepManager_clearAlertMode(void) {
  rtc_alert_flag = 0;
  rtc_sleep_interval_sec = default_interval;
}

unsigned long SleepManager_getCurrentInterval(void) {
  return rtc_sleep_interval_sec;
}

void SleepManager_enterDeepSleep(void) {
  // Define timeout em micros e seta wakeup por timer RTC
  uint64_t sleep_us = (uint64_t)rtc_sleep_interval_sec * 1000000ULL;

  // Logging leve antes de dormir
  Serial.print("[SleepManager] Entrando em deep sleep por (s): ");
  Serial.println(rtc_sleep_interval_sec);
  if (rtc_alert_flag) {
    Serial.println("[SleepManager] MODO ALERTA ATIVO - intervalo reduzido para acompanhamento.");
  }

  // Configura o callback de wakeup por temporizador RTC
  esp_sleep_enable_timer_wakeup(sleep_us);

  // Garante que o serial seja finalizado antes do sono profundo
  Serial.flush();

  // Inicia o sono profundo (após esta chamada o chip reinicia no wake)
  esp_deep_sleep_start();
}
