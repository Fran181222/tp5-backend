# Practica Backend-Frontend

API REST desarrollada con Express, Sequelize ORM y Postgres.

## Requisitos

- Node.js
- Postgres
- Postman

## Instalacion

```bash
npm install
```

Copiar el archivo `.env.example` como `.env` y completar los datos de Postgres:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tp5_apellidonombre_backend
DB_USER=postgres
DB_PASSWORD=postgres
DB_SYNC_ALTER=true
```

Crear la base de datos en Postgres:

```sql
CREATE DATABASE tp5-backend;
```

Iniciar el servidor:

```bash
npm run dev
```

La API queda disponible en:

```text
http://localhost:3000
```

## PTO1 - Socios

### Crear socio

`POST /api/socios`

```json
{
  "nombre": "Juan",
  "apellido": "Perez",
  "foto": "https://example.com/foto.jpg",
  "dni": "30111222",
  "numeroSocio": 1,
  "activo": true
}
```

### Recuperar todos los socios

`GET /api/socios`

### Recuperar socios activos

`GET /api/socios/activos`

### Modificar socio

`PUT /api/socios/1`

```json
{
  "nombre": "Juan Carlos",
  "apellido": "Perez",
  "foto": "https://example.com/foto.jpg",
  "dni": "30111222",
  "numeroSocio": 1,
  "activo": false
}
```

### Eliminar socio

`DELETE /api/socios/1`

## PTO2 - Transacciones

### Crear transaccion

`POST /api/transacciones`

```json
{
  "idiomaOrigen": "es",
  "textoOrigen": "Hola mundo",
  "idiomaDestino": "en",
  "textoDestino": "Hello world",
  "emailCliente": "cliente@mail.com"
}
```

### Recuperar todas las transacciones

`GET /api/transacciones`

### Recuperar historial por cliente

`GET /api/transacciones/cliente/cliente@mail.com`

### Recuperar por idioma origen y destino usando params

`GET /api/transacciones/idiomas/es/en`

## PTO3 - Empleados

### Crear empleado

`POST /api/empleados`

```json
{
  "apellido": "Gomez",
  "nombre": "Ana",
  "dni": "33222111",
  "email": "ana.gomez@mail.com"
}
```

### Obtener todos los empleados

`GET /api/empleados`

### Obtener un empleado

`GET /api/empleados/1`

## PTO3 - Publicaciones

### Crear publicacion enviando empleado como propiedad

`POST /api/publicaciones`

```json
{
  "titulo": "Primera publicacion",
  "contenido": "Contenido de prueba",
  "imagenAsociada": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB",
  "fechaPublicacion": "2026-06-15",
  "vigente": true,
  "empleado": {
    "id": 1
  }
}
```

Tambien se acepta `empleadoId`.

### Recuperar todas las publicaciones incluyendo empleado

`GET /api/publicaciones`

### Eliminar publicacion

`DELETE /api/publicaciones/1`

### Modificar publicacion

`PUT /api/publicaciones/1`

```json
{
  "titulo": "Publicacion modificada",
  "contenido": "Contenido actualizado",
  "imagenAsociada": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB",
  "fechaPublicacion": "2026-06-15",
  "vigente": false,
  "empleado": {
    "id": 1
  }
}
```

### Buscar publicaciones por GET params

`GET /api/publicaciones/buscar?titulo=publicacion&vigente=true`

### Buscar publicaciones por POST

`POST /api/publicaciones/buscar`

```json
{
  "titulo": "publicacion",
  "vigente": true
}
```

## Coleccion Postman

Importar el archivo:

```text
postman/tp5-backend.postman_collection.json
```
