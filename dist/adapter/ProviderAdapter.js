"use strict";
// src/Adapter/ProviderAdapter.ts
Object.defineProperty(exports, "__esModule", { value: true });
class ExternalProviderAPI {
    fetchProducts() {
        return ["Product A", "Product B", "Product C"];
    }
    updateStock(product, quantity) {
        console.log(`Updated stock for ${product}: ${quantity}`);
    }
}
class ProviderAdapter {
    constructor(externalAPI) {
        this.externalAPI = externalAPI;
    }
    getProducts() {
        return this.externalAPI.fetchProducts();
    }
    updateInventory(product, quantity) {
        this.externalAPI.updateStock(product, quantity);
    }
}
exports.default = ProviderAdapter;
