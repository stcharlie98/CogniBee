#pragma once

struct Telemetria {
  float peso;
  float temp;
  float umid;
};

void Sensors_begin();
Telemetria Sensors_coletar();
