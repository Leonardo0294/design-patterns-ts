// src/Singleton/Configuration.ts

class Configuration {
    private static instance: Configuration;
    private language: string;
    private dbPath: string;
    private logLevel: string;
    private mongoHost: string;
    private mongoPort: number;
    private mongoUser: string;
    private mongoDBName: string;

    private constructor() {
        this.language = "en";
        this.dbPath = "/data/db";
        this.logLevel = "info";
        this.mongoHost = "localhost";
        this.mongoPort = 27017;
        this.mongoUser = "admin";
        this.mongoDBName = "inventoryDB";
    }

    public static getInstance(): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    }

    public getMongoHost(): string {
        return this.mongoHost;
    }

    public getMongoPort(): number {
        return this.mongoPort;
    }

    public getMongoUser(): string {
        return this.mongoUser;
    }

    public getMongoDBName(): string {
        return this.mongoDBName;
    }

    // Otros métodos...
}

export default Configuration;
