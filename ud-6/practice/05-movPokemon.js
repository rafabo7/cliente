async function getSpanishMoveNames(urls) {

    let movesFecth = []

    for (let i = 0; i < urls.length; i++) {

        movesFecth.push(fetch(urls[i]))

    }

    let res = await Promise.all(movesFecth)
    let data = await Promise.all(res.map(item => item.json()))
    let arr = data.map(item => item['names'])

    let moves = []

    arr.forEach(item => {

        item.forEach(name => {
            if (name['language']['name'] === 'es') {
                moves.push(name['name'])
            }
        })
    })

    return moves
}

async function movimientos(pokemon) {

    let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    let data = await res.json()
    let urls = data['moves'].map(move => move['move']['url'])

    return await getSpanishMoveNames(urls)

}

let result = await movimientos('bulbasaur')

console.log(result)