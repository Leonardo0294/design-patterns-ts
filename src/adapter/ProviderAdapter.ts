// src/Adapter/ProviderAdapter.ts

class ExternalProviderAPI {
    public fetchProducts(): string[] {
        return ["Product A", "Product B", "Product C"];
    }

    public updateStock(product: string, quantity: number): void {
        console.log(`Updated stock for ${product}: ${quantity}`);
    }
}

interface IProvider {
    getProducts(): string[];
    updateInventory(product: string, quantity: number): void;
}

class ProviderAdapter implements IProvider {
    private externalAPI: ExternalProviderAPI;

    constructor(externalAPI: ExternalProviderAPI) {
        this.externalAPI = externalAPI;
    }

    public getProducts(): string[] {
        return this.externalAPI.fetchProducts();
    }

    public updateInventory(product: string, quantity: number): void {
        this.externalAPI.updateStock(product, quantity);
    }
}

export default ProviderAdapter;
