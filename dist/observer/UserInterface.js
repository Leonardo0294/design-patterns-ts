"use strict";
// Clase para la interfaz de usuario que actúa como observador
class InterfazUsuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
    // Método para actualizar la visualización del inventario
    actualizar(inventario) {
        console.log(`Interfaz ${this.nombre} actualizada. Inventario actual:`);
        console.log(inventario.obtenerEquipos());
    }
}
// Clase Inventario que permite agregar, eliminar y notificar cambios
class Inventario {
    constructor() {
        this.equipos = [];
        this.observadores = [];
    }
    // Método para agregar un equipo al inventario
    agregarEquipo(equipo) {
        this.equipos.push(equipo);
        this.notificarObservadores();
    }
    // Método para eliminar un equipo del inventario
    eliminarEquipo(equipo) {
        const index = this.equipos.indexOf(equipo);
        if (index > -1) {
            this.equipos.splice(index, 1);
            this.notificarObservadores();
        }
    }
    // Método para obtener la lista de equipos
    obtenerEquipos() {
        return this.equipos;
    }
    // Método para agregar un observador
    agregarObservador(observador) {
        this.observadores.push(observador);
    }
    // Método para notificar a todos los observadores
    notificarObservadores() {
        for (const observador of this.observadores) {
            observador.actualizar(this);
        }
    }
}
// Ejemplo de uso del patrón Observer
const interfaz1 = new InterfazUsuario("Principal");
const interfaz2 = new InterfazUsuario("Secundaria");
const inventario = new Inventario();
// Agregar observadores al inventario
inventario.agregarObservador(interfaz1);
inventario.agregarObservador(interfaz2);
// Modificar el inventario
inventario.agregarEquipo("Compresora");
inventario.agregarEquipo("Generador");
inventario.eliminarEquipo("Compresora");
inventario.agregarEquipo("Aire Acondicionado");
