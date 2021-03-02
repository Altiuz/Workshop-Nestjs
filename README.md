# Nestjs Workshop - Altiuz

## Descripción 📝

Desarrollo de Web Service REST con Nodejs acompañado del framework de desarrollo [Nestjs](https://github.com/nestjs/nest),  conectado a Mysql DB a través de [TypeORM](https://typeorm.io/#/) y documentado con [Swagger](https://swagger.io).

## Prerequisitos ⚙️

```
> Instalar Nodejs (Prerequisito)
> Instalar Un editor de texto como VSCode, Atom , Vim, ...
> Instalar Consumidor de API's como Postman, Insomnia, Curl, ...
> Leventar una instancia de DB en Docker, PaaS, Localhost, ...
```
##  Documentación Oficial🧰

- [Nestjs](https://github.com/nestjs/nest)
- [TypeORM](https://typeorm.io/#/)
- [Swagger](https://swagger.io)
- [@Nestjs/Typeorm](https://docs.nestjs.com/techniques/database)
- [@Nestjs/Validation](https://docs.nestjs.com/techniques/validation)
- [@Nestjs/Swagger](https://docs.nestjs.com/openapi/introduction)

## Paso a paso 🔧
```
# Instalar Nest cli
$ npm i -g @nestjs/cli

# Crear proyecto
$ nest new [project-name]

# Crear módulo CRUD
$ nest generate/g resource/res [module-name]

# Instalar TypeORM
$ npm install --save @nestjs/typeorm typeorm mysql2

# Instalar Class Validator - Transformer
$ npm install class-validator class-transformer 

# Instalar Swagger
$ npm install --save @nestjs/swagger swagger-ui-express
```
## Ejecución 🚀

```
# dev mode
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Ejemplos de uso 📌

```
GET http://localhost:3000/users
```
```
# Request: N/A
```
```
# Response:
{
  "statusCode": 200,
  "statusMsg": "OK",
  "data": [
    {
      "id": 1,
      "firstName": "Matias",
      "lastName": "Lagos",
      "isActive": 1
    },
    {
      "id": 2,
      "firstName": "Lorem",
      "lastName": "Ipsum",
      "isActive": 0
    }
  ]
}
```

```
GET http://localhost:3000/users/1
```
```
# Request: N/A
```
```
# Response:
{
  "statusCode": 200,
  "statusMsg": "OK",
  "data": [
    {
      "id": 1,
      "firstName": "Matias",
      "lastName": "Lagos",
      "isActive": 1
    }
  ]
}
```

```
POST http://localhost:3000/users
```

```
# Request:
{
  "firstName": "Lorem",
  "lastName": "Ipsum",
  "isActive": 0
}
```
```
# Response:
{
  "statusCode": 201,
  "statusMsg": "CREATED",
  "data": [
    {
      "firstName": "Lorem",
      "lastName": "Ipsum",
      "isActive": 0,
      "id": 2
    }
  ]
}
```

```
PUT http://localhost:3000/users/2
```

```
# Request:
{
  "isActive": 1
}
```
```
# Response:
{
  "statusCode": 200,
  "statusMsg": "OK",
  "data": [
    {
      "id": 2,
      "isActive": 1
    }
  ]
}
```

```
DELETE http://localhost:3000/users/2
```
```
# Request: N/A
```
```
# Response:
{
  "statusCode": 200,
  "statusMsg": "OK",
}
```

[<img src="https://pbs.twimg.com/profile_images/1288217277121298433/saVCJOZ7.jpg" height="50" align="right"/>](https://altiuz.cl)
