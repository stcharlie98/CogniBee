/**
 * @file mainCode.ino
 * @brief Arquivo principal do firmware CogniBee (protótipo de bancada).
 *
 * Responsabilidades:
 * - Inicializar sensores e comunicação
 * - Coletar um conjunto de medições
 * - Enviar telemetria ao servidor
 * - Avaliar condições críticas (variação de peso)
 * - Entrar em deep sleep pelo intervalo adequado
 *
 * Observações:
 * 1. Este firmware executa apenas um ciclo por boot. O ESP32 reinicia
 * automaticamente ao sair do deep sleep, repetindo o processo;
 * 2. Este firmware é otimizado para prototipagem e testes de bancada;
 * 3. A versão final para a PCB (Rev 3.0) compartilha a mesma lógica,
 * mudando apenas os pinos definidos em config.h.
 */

#include "config.h"
#include "credentials.h"
#include "comms.h"
#include "sensors.h"
#include "publisher.h"
#include "SleepManager.h"

void setup() {
  Serial.begin(115200);
  Serial.println("\n[CogniBee] Inicializando sistema...");

  // Inicialização dos módulos
  Sensors_begin();
  Comms_begin();

  // Inicializa o gerenciador de sono com o intervalo padrão (30 minutos)
  SleepManager_begin(DEFAULT_SLEEP_INTERVAL_SEC);

  Serial.println("\n[CogniBee] Sistema inicializado.");
  Serial.println("\n[CogniBee] Executando ciclo de medição...");

  // Leituras
  Telemetria dados = Sensors_coletar();

  // Envio para o servidor
  Publisher_enviar(dados);

  // Atualiza lógica de alerta com base na variação de peso
  SleepManager_updateWeightAndDecide(dados.peso_kg);
  
  unsigned long sleepSeconds = SleepManager_getNextSleepInterval();
  Serial.print("\n[CogniBee] Entrando em deep sleep por ");
  Serial.print(sleepSeconds);
  Serial.println(" segundos.");

  // Aguarda flush de logs e operações pendentes
  delay(200);

  // Entra no deep sleep pelo intervalo calculado
  SleepManager_enterDeepSleep(sleepSeconds);
}

void loop() {
  // Loop não é utilizado, pois a lógica do CogniBee é 100% baseada em deep sleep.
}