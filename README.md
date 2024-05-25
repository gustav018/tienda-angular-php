# Proyecto de Ecommerce en Angular y PHP

Este es un proyecto de ecommerce desarrollado con Angular para el frontend y PHP para el backend, utilizando XAMPP como servidor local.

## Estructura del Proyecto

El proyecto se compone de dos carpetas principales:
- `client`: Contiene el código del frontend desarrollado en Angular.
- `server`: Contiene el código del backend desarrollado en PHP.

## Requisitos Previos

Antes de empezar, asegúrate de tener instalados los siguientes programas:
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [XAMPP](https://www.apachefriends.org/es/index.html)

## Configuración del Servidor

1. Clona el repositorio desde GitHub:
    ```bash
    git clone https://github.com/gustav018/tienda-angular-php.git
    ```

2. Copia el proyecto en la carpeta `htdocs` de tu instalación de XAMPP:
    ```bash
    cp -r tienda-angular-php /path/to/xampp/htdocs/
    ```

3. Inicia los servicios de Apache y MySQL desde el panel de control de XAMPP.

4. Configura la base de datos:
    - Abre phpMyAdmin en tu navegador web (generalmente disponible en `http://localhost/phpmyadmin`).
    - Crea una nueva base de datos llamada `gym_store`.
    - Importa el archivo `gym_store.sql` ubicado en la carpeta `server`.

5. Edita las credenciales de la base de datos en el archivo `bd.php` ubicado en `server`:
    ```php
    <?php
    $contraseña = "";
    $usuario = "root";
    $nombre_base_de_datos = "gym_store";
    try {
        return new PDO('mysql:host=localhost;dbname=' . $nombre_base_de_datos, $usuario, $contraseña);
    } catch (Exception $e) {
        echo "Ocurrió algo con la base de datos: " . $e->getMessage();
    }
    ?>
    ```

## Configuración del Cliente

1. Abre una terminal y navega a la carpeta `client` del proyecto:
    ```bash
    cd /path/to/xampp/htdocs/tienda-angular-php/client
    ```

2. Instala las dependencias de Angular:
    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo de Angular:
    ```bash
    ng serve
    ```

## Acceso a la Aplicación

- Frontend: Abre tu navegador y ve a `http://localhost:4200` para ver la aplicación Angular.
- Backend: El backend en PHP estará disponible en `http://localhost/tienda-angular-php/server`.

## Notas Adicionales

- Asegúrate de que los servicios de Apache y MySQL están corriendo en XAMPP cada vez que trabajes en el proyecto.
- Puedes modificar las credenciales y otras configuraciones del servidor en el archivo `bd.php` según sea necesario.

¡Listo! Ahora deberías tener el proyecto de ecommerce funcionando en tu entorno local.
