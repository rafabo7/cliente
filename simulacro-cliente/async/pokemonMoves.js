// Crea una función movimientos() que, dado un nombre de pokémon en inglés, devuelva de
// forma asíncrona el nombre en castellano de todos los movimientos de dicho pokémon en orden
// alfabético.
// Por ejemplo, movimientos(‘bulbasaur’) debería devolver:
// [‘Abatidoras’, ‘Bomba Germen’, ...]
// Los datos de un pokémon pueden obtenerse con una llamada al API:
// https://pokeapi.co/api/v2/pokemon/[NOMBRE DEL POKEMON EN INGLÉS]

async function movimientos(nombre) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const json = await res.json()
    const movimientosURL = json['moves'].map( move => move['move']['url'])

    console.log(`====================================================`);
    console.log(`Movimientos de ${nombre.toUpperCase()} :`);
    

    return await Promise.all( movimientosURL.map( url => movimientoEnEspañol(url)) )

}

async function movimientoEnEspañol(url) {
    const res = await fetch(url)
    const json = await res.json()

    const español = json['names'].find(name => name['language']['name'] === 'es')
    
    if (!español) {
        const inglés = json['names'].find(name => name['language']['name'] === 'en')
        return `Nombre en español no disponible. Inglés: ${inglés.name}`
    }

    return español.name
}


const result = await movimientos('bulbasaur')
console.log(result);






