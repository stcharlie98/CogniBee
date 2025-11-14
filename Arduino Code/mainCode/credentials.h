/**
 * @file credentials.h
 * @author Charles Santos de Souza
 * @brief Credenciais de Wi-Fi e Blynk.
 *
 * @details
 * Este arquivo contém informações sensíveis (tokens e senhas).
 * Ele NUNCA deve ser comitado em um repositório público, porém...
 * ...adicione "credentials.h" ao seu arquivo .gitignore caso você utilize seus dados.
 */

#pragma once

// --- Credenciais Wi-Fi (Bancada) ---
// Substitua "NOME_DA_REDE" pelo nome (SSID) da sua rede Wi-Fi.
#define WIFI_SSID "NOME_DA_REDE"
// Substitua "SENHA_DA_REDE" pela senha da sua rede Wi-Fi.
#define WIFI_PASS "SENHA_DA_REDE"

// --- Credenciais Blynk ---
// Estes valores são gerados pelo painel do Blynk ao criar um novo Template.
#define BLYNK_TEMPLATE_ID    "ID_DO_TEMPLATE"    // ID do Template (Ex: "TMPL6a8bCdeF")
#define BLYNK_TEMPLATE_NAME  "NOME_DO_TEMPLATE"           // Nome do Template (Ex: "Monitor Colmeia")
#define BLYNK_AUTH_TOKEN     "TOKEN_DE_AUTENTICACAO_GERADO_PELO_BLYNK" // Token único do dispositivo (Ex: "aBcD_12EfG_Hijk-lmnOpQrStUvwXyz")
#define BLYNK_FIRMWARE_VERSION "0.2.0"             // Versão do firmware (usado para OTA)