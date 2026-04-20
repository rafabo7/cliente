import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grid } from './components/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame, selectGameActive, selectWinner, startGame } from './redux/juegoSlice'
import { Board } from './components/Board'

function App() {
  const [count, setCount] = useState(0)
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

      <button
        disabled={!isGameActive}
        onClick={() => dispatch(resetGame())}
      >
        Reset Game
      </button>
      <Grid />
      <Board />
    </>
  )
}

export default App
