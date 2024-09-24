// BillingAdapter.ts

// Definición de la interfaz IFacturacion
export interface IFacturacion {
    mostrarDetalles(): void;
  }
  
  // Clase FacturacionVieja
  export class FacturacionVieja {
    // Propiedades de la clase
    private nombreCliente: string;
    private monto: number;
  
    constructor(nombreCliente: string, monto: number) {
      this.nombreCliente = nombreCliente;
      this.monto = monto;
    }
  
    // Método para mostrar detalles
    public mostrarDetalles() {
      console.log(`Cliente: ${this.nombreCliente}, Monto: ${this.monto}`);
    }
  }
  
  // Clase AdaptadorFacturacion que implementa IFacturacion
  export class AdaptadorFacturacion implements IFacturacion {
    private facturacion: FacturacionVieja;
  
    constructor(facturacion: FacturacionVieja) {
      this.facturacion = facturacion;
    }
  
    // Implementación del método mostrarDetalles
    public mostrarDetalles() {
      this.facturacion.mostrarDetalles();
    }
  }
  
  // Ejemplo de uso
  const facturacionVieja = new FacturacionVieja("Juan Pérez", 1000);
  const adaptador = new AdaptadorFacturacion(facturacionVieja);
  
  // Llamar al método mostrarDetalles a través del adaptador
  adaptador.mostrarDetalles();
  