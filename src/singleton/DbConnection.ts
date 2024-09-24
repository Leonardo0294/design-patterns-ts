// src/Singleton/DbConnection.ts

import { MongoClient } from "mongodb";

class DbConnection {
    private static instance: DbConnection;
    private client: MongoClient | null = null;
    private host: string;
    private port: number;
    private user: string;
    private dbName: string;

    private constructor() {
        this.host = "localhost";
        this.port = 27017; // Puerto por defecto de MongoDB
        this.user = "admin"; // Cambia esto según tu configuración
        this.dbName = "inventoryDB"; // Nombre de la base de datos
    }

    public static getInstance(): DbConnection {
        if (!DbConnection.instance) {
            DbConnection.instance = new DbConnection();
        }
        return DbConnection.instance;
    }

    public async connect(): Promise<void> {
        if (!this.client) {
            const uri = `mongodb://${this.user}@${this.host}:${this.port}/${this.dbName}`;
            this.client = new MongoClient(uri);
            await this.client.connect();
            console.log(`Connected to MongoDB at ${this.host}:${this.port}`);
        }
    }

    public async disconnect(): Promise<void> {
        if (this.client) {
            await this.client.close();
            this.client = null;
            console.log("MongoDB disconnected");
        }
    }

    public getClient(): MongoClient | null {
        return this.client;
    }
}

export default DbConnection;
