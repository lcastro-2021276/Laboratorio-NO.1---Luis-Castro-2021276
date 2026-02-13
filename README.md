# Sistema Bancario – API (.NET)

## Descripción
Este proyecto corresponde al **avance parcial (35%)** del Sistema Bancario, desarrollado como
una **API REST en ASP.NET Core**, cuyo objetivo es sentar las bases del backend para la gestión
de usuarios, cuentas y transacciones bancarias.

La aplicación implementa la **estructura inicial del sistema**, autenticación segura mediante
**JWT** y endpoints funcionales básicos, los cuales serán ampliados en la entrega final.

---

## Tecnologías utilizadas
- ASP.NET Core Web API (.NET 6 / 7)
- Entity Framework Core
- JWT (JSON Web Tokens)
- SQL Server / PostgreSQL
- Swagger / Postman (pruebas de API)

---

## Funcionalidades implementadas (avance)
- Autenticación de usuarios con JWT
- Manejo de roles (Administrador y Cliente)
- Creación y visualización de clientes
- Generación automática de número de cuenta
- Consulta de saldo
- Registro de movimientos básicos
- Depósitos y transferencias simples

---

## Estructura general del proyecto
SistemaBancario.API
│
├── Controllers
├── Models
├── Data
├── Services
└── Program.cs


---

## Estado del proyecto
🚧 **Entrega parcial – En desarrollo**

Este avance forma parte de la revisión de APIs.  
Las validaciones avanzadas, reportes, reglas completas de negocio y la interfaz final
serán desarrolladas en las siguientes etapas del proyecto.

---

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
