"use strict";
// src/Factory/OutputPeripheralFactory.ts
Object.defineProperty(exports, "__esModule", { value: true });
class OutputPeripheral {
    constructor(brand) {
        this.brand = brand;
    }
}
class Monitor extends OutputPeripheral {
    constructor(brand, resolution) {
        super(brand);
        this.resolution = resolution;
    }
    details() {
        return `Monitor - Brand: ${this.brand}, Resolution: ${this.resolution}`;
    }
}
class Printer extends OutputPeripheral {
    constructor(brand, printType) {
        super(brand);
        this.printType = printType;
    }
    details() {
        return `Printer - Brand: ${this.brand}, Print Type: ${this.printType}`;
    }
}
class Projector extends OutputPeripheral {
    constructor(brand, lumens) {
        super(brand);
        this.lumens = lumens;
    }
    details() {
        return `Projector - Brand: ${this.brand}, Lumens: ${this.lumens}`;
    }
}
class OutputPeripheralFactory {
    createPeripheral(type, brand, spec) {
        switch (type) {
            case "Monitor":
                return new Monitor(brand, spec);
            case "Printer":
                return new Printer(brand, spec);
            case "Projector":
                return new Projector(brand, spec);
            default:
                throw new Error("Unknown peripheral type");
        }
    }
}
exports.default = OutputPeripheralFactory;
