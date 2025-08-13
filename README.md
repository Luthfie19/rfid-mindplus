# MFRC522 RFID Module – mind plus extentions

![](./arduinoC/_images/featured.png)

This project demonstrates how to use the **MFRC522 RFID module** with an Arduino board to read and write data from RFID tags/cards.  
It uses the popular [MFRC522 Arduino library](https://github.com/miguelbalboa/rfid) to simplify communication over the SPI interface.

---

## Features
- Read unique IDs (UID) from RFID tags/cards
- Write custom data to RFID cards
- Detect multiple card types (MIFARE 1K, 4K, Ultralight, etc.)
- Simple integration with Arduino projects

---

## Components Required
- 1 × Arduino board (e.g., Uno, Nano, Mega)
- 1 × MFRC522 RFID module
- 1 × RFID card/tag
- Jumper wires
- Breadboard (optional)

---

## Pinout

| MFRC522 Pin | Arduino Uno Pin |
|-------------|-----------------|
| VCC         | 3.3V            |
| RST         | D9              |
| GND         | GND             |
| MISO        | D12             |
| MOSI        | D11             |
| SCK         | D13             |
| SDA (SS)    | D10             |

> **Note:** The MFRC522 module must be powered with **3.3V** (not 5V) to avoid damage.

---

## Installation
1. Install the **MFRC522** library by Miguel Balboa from the Arduino IDE Library Manager:
   - Open Arduino IDE → Tools → Manage Libraries...
   - Search for `MFRC522` and install the latest version.
2. Connect the hardware as per the pinout above.
3. Upload the example sketch.

---
