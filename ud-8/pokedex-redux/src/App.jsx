import { useEffect, useState } from 'react'

import {
  getPokemon,
  getSprites,

  
  selectPokedex,
  selectSprites
} from './redux/pokedexSlice'

import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import PokeForm from './components/PokeForm'
import PokeData from './components/PokeData'

function App() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  const pokemonNames = useSelector(selectPokedex)
  const pokemonSprites = useSelector(selectSprites)

  useEffect( () => {
    dispatch(getPokemon())
  } ,[])

  return (
    <>
      <PokeForm />
      
      <PokeData />

    </>
  )
}

export default App
