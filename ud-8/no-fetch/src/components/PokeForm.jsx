import { useState } from "react"

const DEFAULT_LANGUAGE = '7' // Español

function pokemonsInLanguage(pokemons, language) {
  return pokemons.filter(pokemon => pokemon.local_language_id === language)
}

function PokeForm({ pokemons, onSearch }) {

  const [ language, setLanguage ] = useState(DEFAULT_LANGUAGE)
  const [ query, setQuery ] = useState('')


  let filteredPokes = pokemonsInLanguage(pokemons, language)
  

  function handleLanguage(e){
    let language = e.target.value
    setLanguage(language)
    setQuery('')
  }

  function handleSearch(e) {

    e.preventDefault()

    let id = filteredPokes.find( 
      item => item.name == query
    ).pokemon_species_id

    if (id !== undefined) {
      onSearch(id)

    }
    



  }


  return (
    <div>
      <h2>PokeForm</h2>
      <form onSubmit={handleSearch} >
        <label>
          Nombre del pokèmon:
          <input 
          onChange={e => setQuery(e.target.value)}
          value={query}         
          type="text" 
          name="name" 
          list="pokemons"/>
        </label>
        <datalist id="pokemons">
          {
            filteredPokes.map( (poke, index) => <option key={index} >{poke.name}</option>)
          }
        </datalist>
        <label>
          Lenguaje
          <select onChange={handleLanguage} >
            <option value="7">Español</option>
            <option value="5">Francés</option>
            <option value="6">Alemán</option>
          </select>
        </label>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default PokeForm
