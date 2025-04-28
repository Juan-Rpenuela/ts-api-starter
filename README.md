# API-TS

Este proyecto es una API desarrollada en TypeScript utilizando Node.js, Express y MongoDB. La API permite gestionar productos, incluyendo operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

## Características

- **CRUD de Productos**: Permite crear, obtener, actualizar y eliminar productos.
- **Validación de Datos**: Uso de Mongoose para validar los datos antes de almacenarlos en la base de datos.
- **Reglas de Negocio**: Implementación de reglas como ajustes automáticos en los precios según ciertas condiciones.
- **Estructura Modular**: Separación de responsabilidades en controladores, servicios y modelos.

---

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [MongoDB](https://www.mongodb.com/) (instancia local o en la nube)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/API-TS.git
   cd API-TS
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   MONGO_URI=mongodb://localhost:27017/api-ts
   PORT=3000
   ```

---

## Uso

### Ejecutar en modo desarrollo
Para iniciar el servidor en modo desarrollo con recarga automática:
```bash
npm run dev
```

### Ejecutar en modo producción
Compila el proyecto y luego inicia el servidor:
```bash
npm run build
npm start
```

---

## Endpoints

### Productos
- **GET /api/products**: Obtiene todos los productos.
- **GET /api/products/:id**: Obtiene un producto por su ID.
- **POST /api/products**: Crea un nuevo producto.
- **PUT /api/products/:id**: Actualiza un producto existente.
- **DELETE /api/products/:id**: Elimina un producto.

---

## Estructura del Proyecto

```plaintext
API-TS/
├── controllers/    # Controladores que manejan las solicitudes HTTP
├── models/         # Modelos de Mongoose para la base de datos
├── services/       # Lógica de negocio y conexión con los modelos
├── routes/         # Definición de las rutas de la API
├── .env            # Variables de entorno
├── package.json    # Dependencias y scripts del proyecto
└── README.md       # Documentación del proyecto
```

---

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz un push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.
