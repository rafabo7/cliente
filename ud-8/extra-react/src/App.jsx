import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Fila from './components/Fila'
import Filas from './components/Filas'

function App() {
  const [count, setCount] = useState(0)
  const [ rows, setRows ] = useState([])

  function addRow( size, number, color ) {
    let newRow = { size, number, color }
    console.log(newRow)
    console.log(rows)

    setRows( [...rows, newRow] )

  }

  return (
    <>
      <Form 
        onAdd={addRow}
      />
      <Filas  
        rowData={rows}
      />
    </>
  )
}

export default App
