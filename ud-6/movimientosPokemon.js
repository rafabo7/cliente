const URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemonBtn = document.querySelector("#getPokemon")

async function getPokemon(name='bulbasaur'){
    let res = await fetch(`${URL}${name}`)
    let data = await res.json()
    console.table(data)

}

getPokemonBtn.addEventListener( 'click' , () =>  {
    console.time('getPokemon')
    getPokemon
    console.timeEnd('getPokemon')

} )
