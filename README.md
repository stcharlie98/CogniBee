# CogniBee  
Trabalho de Conclusão de Curso (Projeto CogniBee)

![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-ESP32-blue)
![Language](https://img.shields.io/badge/language-C%2B%2B-orange)
![Status](https://img.shields.io/badge/status-Protótipo%20Funcional-yellow)
![Last Commit](https://img.shields.io/github/last-commit/stcharlie98/CogniBee)
![Repo Size](https://img.shields.io/github/repo-size/stcharlie98/CogniBee)
![Top Language](https://img.shields.io/github/languages/top/stcharlie98/CogniBee)
![PCB Revision](https://img.shields.io/badge/PCB-Rev%203.0-blue)

---

## Visão Geral

O CogniBee é um sistema de monitoramento para colmeias que integra sensores, firmware modular, conectividade e um conjunto de modelos 2D/3D e PCB desenvolvidos especificamente para o protótipo.  
O sistema registra temperatura, umidade e peso da colmeia, permitindo análises contínuas com baixo consumo de energia através de deep sleep programável.

Este repositório reúne o firmware do ESP32, modelos mecânicos, arquivos da PCB e uma versão anterior do site usado para visualização de dados.

---

## Funcionalidades Principais

- Medição de temperatura e umidade (DHT22)  
- Medição de peso com célula de carga + HX711  
- Envio de telemetria via MQTT/Blynk  
- Gerenciamento de energia com deep sleep  
- Arquitetura modular do firmware  
- Estrutura física compacta adaptada ao interior da colmeia  
- PCB projetada para o protótipo (Rev. 3.0)

---

## Como usar o código Arduino

A pasta `/Arduino Code/mainCode` contém o firmware modular do ESP32.

### 1. Requisitos

- ESP32 DevKit  
- Arduino IDE 2.x  
- Bibliotecas necessárias:  
  - DHT sensor library  
  - Adafruit Unified Sensor  
  - HX711  
  - WiFi (nativa)  
  - Blynk ou PubSubClient  

### 2. Configuração

No arquivo `config.h`, ajuste:

- Pinos do DHT22  
- Pinos do HX711  
- Fator de calibração da balança  
- Intervalos de deep sleep  

No arquivo `credentials.h`, informe:

- Wi-Fi SSID e senha  
- Token Blynk ou parâmetros MQTT

### 3. Upload

1. Abra a Arduino IDE  
2. Vá em **Arquivo > Abrir** e selecione o diretório `mainCode`  
3. Em **Ferramentas**, selecione:  
   - Placa: **ESP32 Dev Module**  
   - Porta correspondente  
4. Clique em **Upload**

Após o envio, o ESP32 executará automaticamente o ciclo de leitura → transmissão → deep sleep.

---

## Estrutura do Repositório

/Arduino Code
mainCode/ → Firmware do ESP32
/AutoCAD 2D → Desenhos estruturais
/Fusion → Modelos 3D
/PCB → Projeto da PCB (Rev. 3.0)
/Website → Versão antiga do site
LICENSE
README.md

yaml
Copy code

---

## Tecnologias Utilizadas

- ESP32 – Firmware em C++  
- MQTT / Blynk  
- AutoCAD 2D  
- Fusion 360  
- Software de EDA para PCB  
- HTML/CSS/JS (versão antiga do site)

---

## Licença

Distribuído sob a licença MIT.

---

# 🇺🇸 README — English Version

# CogniBee  
Intelligent Beehive Monitoring System

![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-ESP32-blue)
![Language](https://img.shields.io/badge/language-C%2B%2B-orange)
![Status](https://img.shields.io/badge/status-Working%20Prototype-yellow)
![Last Commit](https://img.shields.io/github/last-commit/stcharlie98/CogniBee)
![Repo Size](https://img.shields.io/github/repo-size/stcharlie98/CogniBee)
![Top Language](https://img.shields.io/github/languages/top/stcharlie98/CogniBee)
![PCB Revision](https://img.shields.io/badge/PCB-Rev%203.0-blue)

---

## Overview

CogniBee is an embedded monitoring system for beehives combining sensors, modular firmware, IoT communication and custom PCB and mechanical design.  
It records temperature, humidity and weight, operating with low power consumption through a deep sleep routine optimized for field use.

This repository contains the ESP32 firmware, mechanical models, PCB files and an older version of the website used for data display.

---

## Key Features

- Temperature and humidity measurement (DHT22)  
- Weight measurement using load cell + HX711  
- MQTT/Blynk telemetry  
- Deep sleep power management  
- Modular firmware structure  
- Mechanical design adapted for hive installation  
- Custom PCB (Rev. 3.0)

---

## How to Use the Arduino Code

The ESP32 firmware is located in `/Arduino Code/mainCode`.

### 1. Requirements

- ESP32 DevKit  
- Arduino IDE 2.x  
- Required libraries:  
  - DHT sensor library  
  - Adafruit Unified Sensor  
  - HX711  
  - WiFi (built-in)  
  - Blynk or PubSubClient  

### 2. Configuration

In `config.h`, set:

- DHT22 pins  
- HX711 pins  
- Load cell calibration factor  
- Deep sleep intervals  

In `credentials.h`, set:

- Wi-Fi SSID and password  
- Blynk token or MQTT credentials

### 3. Upload

1. Open Arduino IDE  
2. Load the `mainCode` directory  
3. Select:  
   - Board: **ESP32 Dev Module**  
   - Correct COM port  
4. Click **Upload**

The ESP32 will automatically run the read → publish → deep sleep cycle.

---

## Repository Structure

/Arduino Code
mainCode/ → ESP32 firmware
/AutoCAD 2D → Structural drawings
/Fusion → Mechanical models
/PCB → PCB layout (Rev. 3.0)
/Website → Old version of the website
LICENSE
README.md

yaml
Copy code

---

## Technologies Used

- ESP32 (C++)  
- MQTT / Blynk  
- AutoCAD 2D  
- Fusion 360  
- PCB EDA tools  
- HTML/CSS/JS (legacy website)

---

## License

Released under the MIT License.
