// Clase para el departamento de mantenimiento que actúa como observador
class DepartamentoMantenimiento {
    private nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    // Método para notificar al departamento que un equipo necesita mantenimiento
    notificar(equipo: Equipo) {
      console.log(`Notificación al departamento ${this.nombre}: El equipo ${equipo.getNombre()} necesita mantenimiento.`);
    }
  }
  
  // Clase Equipo que permite agregar observadores y notificar
  class Equipo {
    private observadores: DepartamentoMantenimiento[] = [];
    private tiempoUso: number = 0;
  
    constructor(
      private nombre: string,
      private tipo: string,
      private estado: string
    ) {}
  
    // Método para agregar un observador
    agregarObservador(observador: DepartamentoMantenimiento) {
      this.observadores.push(observador);
    }
  
    // Método para usar el equipo durante un cierto número de horas
    usarHoras(horas: number) {
      this.tiempoUso += horas;
      console.log(`El equipo ${this.nombre} ha sido usado durante ${horas} horas. Tiempo total de uso: ${this.tiempoUso} horas.`);
      
      // Verificar si se debe notificar a los observadores
      if (this.tiempoUso >= 10) { // Umbral definido para mantenimiento
        this.notificarObservadores();
      }
    }
  
    // Método para notificar a todos los observadores
    private notificarObservadores() {
      for (const observador of this.observadores) {
        observador.notificar(this);
      }
    }
  
    // Método para obtener el nombre del equipo
    getNombre() {
      return this.nombre;
    }
  
    // Otros métodos o propiedades pueden ser añadidos según necesidad
  }
  
  // Ejemplo de uso del patrón Observer
  const mantenimiento = new DepartamentoMantenimiento("Mantenimiento");
  const equipo1 = new Equipo("Compresora", "Compresor", "Operativo");
  
  // Agregar el departamento de mantenimiento como observador del equipo
  equipo1.agregarObservador(mantenimiento);
  
  // Usar el equipo
  equipo1.usarHoras(5);  // No debería notificar
  equipo1.usarHoras(6);  // Debería notificar, total 11 horas
  