

# Especificación de Requerimientos

## Tabla de Contenido

1. Introducción 
    1.1 Propósito 
    1.2 Alcance 
    1.3 Definiciones, Acrónimos, y Abreviaturas 
    1.4 Referencias 
    1.5 Apreciación Global 

2. Descripción General 
    2.1 Perspectivas del Producto 
    2.2 Funciones del Producto 
    2.3 Características de Usuario 
    2.4 Restricciones 
    2.5 Atención y Dependencias 

3. Requerimientos Específicos 
    3.1 Requerimientos Funcionales 
    3.2 Requerimientos No Funcionales 
    3.3 Requerimientos de interfaz de usuario 

4. Determinación de las tecnologías de hardware, software y servicios requerido 
    4.1 Software 
    4.2 Hosting 
    4.3 Computador 
    4.4 Escáner Lector Código de Barras Automático USB Soporte Base 
    4.5 Router (Router Inalámbrico/Repetidor WiFi N300Mbps, Tp-Link TL-WR840N) 
    4.6 Presupuesto
<br>
# Especificación de Requerimientos

## Introducción
atravez de las varias problematicas de la empresa PARAISO DEL ARTESANO nosotros los aprendices SENA hemos decidido realizar un software el cual cumplira varias caracteristicas las cuales trataran en su medida de resolver y dar una mejor forma de trabajo y produccion de la empresa PARAISO DEL ARTESANO por medio de la tecnologia y las interconexiones de usuarios

## 1.1 Propósito
El propósito de este software es ayudar a los propietarios y a los gerentes del negocio a mantener un registro preciso de los ingresos y las compras realizadas. Además, la página web asociada permitirá subir los productos del negocio y atraer la atención de clientes potenciales, atraves de las varias especificaciones y requerimientos se desarrollara un software de estado interconexion el cual pueda hacer que los usuarios potenciales tengan una experiencia facil interactiva y entretenida a la hora de comprar de forma virtual sus productos
## 1.2 Alcance
El software permitirá al usuario registrar los ingresos y las compras realizadas en el negocio, así como también subir los productos a la página web asociada. El software debe ser fácil de usar y permitir una administración efectiva del negocio.

## 1.3 Definiciones, Acrónimos, y Abreviaturas
- SRS: Software Requirements Specification (Especificación de Requerimientos de Software)
- Usuario: Propietario o gerente del negocio que utilizará el software.
- Ingresos: El dinero que entra en el negocio.
- Compras: Los productos o servicios que se compran en el negocio.
- Página web: Sitio web asociado al negocio donde se muestran los productos y servicios ofrecidos.
- Cliente potencial: Persona interesada en los productos y servicios ofrecidos por el negocio.

## 1.4 Referencias
No aplicable.


## 1.5 Apreciación Global
El software que se desarrollará permitirá una gestión efectiva del negocio al mantener un registro preciso de los ingresos y las compras realizadas. Además, la página web asociada permitirá una mayor exposición del negocio a potenciales clientes.

## 2. Descripción General
### 2.1 Perspectivas del Producto
El software se desarrollará para ser utilizado en un negocio. Será una aplicación de escritorio con una página web asociada. La aplicación de escritorio permitirá al usuario registrar los ingresos y las compras realizadas en el negocio, mientras que la página web permitirá subir los productos y servicios ofrecidos por el negocio para su exposición a clientes potenciales.

### 2.2 Funciones del Producto
Las funciones del software incluirán:
- Registro de ingresos y compras.
- Visualización de informes de ingresos y compras.
- Subir productos y servicios a la página web asociada.
- Actualizar y eliminar productos y servicios de la página web.
- Permitir que los clientes realicen compras en línea.

### 2.3 Características de Usuario
El usuario del software será el propietario o gerente del negocio. Se espera que tenga conocimientos básicos de informática y que sea capaz de utilizar una aplicación de escritorio y una página web.

### 2.4 Restricciones
El software debe ser desarrollado para ser utilizado en un negocio específico y no se prevé que sea escalable a múltiples negocios. Además, el software sólo permitirá una sola sesión de usuario a la vez.

### 2.5 Atención y Dependencias
El software dependerá de una conexión a Internet para poder subir productos y servicios a la página web asociada.

A continuación te presento las tablas actualizadas para cada RF, incluyendo el proceso y el efecto colateral correspondiente:
<br>
<br>
<br>

# 3.1 Requerimientos funcionales


