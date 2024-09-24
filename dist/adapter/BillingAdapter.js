"use strict";
// src/Adapter/BillingAdapter.ts
Object.defineProperty(exports, "__esModule", { value: true });
class OldBillingSystem {
    createInvoice(details) {
        console.log(`Invoice created with details: ${details}`);
    }
    getInvoice(id) {
        return `Invoice #${id}`;
    }
}
class BillingAdapter {
    constructor(oldSystem) {
        this.oldSystem = oldSystem;
    }
    generateInvoice(details) {
        this.oldSystem.createInvoice(details);
    }
    consultInvoice(id) {
        return this.oldSystem.getInvoice(id);
    }
}
exports.default = BillingAdapter;
