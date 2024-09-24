"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Clase que simula una API externa de proveedores
class ProveedorExternoAPI {
    fetchProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            // Simular la obtención de productos desde una API externa
            console.log("Fetching products from external API...");
            return [
                { id: "1", nombre: "Producto 1", stock: 100 },
                { id: "2", nombre: "Producto 2", stock: 50 },
            ];
        });
    }
    updateStock(productId, cantidad) {
        return __awaiter(this, void 0, void 0, function* () {
            // Simular la actualización del stock en la API externa
            console.log(`Updating stock for product ${productId} to ${cantidad}...`);
        });
    }
}
// Clase adaptadora que implementa la interfaz IProveedor
class AdaptadorProveedor {
    constructor() {
        this.proveedorExterno = new ProveedorExternoAPI();
    }
    obtenerProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            const productosExternos = yield this.proveedorExterno.fetchProductos();
            // Adaptar los datos a un formato adecuado para el sistema de inventario
            return productosExternos.map(producto => ({
                id: producto.id,
                nombre: producto.nombre,
                stock: producto.stock,
            }));
        });
    }
    actualizarInventario(productId, cantidad) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.proveedorExterno.updateStock(productId, cantidad);
        });
    }
}
// Función principal para ejecutar el adaptador
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const adaptador = new AdaptadorProveedor();
        // Obtener productos
        const productos = yield adaptador.obtenerProductos();
        console.log("Productos obtenidos:", productos);
        // Actualizar inventario
        yield adaptador.actualizarInventario("1", 120);
        console.log("Inventario actualizado.");
    });
}
// Ejecutar la función principal
main();