| Código | Nombre | Fecha | Grado Necesidad |
|--------|--------|-------|----------------|
| Rl-01  | login | - | Esencial |

| Descripción |  |
|-------------|--|
| Entradas    | datos personales (usuarios y contraseñas) |
| Fuente      | base de datos |
| Salida      | interfaz de promociones y servicios varios |
| Destino     | interfaaz de menu principal |
| Restricciones | solo accedera a ciertos modulos del sistema segun su rol de ususario |

| Proceso |  |
|---------|--|
| 1. ingresar nombre de usuario. |
| 2. ingresar contraseña. |
| 3. presionar el boton de ingresar. |
| 4. envio hacia la pagina principal. |

| Efecto Colateral |  |
|-----------------|--|
| en caso de errar la contraseña o nombre de ususario vaciar espacios corrrespondidos y volver a ingresar. |
| tiene un limite de cuatro intentos para ingresar. |
| Código | Nombre | Fecha | Grado Necesidad |
|--------|--------|-------|----------------|
| Rl-01  | login | - | Esencial |

<br>
<br>


 | Código | Nombre | Fecha | Grado Necesidad |
|--------|--------|-------|----------------|
| RP-02  | pedido | - | Alta |

| Descripción |  |
|-------------|--|
| Entradas    | Información de pedido del cliente |
| Fuente      | Cliente |
| Salida      | Confirmación del pedido, Base de datos de productos actualizada  |
| Destino     | Cliente |
| Restricciones | el pedido debe tener una comfirmacion de pago por parte del cliente, debe el sistema de pedido estar funcionando correctamente. |

| Proceso |  |
|---------|--|
| 1. Recibir información de pedido del cliente. |
| 2. Verificar que la información del pedido es válida. |
| 3. Actualizar el registro de Base de datos de productos. |


<br>
<br>

| Código | Nombre | Fecha | Grado Necesidad |
|--------|--------|-------|----------------|
| RV-03  | Registro de ventas | - | Esencial |

| Descripción |  |
|-------------|--|
| Entradas    | Información de ventas a través de escáner de código de barras o manualmente |
| Fuente      | Personal del negocio |
| Salida      | Registro de ventas, base de datos de productos actualizada |
| Destino     | Registro de ventas: Administración del negocio, Base de datos de productos: Página web |
| Restricciones | La base de datos de productos debe ser actualizada manualmente por el personal del negocio, y los productos solo podrán ser agregados o eliminados por aquellos con permisos de administrador. |

| Proceso |  |
|---------|--|
| 1. Capturar información de ventas. |
| 2. Verificar que la información ingresada de la venta es válida. |
| 3. Actualizar el registro de las ventas. |
| 4. Actualizar la base de datos de productos con la información correspondiente. |

| Efecto Colateral |  |
|-----------------|--|
| Actualización de la información de ventas en tiempo real. |
| Actualización de la base de datos de productos en tiempo real. |

<br>
<br>

| Código | Nombre | Fecha | Grado Necesidad |
|--------|--------|-------|----------------|
| RB-04 | Base de datos de productos | - | Esencial |

| Descripción |  |
|-------------|--|
| Entradas    | Información de productos a través de formulario en línea o manualmente |
| Fuente      | Personal del negocio |
| Salida      | Base de datos de productos actualizada |
| Destino     | Base de datos de productos: Página web |
| Restricciones | Los productos solo podrán ser agregados o eliminados por aquellos con permisos de administrador. |

| Proceso |  |
|---------|--|
| 1. Capturar información del producto. |
| 2. Verificar que la información ingresada es válida. |
| 3. Actualizar la base de datos de productos. |

| Efecto Colateral |  |
|-----------------|--|
| Actualización de la base de datos de productos en tiempo real. |

<br>
<br>

| Código | Nombre | Fecha | Grado Necesidad |
|--------|--------|-------|----------------|
| RP-05  | integracion con sistema de pago  | - | Alta |

| Descripción |  |
|-------------|--|
| Entradas    | Información de pago del cliente |
| Fuente      | Cliente |
| Salida      |  Confirmación de pago, registro de ventas y compras actualizado  |
| Destino     | Cliente, Administración del negocio |
| Restricciones | 
| El sistema de pago debe estar integrado y funcionando correctamente  | 
| Proceso |  |
|---------|--|
| 1. Recibir información de pago del cliente. |
| 2. Verificar que la información de pago es válida. |
| 3. Actualizar el registro de compras y ventas. |


