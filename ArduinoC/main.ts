enum kaki {
	//% block="2"
	2,
	//% block="3"
	3,
	//% block="4"
	4,
	//% block="5"
	5,
	//% block="6"
	6,
	//% block="7"
	7,
	//% block="8"
	8,
	//% block="9"
	9,
	//% block="10"
	10,
	//% block="11"
	11,
	//% block="12"
	12,
	//% block="13"
	13,
}

declare var Generator: any;

//% color="#1100ff" iconWidth=50 iconHeight=40
namespace MFRC522 {

	//% block="Init RFID SS pin RST pin " blockType="command"
	export function init(parameter: any, block: any) {
		
		Generator.addInclude('MFRC522', '#include <MFRC522.h>');
		Generator.addInclude('mfrc522_ext', '#include <MFRC522_Extension.h>');
		Generator.addInclude('SPI', '#include <SPI.h>');
		Generator.addObject('rfid', 'MFRC522', `rfid(10, 9);`);
		Generator.addSetup('spi_begin', 'SPI.begin();');
		Generator.addSetup('rfid_begin', 'rfid.PCD_Init();');
	}

	//% block="Read RFID UID" blockType="reporter"
	export function readUID(parameter: any, block: any) {
		Generator.addCode(`getRFIDUID(rfid)`);
	}
}
