#include "publisher.h"
#include "config.h"
#include <BlynkSimpleEsp32.h>

void Publisher_enviar(const Telemetria& t) {
  Blynk.virtualWrite(VPIN_PESO, t.peso);
  Blynk.virtualWrite(VPIN_TEMPERATURA, t.temp);
  Blynk.virtualWrite(VPIN_UMIDADE, t.umid);

  Serial.print("[Envio] Peso = ");
  Serial.print(t.peso, 2);
  Serial.print(" kg | Temp = ");
  Serial.print(t.temp);
  Serial.print(" °C | Umid = ");
  Serial.print(t.umid);
  Serial.println(" %");
}
