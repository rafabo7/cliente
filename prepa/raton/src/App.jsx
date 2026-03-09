import { useState } from 'react'

import './App.css'
import Grid from './Components/Grid'

import { useSelector, useDispatch } from "react-redux"



import {

  selectCasillasDesbloqueadas,
  selectIsPlaying,
  setIsPlaying,
  setRatonQueso

} from "./redux/juegoSlice"



function App() {

  const dispatch = useDispatch()

  const desbloqueadas = useSelector(selectCasillasDesbloqueadas)
  const isPlaying = useSelector(selectIsPlaying)



  function beginGame(){

    dispatch(setIsPlaying(true))
    dispatch(setRatonQueso())


  }


  return (

    <>
      <h1>Juego del Ratón y Queso</h1>

      {  desbloqueadas.length >= 2 && !isPlaying  

        ? <button className="comenzar-btn" onClick={beginGame} >Comenzar</button>
        : <button className="comenzar-btn" disabled>Comenzar</button>
      }

      <div className="container">

        <Grid />

      </div>

    </>


  )
}

export default App
