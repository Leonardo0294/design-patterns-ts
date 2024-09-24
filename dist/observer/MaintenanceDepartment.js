"use strict";
// src/Observer/MaintenanceDepartment.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = exports.MaintenanceDepartment = void 0;
class MaintenanceDepartment {
    update(equipmentName, status) {
        console.log(`Maintenance notified: ${equipmentName} needs maintenance (Status: ${status}).`);
    }
}
exports.MaintenanceDepartment = MaintenanceDepartment;
class Equipment {
    constructor(name, type, status) {
        this.name = name;
        this.type = type;
        this.status = status;
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    changeStatus(newStatus) {
        this.status = newStatus;
        this.notifyObservers();
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.name, this.status));
    }
}
exports.Equipment = Equipment;
