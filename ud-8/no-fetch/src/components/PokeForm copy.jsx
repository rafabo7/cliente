import { useState } from "react"

const DEFAULT_LANGUAGE = '7' // Español

function pokemonsInLanguage(pokemons, language) {
  return pokemons.filter(pokemon => pokemon.local_language_id === language)
}

function PokeForm({ pokemons, onSearch }) {

  const [ language, setLanguage ] = useState(DEFAULT_LANGUAGE)

  const [ filtered, setFiltered ] = useState(pokemonsInLanguage(pokemons, language).slice(0, 100))

  const [ query, setQuery ] = useState('')

  
  

  function handleLanguage(e){
    let language = e.target.value
    setFiltered(pokemonsInLanguage(pokemons, language))
    setLanguage(language)
  }

  function handleSearch() {

    let id = filtered.map( item => {
      if (item.name === query) return item.pokemon_species_ide
    } )

    onSearch(id)

  }




  return (
    <div>
      <h2>PokeForm</h2>
      <form onSubmit={handleSearch} >
        <label>
          Nombre del pokèmon:
          <input 
          onChange={e => setQuery(e.target.value)}
          
          type="text" 
          name="name" 
          list="pokemons"/>
        </label>
        <datalist id="pokemons">
          {
            filtered.map( poke => <option>{poke.name}</option>)
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
