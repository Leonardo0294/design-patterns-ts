"use strict";
// BillingAdapter.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptadorFacturacion = exports.FacturacionVieja = void 0;
// Clase FacturacionVieja
class FacturacionVieja {
    constructor(nombreCliente, monto) {
        this.nombreCliente = nombreCliente;
        this.monto = monto;
    }
    // Método para mostrar detalles
    mostrarDetalles() {
        console.log(`Cliente: ${this.nombreCliente}, Monto: ${this.monto}`);
    }
}
exports.FacturacionVieja = FacturacionVieja;
// Clase AdaptadorFacturacion que implementa IFacturacion
class AdaptadorFacturacion {
    constructor(facturacion) {
        this.facturacion = facturacion;
    }
    // Implementación del método mostrarDetalles
    mostrarDetalles() {
        this.facturacion.mostrarDetalles();
    }
}
exports.AdaptadorFacturacion = AdaptadorFacturacion;
// Ejemplo de uso
const facturacionVieja = new FacturacionVieja("Juan Pérez", 1000);
const adaptador = new AdaptadorFacturacion(facturacionVieja);
// Llamar al método mostrarDetalles a través del adaptador
adaptador.mostrarDetalles();
