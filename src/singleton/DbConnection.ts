// ConexionDB.ts
class ConexionDB {
    private static instancia: ConexionDB;
  
    // Propiedades de la conexión a la base de datos
    private host: string;
    private puerto: number;
    private usuario: string;
    private conectado: boolean;
  
    // Constructor privado para prevenir la instanciación directa
    private constructor() {
      this.host = 'localhost'; // Host por defecto
      this.puerto = 5432; // Puerto por defecto
      this.usuario = 'admin'; // Usuario por defecto
      this.conectado = false; // Estado de conexión
    }
  
    // Método para obtener la instancia del Singleton
    public static obtenerInstancia(): ConexionDB {
      if (!ConexionDB.instancia) {
        ConexionDB.instancia = new ConexionDB();
      }
      return ConexionDB.instancia;
    }
  
    // Método para conectar a la base de datos
    public conectar(): void {
      if (!this.conectado) {
        console.log(`Conectando a la base de datos en ${this.host}:${this.puerto} como ${this.usuario}...`);
        this.conectado = true;
        console.log('Conexión establecida.');
      } else {
        console.log('Ya está conectado a la base de datos.');
      }
    }
  
    // Método para desconectar de la base de datos
    public desconectar(): void {
      if (this.conectado) {
        console.log('Desconectando de la base de datos...');
        this.conectado = false;
        console.log('Conexión cerrada.');
      } else {
        console.log('No hay ninguna conexión activa.');
      }
    }
  
    // Métodos para obtener propiedades de configuración
    public obtenerHost(): string {
      return this.host;
    }
  
    public obtenerPuerto(): number {
      return this.puerto;
    }
  
    public obtenerUsuario(): string {
      return this.usuario;
    }
  }
  
  // Ejemplo de uso
  const conexion1 = ConexionDB.obtenerInstancia();
  conexion1.conectar();
  
  const conexion2 = ConexionDB.obtenerInstancia();
  console.log(`¿Son las mismas instancias? ${conexion1 === conexion2}`); 
  
  conexion1.desconectar();
  