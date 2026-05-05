
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Grid from './components/Grid'
import { comenzar, selectCasillasDesbloqueadas, selectGameActive } from './redux/ratonQuesoSlice'

function App() {

  const desbloqueadas = useSelector(selectCasillasDesbloqueadas)
  const gameActive = useSelector(selectGameActive)
  const dispatch = useDispatch()
  const buttonState =  desbloqueadas.length < 2  ||  gameActive
  

  return (
    <>

      <h1>Juego del queso y el ratón</h1>
      <button disabled={buttonState} onClick={()=>dispatch(comenzar())}  >Comenzar</button>
      <Grid/>

    </>
  )
}

export default App
