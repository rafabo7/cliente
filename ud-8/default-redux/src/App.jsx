import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import {
  selectValue,

  incrementar,
  decrementar
} from './contadorSlice'
import { useState } from 'react'

function App() {

  const value = useSelector(selectValue)
  const dispatch = useDispatch()

  const [ incremento, setIncremento ] = useState(1)

  function onIncrementar(){
    
    dispatch(incrementar([incremento]))
  }
  function onDecrementar(){
    
    dispatch(decrementar(incremento))
  }
  

  return (
    <>
      <h1>Contador: {value} </h1>
      <input 
        type="text" 
        name="" 
        value={incremento}
        onChange={(e) => setIncremento(e.target.value) }
        id="" 
      />
      <br />
      <br />
      <button
        onClick={onIncrementar}
      >Incrementar</button>
      {/* <p /> */}
      <button
        onClick={onDecrementar}
      >Decrementar</button>
    </>
  )
}

export default App
