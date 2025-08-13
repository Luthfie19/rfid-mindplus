#include "MFRC522_Extension.h"

String getRFIDUID(MFRC522 &reader) {
    if (!reader.PICC_IsNewCardPresent() || !reader.PICC_ReadCardSerial()) {
        return "";
    }
    String uidStr = "";
    for (byte i = 0; i < reader.uid.size; i++) {
        if (reader.uid.uidByte[i] < 0x10) uidStr += "0"; // Tambah 0 di depan kalau 1 digit
        uidStr += String(reader.uid.uidByte[i], HEX);
        if (i != reader.uid.size - 1) uidStr += " "; // <-- Pemisah spasi
    }
    uidStr.toUpperCase();
    reader.PICC_HaltA();
    reader.PCD_StopCrypto1();
    return uidStr;
}