"use strict";
// Configuracion.ts
class Configuracion {
    // Constructor privado para prevenir la instanciación directa
    constructor() {
        this.idioma = 'es'; // Idioma por defecto
        this.rutaBaseDatos = '/ruta/a/base/datos'; // Ruta de base de datos por defecto
        this.nivelRegistro = 'info'; // Nivel de registro por defecto
    }
    // Método para obtener la instancia del Singleton
    static obtenerInstancia() {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }
    // Métodos para obtener y actualizar propiedades
    obtenerIdioma() {
        return this.idioma;
    }
    establecerIdioma(idioma) {
        this.idioma = idioma;
    }
    obtenerRutaBaseDatos() {
        return this.rutaBaseDatos;
    }
    establecerRutaBaseDatos(ruta) {
        this.rutaBaseDatos = ruta;
    }
    obtenerNivelRegistro() {
        return this.nivelRegistro;
    }
    establecerNivelRegistro(nivel) {
        this.nivelRegistro = nivel;
    }
}
// Ejemplo de uso
const config1 = Configuracion.obtenerInstancia();
console.log(`Idioma inicial: ${config1.obtenerIdioma()}`);
console.log(`Ruta de base de datos: ${config1.obtenerRutaBaseDatos()}`);
console.log(`Nivel de registro: ${config1.obtenerNivelRegistro()}`);
// Actualizar configuración
config1.establecerIdioma('en');
config1.establecerRutaBaseDatos('/new/path/to/database');
config1.establecerNivelRegistro('debug');
const config2 = Configuracion.obtenerInstancia();
console.log(`Idioma actualizado: ${config2.obtenerIdioma()}`);
console.log(`Ruta de base de datos actualizada: ${config2.obtenerRutaBaseDatos()}`);
console.log(`Nivel de registro actualizado: ${config2.obtenerNivelRegistro()}`);
// Comprobar que ambas instancias son la misma
console.log(config1 === config2); // Debería mostrar true
