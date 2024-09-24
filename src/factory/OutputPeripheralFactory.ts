// src/Factory/OutputPeripheralFactory.ts

abstract class OutputPeripheral {
    constructor(public brand: string) {}
    abstract details(): string;
}

class Monitor extends OutputPeripheral {
    constructor(brand: string, public resolution: string) {
        super(brand);
    }

    public details(): string {
        return `Monitor - Brand: ${this.brand}, Resolution: ${this.resolution}`;
    }
}

class Printer extends OutputPeripheral {
    constructor(brand: string, public printType: string) {
        super(brand);
    }

    public details(): string {
        return `Printer - Brand: ${this.brand}, Print Type: ${this.printType}`;
    }
}

class Projector extends OutputPeripheral {
    constructor(brand: string, public lumens: number) {
        super(brand);
    }

    public details(): string {
        return `Projector - Brand: ${this.brand}, Lumens: ${this.lumens}`;
    }
}

class OutputPeripheralFactory {
    public createPeripheral(type: string, brand: string, spec: string | number): OutputPeripheral {
        switch (type) {
            case "Monitor":
                return new Monitor(brand, spec as string);
            case "Printer":
                return new Printer(brand, spec as string);
            case "Projector":
                return new Projector(brand, spec as number);
            default:
                throw new Error("Unknown peripheral type");
        }
    }
}

export default OutputPeripheralFactory;
