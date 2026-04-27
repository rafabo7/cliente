
import './App.css'
import { Grid } from './components/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { selectGameActive, selectWinner, startGame } from './redux/juegoSlice'
import { Board } from './components/Board'
import ResetModal from './components/ResetModal'

function App() {
  
  const dispatch = useDispatch()
  const isGameActive = useSelector(selectGameActive)
  const winner = useSelector(selectWinner)




  return (
    <>

      {
        winner && <h1>Tenemos un ganadooorrr</h1>
      }

      <h1>3 en raya</h1>
      <button
        disabled={isGameActive}
        onClick={() => dispatch(startGame())}
      >
        Start Game
      </button>

      <ResetModal/>

      
      <Grid />
      <Board />
    </>
  )
}

export default App
