# **Gestor de Opiniones – API (Node.js / Express)**

## **Descripción**
Este proyecto corresponde al **backend completo** para un sistema de gestión de opiniones, desarrollado como una **API REST con Node.js y Express**, cuyo objetivo es manejar usuarios, publicaciones y comentarios de manera segura y eficiente.

La aplicación implementa **autenticación segura con JWT**, control de acceso por usuario y endpoints funcionales básicos, los cuales permiten crear, leer, actualizar y eliminar contenido de manera controlada.

---

## **Tecnologías utilizadas**
- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT (JSON Web Tokens)**  
- **Bcrypt** (encriptación de contraseñas)  
- **Helmet y CORS** (seguridad)  
- **Morgan** (logging)  
- **Dotenv** (configuración de variables de entorno)  

---

## **Funcionalidades implementadas**
- Registro y autenticación de usuarios con **JWT**  
- Creación, edición y eliminación de **publicaciones**  
- Creación, edición y eliminación de **comentarios**  
- Control de acceso: cada usuario solo puede modificar sus propios contenidos  
- Seguridad reforzada en rutas protegidas  
- Listado de usuarios, publicaciones y comentarios  

---

## **Rutas principales**

### **Públicas**
| **Método** | **Ruta**                  | **Descripción**       |
| ---------- | ------------------------ | ------------------- |
| **POST**   | `/api/v1/auth/register`   | Registrar usuario    |
| **POST**   | `/api/v1/auth/login`      | Login y obtener JWT  |

### **Protegidas (requieren JWT)**
| **Método** | **Ruta**             | **Descripción**           |
| ---------- | ------------------ | ----------------------- |
| **GET**    | `/api/v1/users`      | Listar usuarios         |
| **POST**   | `/api/v1/users`      | Crear usuario           |
| **GET**    | `/api/v1/posts`      | Listar publicaciones    |
| **POST**   | `/api/v1/posts`      | Crear publicación       |
| **GET**    | `/api/v1/comments`   | Listar comentarios      |
| **POST**   | `/api/v1/comments`   | Crear comentario        |

---

## **Estructura general del proyecto**
GestorOpiniones.API  
│  
├── **Controllers** – manejo de rutas y endpoints  
├── **Models** – esquemas de MongoDB (usuarios, posts, comentarios)  
├── **Middleware** – autenticación y seguridad (JWT, validaciones)  
├── **Routes** – definición de rutas públicas y protegidas  
├── **Services** – lógica de negocio  
└── **app.js / server.js** – archivo principal de configuración y arranque  

---

## **Autor**
Luis Fernando Castro Xicon - 2021276


## Observaciones
- Todos los endpoints protegidos requieren token JWT.
- El proyecto está enfocado exclusivamente en backend.
- El sistema será ampliado y optimizado en la entrega final.

# 🏦 Sistema Bancario API (.NET)

## 📌 Descripción
Sistema Bancario desarrollado en .NET bajo el enfoque de Arquitectura Limpia.
Este proyecto forma parte del avance del 35% del sistema completo.

La implementación actual incluye la estructura base del sistema,
modelo relacional y flujo mínimo funcional.

---

## 🎯 Estado del Proyecto (35%)

En esta etapa se implementó:

- Arquitectura por capas (Clean Architecture)
- Modelo relacional funcional
- Entidades principales
- Operaciones básicas
- Conexión a base de datos
- Migración inicial

No incluye aún:
- Validaciones avanzadas
- Límites diarios
- Reversión de transacciones
- API de divisas
- Seguridad avanzada

---

## 🏗 Arquitectura

El proyecto está organizado en capas:

src/
- SistemaBancario.Api
- SistemaBancario.Application
- SistemaBancario.Domain
- SistemaBancario.Persistence

### 📂 Domain
Contiene las entidades del negocio:
- User
- Account
- Transaction

### 📂 Application
Contiene la lógica básica del sistema.

### 📂 Persistence
Contiene:
- ApplicationDbContext
- Configuración de relaciones
- Migraciones

### 📂 API
Expone la aplicación y configura dependencias.

---

## 🗄 Modelo Relacional

User (1) → (N) Account  
Account (1) → (N) Transaction  

---

## ⚙ Tecnologías Utilizadas

- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Git & GitHub

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar repositorio
2. Configurar cadena de conexión en appsettings.json
3. Ejecutar migraciones
4. Ejecutar el proyecto

```bash
dotnet restore
dotnet ef database update
dotnet run
