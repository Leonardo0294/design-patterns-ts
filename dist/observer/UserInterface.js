"use strict";
// src/Observer/UserInterface.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = exports.UserInterface = void 0;
class UserInterface {
    update(inventoryChange) {
        console.log(`User Interface updated: ${inventoryChange}`);
    }
}
exports.UserInterface = UserInterface;
class Inventory {
    constructor() {
        this.observers = [];
        this.equipmentList = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    addEquipment(equipment) {
        this.equipmentList.push(equipment);
        this.notifyObservers(`Equipment added: ${equipment}`);
    }
    removeEquipment(equipment) {
        this.equipmentList = this.equipmentList.filter(e => e !== equipment);
        this.notifyObservers(`Equipment removed: ${equipment}`);
    }
    notifyObservers(change) {
        this.observers.forEach(observer => observer.update(change));
    }
}
exports.Inventory = Inventory;
