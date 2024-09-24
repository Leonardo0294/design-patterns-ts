// src/Adapter/BillingAdapter.ts

class OldBillingSystem {
    public createInvoice(details: string): void {
        console.log(`Invoice created with details: ${details}`);
    }

    public getInvoice(id: number): string {
        return `Invoice #${id}`;
    }
}

interface IBillingSystem {
    generateInvoice(details: string): void;
    consultInvoice(id: number): string;
}

class BillingAdapter implements IBillingSystem {
    private oldSystem: OldBillingSystem;

    constructor(oldSystem: OldBillingSystem) {
        this.oldSystem = oldSystem;
    }

    public generateInvoice(details: string): void {
        this.oldSystem.createInvoice(details);
    }

    public consultInvoice(id: number): string {
        return this.oldSystem.getInvoice(id);
    }
}

export default BillingAdapter;
