# Ejercicio 2 (Mañanas)

Dispones de un sistema que gestiona accesos a un edificio. Cada usuario está representado por un objeto con las siguientes propiedades:

- nombre (string)
- rol (string: "admin", "empleado", "invitado")
- intentos (número de intentos de acceso fallidos)
- bloqueado (booleano)

```javascript
const usuarios = [
  { nombre: "Carlos", rol: "admin", intentos: 1, bloqueado: false },
  { nombre: "Laura", rol: "empleado", intentos: 3, bloqueado: false },
  { nombre: "Pedro", rol: "invitado", intentos: 5, bloqueado: true },
  { nombre: "Ana", rol: "empleado", intentos: 0, bloqueado: false },
];
```

## Apartado 1

Crea una función llamada `crearPoliticaSeguridad` que reciba un número máximo de intentos y devuelva otra función, la cual a su vez reciba un array de roles (por ejemplo, `["empleado", "invitado"]`) y retorne una tercera función.

Esa tercera función debe recibir un usuario y devolver un nuevo objeto donde el campo `bloqueado` se establezca en true si:
- El usuario pertenece a ese rol, y
- Supera el número máximo de intentos permitido.

Ejemplo de uso:
```js
const usuario = { nombre: "Clara", rol: "empleado", intentos: 4, bloqueado: false };

const maximo3Intentos = crearPoliticaSeguridad(3);
const politica = maximo3Intentos(["empleado", "admin"]);

const usuarioActualizado = politica(usuario);
# Devuelve:
# { nombre: "Clara", rol: "empleado", intentos: 4, bloqueado: true }
```

## Apartado 2

Crea una función llamada `aplicarPoliticas` que reciba un usuario y un array de políticas (funciones creadas con `crearPoliticaSeguridad`) y devuelva el usuario actualizado después de aplicar todas las políticas.

Ejemplo de uso:
```js
const usuario = { nombre: "Clara", rol: "empleado", intentos: 4, bloqueado: false };
const maximo3Intentos = crearPoliticaSeguridad(3)(["empleado", "admin"]);
const maximo5Intentos = crearPoliticaSeguridad(5)(["invitado"]);
const politicas = [maximo3Intentos, maximo5Intentos];

const usuarioActualizado = aplicarPoliticas(usuario, politicas);
# Devuelve:
# { nombre: "Clara", rol: "empleado", intentos: 4, bloqueado: true }
```


## Apartado 3

Utilizando dichas funciones, y sin utilizar bucles for, aplica las siguiente políticas a una lista de usuarios:
- Bloquear a los empleados e invitados que superen 5 intentos.
- Bloquear a los administradores que superen 2 intentos.


## Criterios de evaluación

- El programa es correcto, realiza la función que se solicita en el enunciado
- Se han utilizado estructuras del lenguaje adecuadas: bucles, condicionales, operadores, etc.
- Se ha estructurado correctamente el código utilizando módulos
- Se han utilizado variables y constantes de forma adecuada
- Se utilizan correctamente y cuando corresponda los tipos de datos y objetos predefinidos del lenguaje (Arrays, objetos planos, Map, Set, etc.)
- Se han utilizado funciones para estructurar el código, definiendo y utilizando parámetros y valores de respuesta de forma adecuada
- El programa es lo más sencillo posible para realizar su función.
- No existe código repetido: se han extraído los comportamientos comunes a funciones y se ha intentado hacer el código genérico.
