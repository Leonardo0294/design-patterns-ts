"use strict";
// src/Singleton/DbConnection.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class DbConnection {
    constructor() {
        this.client = null;
        this.host = "localhost";
        this.port = 27017; // Puerto por defecto de MongoDB
        this.user = "admin"; // Cambia esto según tu configuración
        this.dbName = "inventoryDB"; // Nombre de la base de datos
    }
    static getInstance() {
        if (!DbConnection.instance) {
            DbConnection.instance = new DbConnection();
        }
        return DbConnection.instance;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                const uri = `mongodb://${this.user}@${this.host}:${this.port}/${this.dbName}`;
                this.client = new mongodb_1.MongoClient(uri);
                yield this.client.connect();
                console.log(`Connected to MongoDB at ${this.host}:${this.port}`);
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.client) {
                yield this.client.close();
                this.client = null;
                console.log("MongoDB disconnected");
            }
        });
    }
    getClient() {
        return this.client;
    }
}
exports.default = DbConnection;
