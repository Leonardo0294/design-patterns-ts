

// Interfaz que define los métodos necesarios para un proveedor
export interface IProveedor {
    obtenerProductos(): Promise<any[]>; // Cambia el tipo según tus necesidades
    actualizarInventario(productId: string, cantidad: number): Promise<void>;
}

// Clase que simula una API externa de proveedores
class ProveedorExternoAPI {
    async fetchProductos(): Promise<any[]> {
        // Simular la obtención de productos desde una API externa
        console.log("Fetching products from external API...");
        return [
            { id: "1", nombre: "Producto 1", stock: 100 },
            { id: "2", nombre: "Producto 2", stock: 50 },
        ];
    }

    async updateStock(productId: string, cantidad: number): Promise<void> {
        // Simular la actualización del stock en la API externa
        console.log(`Updating stock for product ${productId} to ${cantidad}...`);
    }
}

// Clase adaptadora que implementa la interfaz IProveedor
class AdaptadorProveedor implements IProveedor {
    private proveedorExterno: ProveedorExternoAPI;

    constructor() {
        this.proveedorExterno = new ProveedorExternoAPI();
    }

    async obtenerProductos(): Promise<any[]> {
        const productosExternos = await this.proveedorExterno.fetchProductos();
        
        // Adaptar los datos a un formato adecuado para el sistema de inventario
        return productosExternos.map(producto => ({
            id: producto.id,
            nombre: producto.nombre,
            stock: producto.stock,
        }));
    }

    async actualizarInventario(productId: string, cantidad: number): Promise<void> {
        await this.proveedorExterno.updateStock(productId, cantidad);
    }
}

// Función principal para ejecutar el adaptador
async function main() {
    const adaptador = new AdaptadorProveedor();
    
    // Obtener productos
    const productos = await adaptador.obtenerProductos();
    console.log("Productos obtenidos:", productos);
    
    // Actualizar inventario
    await adaptador.actualizarInventario("1", 120);
    console.log("Inventario actualizado.");
}

// Ejecutar la función principal
main();
