#include "sensors.h"
#include "config.h"
#include <DHT.h>
#include <HX711.h>

static DHT dht(PIN_DHT_DATA, DHT_TYPE);
static HX711 hx;

// Inicialização dos sensores
void Sensors_begin() {
  Serial.println("[Sensores] Inicializando...");

  dht.begin();
  hx.begin(PIN_HX711_DT, PIN_HX711_SCK);

  if (hx.is_ready()) {
    hx.set_scale(CALIBRATION_FACTOR);
    hx.tare();
    Serial.println("[Sensores] HX711 pronto e tarado.");
  } else {
    Serial.println("[ERRO] HX711 não encontrado. Travando.");
    while (1);
  }
}

// Coleta os dados e retorna uma struct
Telemetria Sensors_coletar() {
  Telemetria t;

  t.peso = hx.get_units(HX711_SAMPLES) / 1000.0f;
  t.temp = dht.readTemperature();
  t.umid = dht.readHumidity();

  if (isnan(t.temp) || isnan(t.umid)) {
    Serial.println("[Aviso] Falha no DHT22. Mantendo última leitura válida.");
  }

  return t;
}
