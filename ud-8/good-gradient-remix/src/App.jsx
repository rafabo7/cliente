
import { useSelector } from 'react-redux'

import { selectGradient } from './gradientSlice'


import './App.css'
import Gradient from './components/Gradient'
import Picker from './components/Picker'
import Shower from './components/Shower'


function App() {

  const { hue, saturation, steps } = useSelector(selectGradient)


  return (
    <>
      <h1>Grandient reduxed</h1>

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

        saturation={saturation}

        steps={steps}
      />


    </>
  )
}

export default App
