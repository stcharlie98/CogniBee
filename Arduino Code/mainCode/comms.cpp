#include "comms.h"
#include "credentials.h"
#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

#define BLYNK_PRINT Serial

void Comms_begin() {
  Serial.print("[WiFi] Conectando em: ");
  Serial.println(WIFI_SSID);

  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASS);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\n[WiFi] Conectado.");
  Serial.print("[WiFi] IP: ");
  Serial.println(WiFi.localIP());

  Blynk.begin(BLYNK_AUTH_TOKEN, WIFI_SSID, WIFI_PASS);
}

void Comms_run() {
  if (WiFi.status() == WL_CONNECTED) {
    Blynk.run();
  }
}