<br>
<br>
 
# 3.2 Requerimientos no funcionales
<br>
<br>
A continuación, te presento una tabla con tres requisitos no funcionales adicionales para el software que estamos describiendo:

| Código | Nombre     | Fecha | Grado Necesidad | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|--------|------------|-------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RFN-01 | Rendimiento | -     | Alto           | El software debe ser capaz de manejar un alto volumen de transacciones y usuarios simultáneos sin disminuir el rendimiento. El sistema debe ser capaz de manejar al menos 100 transacciones por segundo y ser escalable para aumentar la capacidad en el futuro.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| RFN-02 | Seguridad   | -     | Alto           | El software debe tener medidas de seguridad robustas para garantizar la privacidad y confidencialidad de los datos de los clientes y la información del negocio. Se deben utilizar técnicas de encriptación y autenticación para proteger la información de los usuarios y prevenir cualquier intento de acceso no autorizado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| RFN-03 | Usabilidad | -     | Medio          | La interfaz de usuario del software y la página web asociada deben ser intuitivas y fáciles de usar para los usuarios, independientemente de su nivel de habilidad tecnológica. El sistema debe tener una interfaz de usuario amigable y accesible que permita a los usuarios realizar sus tareas sin dificultad y sin la necesidad de capacitación adicional.                                                                                                                                                                                  <br>
<br>

# 3.3 Requerimientos de interfaz de usuario

<br>
¡Disculpa por la confusión anterior! Aquí te dejo la misma tabla sin la columna de fecha:

| Código   | Nombre                                      | Grado Necesidad |
|----------|---------------------------------------------|---------------------|
| 3.3.1    | Interfaz de usuario para la página web       | Alta                      |
|          |                                             |                              |
| Descripción | La página web deberá tener una interfaz de usuario intuitiva y fácil de usar. Los productos del negocio deberán estar organizados en categorías y subcategorías. La página web deberá tener un buscador que permita al usuario encontrar productos específicos de manera rápida y fácil. |                               |
|          |                                             |                              |
| 3.3.2    | Interfaz de usuario para la sección de carrito de compras | Alta |
|          |                                             |                              |
| Descripción | La sección de carrito de compras deberá ser fácil de usar y permitir al usuario agregar y eliminar productos de manera intuitiva. El carrito de compras deberá mostrar un resumen detallado de los productos seleccionados y el total de la compra. Debe existir un botón claro para proceder con la compra. |                              |
|          |                                             |                              |
| 3.3.3    | Interfaz de usuario para la sección de inicio de sesión | Media |
|          |                                             |                              |
| Descripción | La sección de inicio de sesión deberá tener una interfaz de usuario clara y fácil de usar. El usuario deberá poder iniciar sesión con su correo electrónico y contraseña, o mediante su cuenta de redes sociales. Si el usuario olvida su contraseña, debe haber una opción para restablecerla mediante correo electrónico o un número telefónico registrado. |                                  |

<br>
<br>

## 4.1 Software

El software requerido deberá ser desarrollado utilizando un lenguaje de programación orientado a objetos, como Java o Python. Además, se utilizará una base de datos relacional para almacenar la información ingresada por el usuario y los clientes. Para desarrollar la página web asociada al software se utilizará un framework de desarrollo web, como Django o Spring.

## 4.2 Hosting

Se contratará un servicio de hosting para alojar la página web asociada al software. Es importante que el servicio de hosting ofrezca un alto nivel de seguridad y disponibilidad.

## 4.3 Computador

Para el desarrollo y prueba del software se utilizará un computador con un procesador de al menos 2 GHz y 8 GB de RAM.

## 4.4 Escáner Lector Código de Barras Automático USB Soporte Base

Para registrar las compras en el negocio se utilizará un escáner lector de códigos de barras. El escáner debe ser de alta calidad y debe tener soporte para conectar a través de USB.

## 4.5 Router

Se utilizará un router para proporcionar conectividad a Internet al software y a la página web asociada. Es importante que el router sea de alta calidad y tenga soporte para conectividad inalámbrica y cableada. El modelo elegido es el Router Inalámbrico/Repetidor WiFi N300Mbps, Tp-Link TL-WR840N.

## 4.6 Presupuesto

El presupuesto total para el desarrollo del software y la página web asociada se estima en $n. Este presupuesto incluye los costos de hardware, software, hosting y cualquier otro costo relacionado con el desarrollo y la implementación del software.
