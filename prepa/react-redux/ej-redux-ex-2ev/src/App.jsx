import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid'
import InitForm from './components/InitForm'
import { useDispatch, useSelector } from 'react-redux'

import { getRandomEmpty } from './utils'

import {
  selectGridProps,
  setRows,
  setColumns,
  setEmpty
} from './redux/gridSlice'

function App() {
  const dispatch = useDispatch()
  const {rows, columns, empty} = useSelector(selectGridProps)
  
  useEffect(
    () => { dispatch(setEmpty(getRandomEmpty(rows, columns))) }, [
      rows,
      columns
    ]
  )

  console.log(empty);
  
  



  


  return (
    <>
    <h1>Grid exercise</h1>
    <InitForm 
      rows={rows}
      columns={columns}
    />
    <Grid
      rows={rows}
      columns={columns}
      empty={empty}
    />
    </>
  )
}

export default App
