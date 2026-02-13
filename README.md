# Sistema Bancario – API (.NET)

## Descripción
Este proyecto corresponde al **avance parcial (35%)** del Sistema Bancario, desarrollado como
una **API REST en ASP.NET Core**, cuyo objetivo es sentar las bases del backend para la gestión
de usuarios, cuentas y transacciones bancarias.

En esta etapa se implementa una arquitectura por capas (Clean Architecture) que permite una adecuada separación de responsabilidades entre:

API (exposición de servicios)

Application (lógica del negocio)

Domain (entidades y reglas principales)

Persistence (acceso a datos y configuración relacional)

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
