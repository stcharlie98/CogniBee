/*
 * SleepManager.h
 * Gerenciamento de deep sleep adaptativo para CogniBee (ESP32, Arduino IDE)
 *
 * Objetivo:
 * - Manter estado mínimo entre reboots usando RTC memory
 * - Decidir dinamicamente o intervalo de deep sleep com base em variações de peso
 * - Prover API simples: begin, updateWeightAndDecide, enterDeepSleep, getInterval
 *
 * Uso:
 * - Incluir no sketch principal e chamar SleepManager_begin(...)
 * - Após coleta de dados: SleepManager_updateWeightAndDecide(peso_kg);
 * - Finalmente: SleepManager_enterDeepSleep();
 *
 * Compatível com Arduino IDE (placas ESP32)
 */

#pragma once

#include <Arduino.h>

#ifndef DEFAULT_SLEEP_INTERVAL_SEC
#define DEFAULT_SLEEP_INTERVAL_SEC 1800UL // 30 minutos
#endif

#ifndef ALERT_SLEEP_INTERVAL_SEC
#define ALERT_SLEEP_INTERVAL_SEC 60UL // 1 minuto durante evento crítico
#endif

#ifndef SWARM_THRESHOLD_KG
#define SWARM_THRESHOLD_KG 1.0f // Limiar inicial para evento de enxameação (kg)
#endif

// Inicializa o SleepManager. Pode opcionalmente passar intervalo padrão (s).
void SleepManager_begin(unsigned long default_sleep_interval_sec);

// Atualiza o peso atual (kg) e decide se entra em modo de alerta.
// Essa função salva o peso no RTC e ajusta o intervalo de sleep interno.
void SleepManager_updateWeightAndDecide(float current_weight_kg);

// Entra em deep sleep pelo intervalo decidido (em segundos).
// Essa função só retorna quando o dispositivo acordar (na prática não retorna).
void SleepManager_enterDeepSleep(void);

// Retorna o intervalo atual em segundos (apenas leitura).
unsigned long SleepManager_getCurrentInterval(void);

// Marca explicitamente que há um evento de alerta (forçar modo alerta).
void SleepManager_forceAlertMode(void);

// Marca explicitamente que há fim do alerta (volta ao intervalo normal).
void SleepManager_clearAlertMode(void);
