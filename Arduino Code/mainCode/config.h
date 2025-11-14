#pragma once

// -------------------------
// Pinagem do Protótipo
// -------------------------
#define PIN_DHT_DATA   27
#define PIN_HX711_DT   12
#define PIN_HX711_SCK  14

// -------------------------
// Configurações do DHT
// -------------------------
#define DHT_TYPE DHT22

// -------------------------
// Calibração da célula de carga
// (obtida experimentalmente)
// -------------------------
#define CALIBRATION_FACTOR 46.18f
#define HX711_SAMPLES 10

// -------------------------
// Timer de leitura
// -------------------------
#define SENSOR_READ_INTERVAL_MS 5000

// -------------------------
// Pinos Virtuais do Blynk
// -------------------------
#define VPIN_PESO         V0
#define VPIN_TEMPERATURA  V1
#define VPIN_UMIDADE      V2
