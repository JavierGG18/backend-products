# Examen técnico Backend NestJs
Proyecto de prueba técnica API REST de CRUD de productos

## Tecnologías y Herramientas

* **Framework:** NestJS
* **Validación de datos:** `class-validator` & `class-transformer`
* **Base de datos:** MySQL (vía TypeORM) (El script de creación de db y tabla se encuentra en la carpeta sql)
* **Documentación:** OpenAPI / Swagger

## Variables en archivo .env requeridas
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=tusuario
DB_PASSWORD=tupassword
DB_NAME=tubasededatos


## Instalar dependencias
```bash
$ npm install
$ npm install class-validator class-transformer   
$ npm install @nestjs/config
$ npm install @nestjs/typeorm typeorm
$ npm install mysql2
$ npm install @nestjs/swagger
```

## Compilar y ejecutar proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Ruta de documentación swagger api
http://localhost:3000/api/

