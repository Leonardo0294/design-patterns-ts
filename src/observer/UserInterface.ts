// src/Observer/UserInterface.ts

interface Observer {
    update(inventoryChange: string): void;
}

class UserInterface implements Observer {
    public update(inventoryChange: string): void {
        console.log(`User Interface updated: ${inventoryChange}`);
    }
}

class Inventory {
    private observers: Observer[] = [];
    private equipmentList: string[] = [];

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public addEquipment(equipment: string): void {
        this.equipmentList.push(equipment);
        this.notifyObservers(`Equipment added: ${equipment}`);
    }

    public removeEquipment(equipment: string): void {
        this.equipmentList = this.equipmentList.filter(e => e !== equipment);
        this.notifyObservers(`Equipment removed: ${equipment}`);
    }

    private notifyObservers(change: string): void {
        this.observers.forEach(observer => observer.update(change));
    }
}

export { UserInterface, Inventory };
