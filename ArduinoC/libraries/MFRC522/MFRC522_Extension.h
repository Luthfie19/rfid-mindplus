#ifndef MFRC522_EXTENSION_H
#define MFRC522_EXTENSION_H

#include <Arduino.h>
#include "MFRC522.h"

String getRFIDUID(MFRC522 &reader);

#endif