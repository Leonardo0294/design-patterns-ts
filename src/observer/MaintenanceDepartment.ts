// src/Observer/MaintenanceDepartment.ts

interface Observer {
    update(equipmentName: string, status: string): void;
}

class MaintenanceDepartment implements Observer {
    public update(equipmentName: string, status: string): void {
        console.log(`Maintenance notified: ${equipmentName} needs maintenance (Status: ${status}).`);
    }
}

class Equipment {
    private observers: Observer[] = [];

    constructor(public name: string, public type: string, public status: string) {}

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public changeStatus(newStatus: string): void {
        this.status = newStatus;
        this.notifyObservers();
    }

    private notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.name, this.status));
    }
}

export { MaintenanceDepartment, Equipment };
