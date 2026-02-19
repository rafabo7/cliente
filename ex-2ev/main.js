import { obtenerDatosUsuario, obtenerEstadisticas } from './userlib.js'

async function procesarUsuario(userId) {
    
    return Promise.all([
        obtenerDatosUsuario(userId), 
        obtenerEstadisticas(userId)
    ]).then( ([datos, estadisticas]) => {

        return {
            ...datos,
            estadisticas
        }

    }
)

}

async function procesarUsuarios(arr) {
    let data = []
    for (let i = 0; i < arr.length; i++) {
        data.push( procesarUsuario(arr[i]))
        
    }
    return Promise.all(data)
}

let user2 = await procesarUsuario(2)
// console.log(user2)

let userData = await procesarUsuarios([ 3, 2, 1 ])

console.log(userData)