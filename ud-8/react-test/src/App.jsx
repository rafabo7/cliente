import { useState } from 'react'

import Hero from './hero'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Gradient } from './Gradient'

function App() {
  
  const [hue, setHue] = useState(180)
  const [saturation, setSaturation] = useState(0)
  const [steps, setSteps] = useState(5)

  return (
    <>

      <h1>Again... react</h1>
      <Gradient 
        hue={hue}
        saturation={saturation}
        number={steps}
      /> 

      
      
    </>
  )
}

export default App
