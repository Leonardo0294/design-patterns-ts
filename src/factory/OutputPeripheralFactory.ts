// main.ts

// Interfaz que define el comportamiento de un periférico de salida
interface IPerifericoSalida {
    mostrarInfo(): void;
}

// Clase para el periférico Monitor
class Monitor implements IPerifericoSalida {
    constructor(private resolucion: string) {}

    mostrarInfo(): void {
        console.log(`Monitor: Resolución - ${this.resolucion}`);
    }
}

// Clase para el periférico Impresora
class Impresora implements IPerifericoSalida {
    constructor(private tipoImpresion: string) {}

    mostrarInfo(): void {
        console.log(`Impresora: Tipo de impresión - ${this.tipoImpresion}`);
    }
}

// Clase para el periférico Proyector
class Proyector implements IPerifericoSalida {
    constructor(private brillo: number) {}

    mostrarInfo(): void {
        console.log(`Proyector: Brillo - ${this.brillo} lúmenes`);
    }
}

// Clase que implementa el método factory para crear periféricos
class PerifericoSalidaFactory {
    static crearPeriferico(tipo: string): IPerifericoSalida {
        switch (tipo) {
            case "Monitor":
                return new Monitor("1920x1080"); // Resolución por defecto
            case "Impresora":
                return new Impresora("Inyección de tinta"); // Tipo de impresión por defecto
            case "Proyector":
                return new Proyector(3000); // Brillo por defecto
            default:
                throw new Error("Tipo de periférico no reconocido");
        }
    }
}

// Función principal para probar la creación de periféricos
function main() {
    const monitor = PerifericoSalidaFactory.crearPeriferico("Monitor");
    monitor.mostrarInfo();

    const impresora = PerifericoSalidaFactory.crearPeriferico("Impresora");
    impresora.mostrarInfo();

    const proyector = PerifericoSalidaFactory.crearPeriferico("Proyector");
    proyector.mostrarInfo();
}

// Ejecutar la función principal
main();
