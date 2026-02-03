import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokeData from './components/PokeData'
import Loading from './components/Loading'

import { getPokemonData, getSpeciesSprite } from './components/pokemon_api'
import PokeForm from './components/PokeForm.jsx'


function App() {
  
  useEffect( () => {
    getPokemonData().then( res => {setPokemonData(res)})
  }, [] )
  
  

  const [ sprite, setSprite ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ inputValue, setInputValue ] = useState('')

  const [pokemonData , setPokemonData] = useState([])


  

  

  const getSprite = async (specie) => {
    setIsLoading(true)
    let sprite = await getSpeciesSprite(specie)
    
    setSprite(sprite)
    setIsLoading(false)

  }

  const onSubmit = (e) => {
    e.preventDefault()
    getSprite(inputValue)

  }

  return (
    <>

        <form action="#" onSubmit={onSubmit}>
            <input 
            type="text" 
            name="poke" 
            id="poke" 
            onChange={e => setInputValue(e.target.value)} />
        </form>

        <PokeForm 
          pokemons={pokemonData}
          onSearch={getSprite}
        />

        <PokeData 
            id={sprite}
            isLoading={isLoading}
        />
        
        <Loading 
            isLoading={isLoading}
        />
    </>
  )
}

export default App
