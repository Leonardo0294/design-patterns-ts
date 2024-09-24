"use strict";
// src/Factory/InputDeviceFactory.ts
Object.defineProperty(exports, "__esModule", { value: true });
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
        return `Keyboard - Brand: ${this.brand}, Connection: ${this.connectionType}`;
    }
}
class Mouse extends InputDevice {
    constructor(brand, connectionType) {
        super(brand, connectionType);
    }
    details() {
        return `Mouse - Brand: ${this.brand}, Connection: ${this.connectionType}`;
    }
}
class Scanner extends InputDevice {
    constructor(brand, connectionType) {
        super(brand, connectionType);
    }
    details() {
        return `Scanner - Brand: ${this.brand}, Connection: ${this.connectionType}`;
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
                throw new Error("Unknown device type");
        }
    }
}
exports.default = InputDeviceFactory;
