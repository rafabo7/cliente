import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gradient from './Components/Gradient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Halt stop!</h1>

      <Gradient 
        hue={350}
        saturation={100}
        number={15}
      />

    </>
  )
}

export default App
