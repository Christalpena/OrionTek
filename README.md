# Prueba Tecnica

Bienvenido/a al proyecto de la aplicación web desarrollada con Django y React para gestionar clientes de una empresa. Esta aplicación fue diseñada como parte de una prueba técnica y está enfocada en la creación, lectura, actualización y eliminación (CRUD) de los datos de clientes, incluyendo su nombre, apellido y múltiples direcciones asociadas.

---

### Tecnologías Utilizadas:

- **Django**: Framework de desarrollo web de Python utilizado para crear la API que alimenta la aplicación.
- **Django Rest Framework (DRF)**: Biblioteca de Django que facilita la creación de API RESTful.
- **React**: Biblioteca de JavaScript utilizada para construir la interfaz de usuario dinámica y receptiva.
- **React Router**: Herramienta de enrutamiento utilizada para la navegación dentro de la aplicación React.
- **Axios**: Cliente HTTP utilizado para realizar peticiones AJAX entre el frontend y el backend.

---

### Configuración del Entorno de Desarrollo:

1. **Clonar el Repositorio:**
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Instalar Dependencias:**
   - Backend (Django):
     ```
     cd backend
     pip install -r requirements.txt
     ```
   - Frontend (React):
     ```
     cd frontend
     npm install
     ```

3. **Configuración de la Base de Datos:**
   - Configura tu base de datos en `backend/settings.py`. Por defecto se usa SQLite para facilitar el desarrollo, pero puedes cambiarla según tus necesidades.

4. **Ejecutar Migraciones:**
   ```
   python manage.py migrate
   ```

5. **Iniciar el Servidor:**
   - Backend:
     ```
     python manage.py runserver
     ```
   - Frontend:
     ```
     npm start
     ```

---
## IMPORTANTE
La aplicacion de django solo accepta peticiones provenientes del puerto 5173, por lo tanto asegurate de tener corriendo tu frontend en este puerto. Por otro lado las peticiones a la API se estaran realizando al pueroto por default de Django el 8000


### Estructura del Proyecto:

- **mysity/**: Contiene la confiiguracion basica de la app.
- **server/**: Contiene el código de Django para la API.
- **frontend/**: Contiene el código de React para la interfaz de usuario.
- **README.md**: Este archivo que proporciona información sobre el proyecto.
- **requirements.txt**: Archivo de texto con las dependencias de Python necesarias para el backend.

---

### Funcionalidades Principales:

1. **Listar Clientes**: Visualiza una lista de todos los clientes registrados.
2. **Agregar Cliente**: Añade un nuevo cliente proporcionando su nombre, apellido y direcciones.
3. **Editar Cliente**: Actualiza la información de un cliente existente.
4. **Eliminar Cliente**: Elimina un cliente de la base de datos.

---

¡Disfruta explorando y desarrollando esta aplicación para el control de clientes de empresa! Si tienes alguna pregunta o sugerencia, no dudes en comunicarte con el equipo de desarrollo. ¡Gracias por contribuir al proyecto!
