import { useDispatch, useSelector } from 'react-redux'
import { selectGanador, selectTirada, tirada } from './redux/juegoSlice.js'

export default function Tirada() {
  const dispatch = useDispatch()
  const tiradaSelect = useSelector(selectTirada)
  const ganador = useSelector(selectGanador)
  

  return (
    <div>
      Tirada: { tiradaSelect  ?? " " }
      <button disabled={ ganador !== null }  onClick={() => dispatch(tirada())}>Tirar</button>
    </div>

  )
}
