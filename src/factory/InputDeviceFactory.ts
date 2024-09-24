// src/factory/InputDeviceFactory.ts

abstract class InputDevice {
    constructor(public brand: string, public connectionType: string) {}
    abstract details(): string;
}

class Keyboard extends InputDevice {
    constructor(brand: string, connectionType: string) {
        super(brand, connectionType);
    }

    public details(): string {
        return `Teclado - Marca: ${this.brand}, Conexión: ${this.connectionType}`;
    }
}

class Mouse extends InputDevice {
    constructor(brand: string, connectionType: string) {
        super(brand, connectionType);
    }

    public details(): string {
        return `Ratón - Marca: ${this.brand}, Conexión: ${this.connectionType}`;
    }
}

class Scanner extends InputDevice {
    constructor(brand: string, connectionType: string) {
        super(brand, connectionType);
    }

    public details(): string {
        return `Escáner - Marca: ${this.brand}, Conexión: ${this.connectionType}`;
    }
}

class InputDeviceFactory {
    public createDevice(type: string, brand: string, connectionType: string): InputDevice {
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
