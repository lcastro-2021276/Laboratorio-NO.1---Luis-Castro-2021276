# 📅 Sistema de Citas y Recordatorios — Backend
 
Sistema backend para gestión de citas entre padres y coordinadores, construido con arquitectura de microservicios.
 
---
 
## 🏗️ Arquitectura del Sistema
 
```
Postman
   │
   ▼
Auth Service (.NET + SQL)
   │
   ▼
API Principal (Node.js + MongoDB)
   │
   ▼
Servicio Email (Nodemailer)
```
 
---
 
## 🗄️ Modelo de Datos
 
### Auth Service — SQL (.NET)
 
**Tabla: Users**
 
| Campo | Tipo | Restricción |
|---|---|---|
| Id | UUID | PK |
| Email | VARCHAR(150) | UNIQUE, NOT NULL |
| PasswordHash | VARCHAR(255) | NOT NULL |
| Role | VARCHAR(20) | PADRE / COORDINADOR |
| IsVerified | BOOLEAN | DEFAULT FALSE |
| VerificationToken | VARCHAR(255) | NULL |
| CreatedAt | DATETIME | NOT NULL |
 
---
 
### API Principal — MongoDB (modelo lógico)
 
**Tabla: Appointments**
 
| Campo | Tipo |
|---|---|
| Id | UUID |
| ParentId | UUID (FK → Users) |
| CoordinatorId | UUID (FK → Users) |
| Date | DATE |
| StartTime | DATETIME |
| EndTime | DATETIME |
| Reason | TEXT |
| Status | PENDING / CONFIRMED / CANCELLED / COMPLETED |
| CreatedAt | DATETIME |
 
**Tabla: Reminders**
 
| Campo | Tipo |
|---|---|
| Id | UUID |
| AppointmentId | UUID (FK → Appointments) |
| Email | VARCHAR |
| SendDate | DATETIME |
| Sent | BOOLEAN |
 
**Tabla: AppointmentHistory**
 
| Campo | Tipo |
|---|---|
| Id | UUID |
| AppointmentId | UUID |
| Action | VARCHAR |
| PerformedBy | UUID |
| CreatedAt | DATETIME |
 
### Relaciones
- Un Usuario puede tener muchas Citas
- Una Cita puede tener muchos Recordatorios
- Una Cita puede tener muchos registros en Historial
- Solo usuarios con rol `PADRE` pueden crear citas
- Solo `COORDINADOR` puede confirmarlas
 
---
 
## 📦 Dependencias
 
### .NET (Auth Service)
- Entity Framework Core
- BCrypt.Net
- JWT Bearer
- MailKit
- FluentValidation
 
### Node.js (API Principal)
```bash
npm install express mongoose dotenv cors helmet
npm install jsonwebtoken
npm install nodemailer
npm install node-cron
npm install express-validator
npm install winston
```
 
### Servicio de correo
- Gmail App Password + Nodemailer
- SendGrid *(recomendado para producción)*
- Mailtrap *(solo pruebas)*
 
---
 
## 👥 Equipo y Responsabilidades
 
| Integrante | Rol | Responsabilidades |
|---|---|---|
| **Fabián Alberto Say Pérez** | Product Owner | Auth Service (.NET): registro, login, JWT, verificación de email |
| **Lucian Guillermo Juarez Ispanel** | Scrum Master | Arquitectura Node, MongoDB Atlas, Middleware JWT, Helmet/CORS, manejo de errores |
| **Luis Fernando Castro** | Backend Dev | Modelo Appointment, CRUD completo, validación de horarios, solapamiento de citas |
| **Fernando Muxtay** | Backend Dev | Modelo Reminder, Nodemailer, node-cron, envío automático, confirmación de asistencia |
| **José Gutiérrez** | Backend Dev | Historial de citas, logs con Winston, express-validator, documentación Swagger |
| **Ricardo García** | Backend Dev | Testing en Postman, colecciones exportables, pruebas de seguridad y tokens |
 
---
 
## 🗓️ Sprints
 
| Sprint | Tareas |
|---|---|
| **Sprint 1** | Estructura de proyectos, conexiones DB, Modelo Users, Modelo Appointment |
| **Sprint 2** | Registro con verificación de email, Login con JWT, Middleware JWT en Node |
| **Sprint 3** | CRUD completo de citas, validaciones de negocio |
| **Sprint 4** | Recordatorios automáticos, confirmación por email, historial |
| **Sprint 5** | Seguridad avanzada, documentación, pruebas completas en Postman |
 
---
 
## 🔒 Reglas de Seguridad
 
- ❌ No permitir login sin email verificado
- ❌ No permitir crear citas sin JWT válido
- ❌ No permitir citas en el pasado
- ❌ No permitir doble horario (solapamiento)
- ❌ No permitir emails duplicados al registrarse
- ✅ Validar formato de email
- ✅ Usar variables de entorno (`.env`)
 
---
 
## ⚙️ Variables de Entorno
 
Crear un archivo `.env` en cada servicio con las variables necesarias (DB connection strings, JWT secret, credenciales de correo, etc.). **Nunca subir el `.env` al repositorio.**
