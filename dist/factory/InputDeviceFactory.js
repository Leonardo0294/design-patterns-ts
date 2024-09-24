"use strict";
// src/factory/InputDeviceFactory.ts
class InputDevice {
    constructor(brand, connectionType) {
        this.brand = brand;
        this.connectionType = connectionType;
    }
}
class Keyboard extends InputDevice {
    constructor(brand, connectionType) {
        super(brand, connectionType);
    }
    details() {
        return `Teclado - Marca: ${this.brand}, Conexión: ${this.connectionType}`;
    }
}
class Mouse extends InputDevice {
    constructor(brand, connectionType) {
        super(brand, connectionType);
    }
    details() {
        return `Ratón - Marca: ${this.brand}, Conexión: ${this.connectionType}`;
    }
}
class Scanner extends InputDevice {
    constructor(brand, connectionType) {
        super(brand, connectionType);
    }
    details() {
        return `Escáner - Marca: ${this.brand}, Conexión: ${this.connectionType}`;
    }
}
class InputDeviceFactory {
    createDevice(type, brand, connectionType) {
        switch (type) {
            case "Keyboard":
                return new Keyboard(brand, connectionType);
            case "Mouse":
                return new Mouse(brand, connectionType);
            case "Scanner":
                return new Scanner(brand, connectionType);
            default:
                throw new Error("Tipo de dispositivo desconocido");
        }
    }
}
// Ejemplo para mostrar en consola
const factory = new InputDeviceFactory();
// Crear dispositivos
const teclado = factory.createDevice("Keyboard", "Logitech", "Inalámbrico");
const raton = factory.createDevice("Mouse", "Razer", "Cableado");
const escaner = factory.createDevice("Scanner", "HP", "USB");
// Mostrar detalles en consola
console.log(teclado.details());
console.log(raton.details());
console.log(escaner.details());
