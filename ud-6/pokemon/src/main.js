const URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemonBtn = document.querySelector("#getPokemon")

async function getSpanishName(url) {

    let res = await fetch(url)
    let json = await res.json()
    let spa = json.names[5].name

        
    return spa

}

async function getPokemon(name='bulbasaur'){

    try {
        let res = await fetch(`${URL}${name}`)
        let data = await res.json()
        let {moves} = data
        let movesUrlList = moves.map( (move) => move.move.url).slice(0, 10)
        

        let spanishMoves =  movesUrlList.map( url => getSpanishName(url) )
        spanishMoves = await Promise.all(spanishMoves)

        console.log(spanishMoves)
        
        
    } catch (err) {
        throw err
        
    }
}



getPokemonBtn.addEventListener( 'click' , () =>  {
    console.time('getPokemon')
    getPokemon()
    console.timeEnd('getPokemon')

} )
