const usuarios = [
  { nombre: "Carlos", rol: "admin", intentos: 1, bloqueado: false },
  { nombre: "Laura", rol: "empleado", intentos: 3, bloqueado: false },
  { nombre: "Pedro", rol: "invitado", intentos: 5, bloqueado: true }, // bloqueado: true como dato inicial, el enunciado no cubre el caso de desbloquear un usuario, no se añade a las funciones
  { nombre: "Ana", rol: "empleado", intentos: 0, bloqueado: false },
];

// 1
function crearPoliticaSeguridad( intentosMax ){

    const numIntentos = intentosMax

    return (arr) => {
        const roles = arr

        return (user) => {
            let {nombre, rol, intentos, bloqueado} = user

            if ( roles.includes(rol) && intentos > numIntentos ) {
                bloqueado = true
                return {nombre, rol, intentos, bloqueado}
            } else {
                return user

            }
        }
    }
}

// const maximo3Intentos = crearPoliticaSeguridad(3);
// const politica = maximo3Intentos(["empleado", "admin"]);

// const usuarioActualizado = politica(usuarios[1]);

// 2 *************************************************************************************

// const usuario = { nombre: "Clara", rol: "empleado", intentos: 4, bloqueado: false };

// const maximo3Intentos = crearPoliticaSeguridad(3)(["empleado", "admin"]);
// const maximo5Intentos = crearPoliticaSeguridad(5)(["invitado"]);
// const politicas = [maximo3Intentos, maximo5Intentos];



function aplicarPoliticas( user, politicasArr ){

    let userToCheck = Object.assign(user)

    for ( let i = 0; i < politicasArr.length; i++) {
        userToCheck = politicasArr[i](userToCheck)
    }

    return userToCheck
}

// const usuarioActualizado = aplicarPoliticas(usuario, politicas);

// 3 *************************************************************

const politicaEmpleadoInvitado = crearPoliticaSeguridad(5)([ "empleado", "invitado" ])
const politicaAdmin = crearPoliticaSeguridad(2)([ "admin" ])

const politicas2025 = [ politicaAdmin, politicaEmpleadoInvitado]

let resultados = usuarios.map( user => aplicarPoliticas(user, politicas2025) )

console.log(resultados)