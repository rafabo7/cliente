import { useSelector } from 'react-redux'
import { selectGanador, selectPlayers } from './redux/juegoSlice.js'
import PlayerRow from './PlayerRow.jsx'

export default function Tablero() {
  const players = useSelector(selectPlayers)
  const ganador = useSelector(selectGanador)

  

  return (
    <div className='tablero' >

      {players.map((posicion, index) => <PlayerRow key={index} player={index} value={posicion} />)}

      { ganador !== null && 
        <div>
          <p>Gana el jugador: {ganador+1}  </p>
        </div>
      }

    </div>
  )
}
