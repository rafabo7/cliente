import { obtenerConfiguracion, obtenerRegistros } from "./devicelib.js";


async function procesarDispositivo(deviceId) {
    let { nombre, tipo, estado } = await obtenerConfiguracion(deviceId)
    let registros = await obtenerRegistros(nombre)

    return {
        deviceId,
        nombre,
        tipo,
        estado,
        registros
    }
}


let reg = await procesarDispositivo(1)
console.log(reg)


async function procesarDispositivos(deviceIds) {
    let procesos = []

    for (let i = 0; i < deviceIds.length; i++) {
        procesos.push(procesarDispositivo(deviceIds[i]))
    }


    return await Promise.all(procesos)

}

let resultado = await procesarDispositivos([1, 2, 3])


console.dir(resultado, { depth: null })