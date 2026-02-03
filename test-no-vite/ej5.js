let direcciones = [
    {
        // Válido
        pais: 'España', region: '', cp: '46014',
        ciudad: 'Valencia', direccion: 'Carrer Misericòrdia, 34',
        complemento: '',
        movil: '', fijo: '961 20 69 90'
    },
    {
        // Inválido: no tiene movil o fijo
        pais: 'España', region: '', cp: '46960',
        ciudad: 'Aldaia', direccion: 'C/ Montcabrer, 22',
        complemento: 'Pol. Ind. La Lloma',
        movil: '', fijo: ''
    },
    {
        // Inválido: no tiene país
        pais: '', region: 'Alicante', cp: '',
        ciudad: 'Petrer', direccion: 'Los Pinos, 7',
        complemento: '',
        movil: '', fijo: '965 37 08 88'
    }
]

function validarUbicacion(dir) {
    return dir.ciudad && dir.pais && dir.direccion
}

function validarTlf(dir) {
    return dir.movil || dir.fijo
}

function validarCP(dir) {
    return dir.cp || dir.region
}

function validarDirecciones(dir){

    return validarUbicacion(dir) && validarTlf(dir) && validarCP(dir)

}

let direccionesValidas = direcciones.filter( validarDirecciones )

console.log(direccionesValidas)