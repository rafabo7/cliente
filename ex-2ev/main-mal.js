import { obtenerDatosUsuario, obtenerEstadisticas } from "./userlib.js"

function procesarUsuario(userId) {
    let basicinfo = {}
    let stats = {}
    let datos = {}





    obtenerDatosUsuario(userId)
        .then(
            res => {
                datos = res
                obtenerEstadisticas(userId)
                    .then(
                        res => { datos.estadisticas = res
                            console.log(datos)
                         }
                    )
            }
        )
}


console.log(procesarUsuario(2))


function procesarUsuarios(arrId){

    for ( let i = 0; i < arrId.length; i ++ ) {
        procesarUsuario(arrId[i])
    }

    return 

}

console.log( procesarUsuarios([ 1,2,3 ]) ) 