// Configuracion.ts
class Configuracion {
    private static instancia: Configuracion;
  
    // Propiedades de configuración
    private idioma: string;
    private rutaBaseDatos: string;
    private nivelRegistro: string;
  
    // Constructor privado para prevenir la instanciación directa
    private constructor() {
      this.idioma = 'es'; // Idioma por defecto
      this.rutaBaseDatos = '/ruta/a/base/datos'; // Ruta de base de datos por defecto
      this.nivelRegistro = 'info'; // Nivel de registro por defecto
    }
  
    // Método para obtener la instancia del Singleton
    public static obtenerInstancia(): Configuracion {
      if (!Configuracion.instancia) {
        Configuracion.instancia = new Configuracion();
      }
      return Configuracion.instancia;
    }
  
    // Métodos para obtener y actualizar propiedades
    public obtenerIdioma(): string {
      return this.idioma;
    }
  
    public establecerIdioma(idioma: string): void {
      this.idioma = idioma;
    }
  
    public obtenerRutaBaseDatos(): string {
      return this.rutaBaseDatos;
    }
  
    public establecerRutaBaseDatos(ruta: string): void {
      this.rutaBaseDatos = ruta;
    }
  
    public obtenerNivelRegistro(): string {
      return this.nivelRegistro;
    }
  
    public establecerNivelRegistro(nivel: string): void {
      this.nivelRegistro = nivel;
    }
  }
  
  // Ejemplo de uso
  const config1 = Configuracion.obtenerInstancia();
  console.log(`Idioma inicial: ${config1.obtenerIdioma()}`);
  console.log(`Ruta de base de datos: ${config1.obtenerRutaBaseDatos()}`);
  console.log(`Nivel de registro: ${config1.obtenerNivelRegistro()}`);
  
  // Actualizar configuración
  config1.establecerIdioma('en');
  config1.establecerRutaBaseDatos('/new/path/to/database');
  config1.establecerNivelRegistro('debug');
  
  const config2 = Configuracion.obtenerInstancia();
  console.log(`Idioma actualizado: ${config2.obtenerIdioma()}`);
  console.log(`Ruta de base de datos actualizada: ${config2.obtenerRutaBaseDatos()}`);
  console.log(`Nivel de registro actualizado: ${config2.obtenerNivelRegistro()}`);
  
  // Comprobar que ambas instancias son la misma
  console.log(config1 === config2); // Debería mostrar true
  