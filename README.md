<!-- insertar titulo: Documentación repositorio. -->
# Documentación repositorio.


## Comandos básicos de serverless para deploy local.

<!-- insertar primer comnado -->
### serverless invoke local -f [nombre_funcion] -s [ambiente_deploy] 
Ojo que es necesario usar 'local' para que no se haga deploy en AWS.!!!


## Como trabajar con endpoints o url con http utilizando Api Gateway.

```bash
# Comando para deployar en AWS
serverless deploy 
```

















#### Ejemplo de como crear un endpoint con http utilizando Api Gateway.

```bash
# Ejemplo de como crear un endpoint con http utilizando Api Gateway.
functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: hello
          method: get
          cors: true
```