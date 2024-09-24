"use strict";
// main.ts
// Clase para el periférico Monitor
class Monitor {
    constructor(resolucion) {
        this.resolucion = resolucion;
    }
    mostrarInfo() {
        console.log(`Monitor: Resolución - ${this.resolucion}`);
    }
}
// Clase para el periférico Impresora
class Impresora {
    constructor(tipoImpresion) {
        this.tipoImpresion = tipoImpresion;
    }
    mostrarInfo() {
        console.log(`Impresora: Tipo de impresión - ${this.tipoImpresion}`);
    }
}
// Clase para el periférico Proyector
class Proyector {
    constructor(brillo) {
        this.brillo = brillo;
    }
    mostrarInfo() {
        console.log(`Proyector: Brillo - ${this.brillo} lúmenes`);
    }
}
// Clase que implementa el método factory para crear periféricos
class PerifericoSalidaFactory {
    static crearPeriferico(tipo) {
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
