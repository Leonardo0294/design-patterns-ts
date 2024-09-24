# Ejercicios de Patrones de Diseño en Aplicación de Inventario

Este proyecto implementa varios patrones de diseño (Singleton, Factory Method, Observer y Adaptador) en el contexto de una aplicación de inventario. A continuación, se detallan los ejercicios realizados para cada patrón.

## Tabla de Contenidos
1. [Patrón Singleton](#patrón-singleton)
   - [Ejercicio 1: Gestionar Configuración Global del Sistema](#ejercicio-1-gestionar-configuración-global-del-sistema)
   - [Ejercicio 2: Control de Conexiones a la Base de Datos](#ejercicio-2-control-de-conexiones-a-la-base-de-datos)
   
2. [Patrón Factory Method](#patrón-factory-method)
   - [Ejercicio 1: Crear Dispositivos de Entrada](#ejercicio-1-crear-dispositivos-de-entrada)
   - [Ejercicio 2: Fabricar Periféricos de Salida](#ejercicio-2-fabricar-periféricos-de-salida)

3. [Patrón Observer](#patrón-observer)
   - [Ejercicio 1: Notificación de Mantenimiento Preventivo](#ejercicio-1-notificación-de-mantenimiento-preventivo)
   - [Ejercicio 2: Actualización de Inventario en Tiempo Real](#ejercicio-2-actualización-de-inventario-en-tiempo-real)

4. [Patrón Adaptador](#patrón-adaptador)
   - [Ejercicio 1: Integrar Sistema de Facturación Antiguo](#ejercicio-1-integrar-sistema-de-facturación-antiguo)
   - [Ejercicio 2: Compatibilidad con APIs Externas](#ejercicio-2-compatibilidad-con-apis-externas)

## Patrón Singleton

### Ejercicio 1: Gestionar Configuración Global del Sistema
- Implementación de la clase `Configuracion` que sigue el patrón Singleton.
- Almacena propiedades como `idioma`, `rutaBaseDatos` y `nivelRegistro`.
- Métodos para obtener y actualizar propiedades.
- Asegura que solo exista una instancia de `Configuracion` en la aplicación.

### Ejercicio 2: Control de Conexiones a la Base de Datos
- Implementación de la clase `ConexionDB` como Singleton.
- Maneja conexiones a una base de datos ficticia, con propiedades como `host`, `puerto` y `usuario`.
- Métodos para conectar y desconectar la base de datos.
- Garantiza que todas las partes de la aplicación utilicen la misma instancia de `ConexionDB`.

## Patrón Factory Method

### Ejercicio 1: Crear Dispositivos de Entrada
- Clase `DispositivoEntradaFactory` que crea diferentes tipos de dispositivos de entrada.
- Clases específicas para cada dispositivo (`Teclado`, `Ratón`, `Scanner`).
- Integración de la creación de dispositivos en el sistema de inventario.

### Ejercicio 2: Fabricar Periféricos de Salida
- Clase `PerifericoSalidaFactory` que crea periféricos de salida.
- Clases específicas para cada tipo de periférico (`Monitor`, `Impresora`, `Proyector`).
- Manejo correcto de la creación de cada periférico según el tipo especificado.

## Patrón Observer

### Ejercicio 1: Notificación de Mantenimiento Preventivo
- Clase `DepartamentoMantenimiento` que actúa como observador.
- Implementación de la clase `Equipo` que notifica a los observadores cuando se necesita mantenimiento.

### Ejercicio 2: Actualización de Inventario en Tiempo Real
- Clase `InterfazUsuario` que actúa como observador.
- Modificación de la clase `Inventario` para agregar observadores y notificar cambios en la lista de equipos.

## Patrón Adaptador

### Ejercicio 1: Integrar Sistema de Facturación Antiguo
- Clase `FacturacionVieja` con métodos como `crearFactura` y `obtenerFactura`.
- Implementación de `AdaptadorFacturacion` para utilizar `FacturacionVieja` con la nueva interfaz `IFacturacion`.

### Ejercicio 2: Compatibilidad con APIs Externas
- Clase `ProveedorExternoAPI` con métodos como `fetchProductos` y `updateStock`.
- Implementación de `AdaptadorProveedor` para utilizar `ProveedorExternoAPI` con la interfaz `IProveedor`.

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone 