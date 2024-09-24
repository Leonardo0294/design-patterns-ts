"use strict";
// ConexionDB.ts
class ConexionDB {
    // Constructor privado para prevenir la instanciación directa
    constructor() {
        this.host = 'localhost'; // Host por defecto
        this.puerto = 5432; // Puerto por defecto
        this.usuario = 'admin'; // Usuario por defecto
        this.conectado = false; // Estado de conexión
    }
    // Método para obtener la instancia del Singleton
    static obtenerInstancia() {
        if (!ConexionDB.instancia) {
            ConexionDB.instancia = new ConexionDB();
        }
        return ConexionDB.instancia;
    }
    // Método para conectar a la base de datos
    conectar() {
        if (!this.conectado) {
            console.log(`Conectando a la base de datos en ${this.host}:${this.puerto} como ${this.usuario}...`);
            this.conectado = true;
            console.log('Conexión establecida.');
        }
        else {
            console.log('Ya está conectado a la base de datos.');
        }
    }
    // Método para desconectar de la base de datos
    desconectar() {
        if (this.conectado) {
            console.log('Desconectando de la base de datos...');
            this.conectado = false;
            console.log('Conexión cerrada.');
        }
        else {
            console.log('No hay ninguna conexión activa.');
        }
    }
    // Métodos para obtener propiedades de configuración
    obtenerHost() {
        return this.host;
    }
    obtenerPuerto() {
        return this.puerto;
    }
    obtenerUsuario() {
        return this.usuario;
    }
}
// Ejemplo de uso
const conexion1 = ConexionDB.obtenerInstancia();
conexion1.conectar();
const conexion2 = ConexionDB.obtenerInstancia();
console.log(`¿Son las mismas instancias? ${conexion1 === conexion2}`); // Debería mostrar true
conexion1.desconectar();
