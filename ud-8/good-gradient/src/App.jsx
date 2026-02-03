import { useState } from 'react'

import './App.css'
import Gradient from './components/Gradient'
import Picker from './components/Picker'
import Shower from './components/Shower'


function App() {
  const [hue, setHue] = useState(30)
  const [saturation, setSaturation] = useState(20)
  const [steps, setSteps] = useState(5)

  return (
    <>
      <h1>Again react</h1>

      <Gradient 
        hue={hue}
        saturation={saturation}
        number={steps}
      />

      <Shower 
        hue={hue}
        saturation={saturation}
        steps={steps}
      />

      <Picker 
        hue={hue}
        setHue={setHue}

        saturation={saturation}
        setSaturation={setSaturation}

        steps={steps}
        setSteps={setSteps}
      />


    </>
  )
}

export default App
