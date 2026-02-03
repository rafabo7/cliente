const DEFAULT_LANGUAGE = '7' // Español
import { useState } from "react"
import { 
  getSprites,
  selectPokedex
 } from "../redux/pokedexSlice"

 import { useDispatch, useSelector } from "react-redux"

function pokemonsInLanguage(pokemons, language) {
  return pokemons.filter(pokemon => pokemon.local_language_id === language)
}

function PokeForm(props) {

  const [query, setQuery ] = useState('')
  const [ language, setLanguage ] = useState(DEFAULT_LANGUAGE)
  const { data: names } = useSelector(selectPokedex)

  console.log( typeof names)

  const dataList = pokemonsInLanguage(names, language)

  console.log(dataList)

  const dispatch = useDispatch()

  function handleSearch(e){
    e.preventDefault()
    dispatch(getSprites(query))
    setQuery('')
  }

  function handleLanguage(e){
    setLanguage(e.target.value)
  }

  

  return (
    <div>
      <h2>PokeForm</h2>
      <form onSubmit={handleSearch} >
        <label>
          Nombre del pokèmon:
          <input 
            type="text" 
            name="name" 
            list="pokemons" 
            value={query} 
            onChange={e => setQuery(e.target.value)}
          />
        </label>
        <datalist id="pokemons">
           {
              dataList.map( (item, index) => (
                <option key={index} > {item.name} </option>
              ))
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
