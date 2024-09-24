"use strict";
// src/Singleton/Configuration.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Configuration {
    constructor() {
        this.language = "en";
        this.dbPath = "/data/db";
        this.logLevel = "info";
        this.mongoHost = "localhost";
        this.mongoPort = 27017;
        this.mongoUser = "admin";
        this.mongoDBName = "inventoryDB";
    }
    static getInstance() {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    }
    getMongoHost() {
        return this.mongoHost;
    }
    getMongoPort() {
        return this.mongoPort;
    }
    getMongoUser() {
        return this.mongoUser;
    }
    getMongoDBName() {
        return this.mongoDBName;
    }
}
exports.default = Configuration;
