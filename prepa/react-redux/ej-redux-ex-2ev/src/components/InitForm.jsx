import { useState } from "react"
import {setColumns, setRows, setGridProps} from '../redux/gridSlice'
import { useDispatch } from "react-redux"


export default function InitForm({ rows, columns }) {
    const dispatch = useDispatch()
    const [formRows, setFormRows] = useState(rows)
    const [formColumns, setFormColumns] = useState(columns)

    function handleFormRows(e) {
        setFormRows(e.target.value)
        
    }
    
    function handleFormColumns(e) {
        setFormColumns(e.target.value)

    }

    function handleForm(e){

        e.preventDefault()
        dispatch(setGridProps({formRows, formColumns}))

    }

    return (
        <>
        <form action="#" onSubmit={handleForm} >
            <label>
                Filas: {formRows}
            </label>
            <input 
            type="range" 
            onChange={handleFormRows}
            value={formRows} 
            min={3} 
            max={8} />
            
            <label>
                Columnas: {formColumns}
            </label>
            <input 
            type="range" 
            onChange={handleFormColumns}
            value={formColumns} 
            min={3} 
            max={8} />

            <button>
                Iniciar
            </button>
            
        </form>
        </>
    )
}