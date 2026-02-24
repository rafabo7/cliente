import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaNumeros from './ListaNumeros'
import NuevoNumero from './NuevoNumero'

function App() {

  return (
    <>
      <NuevoNumero />
      <ListaNumeros />
    </>
  )
}

export default App
