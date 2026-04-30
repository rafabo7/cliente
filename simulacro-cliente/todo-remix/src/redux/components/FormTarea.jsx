import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../todoSlice"

export default function FormTarea() {

    const [ todo, setTodo ] = useState('')
    const [ priority, setPriority ] = useState('')

    const dialog = useRef(null)

    function handleAdd(){

        if( !todo || !priority ) {
            dialog.current.showModal()
        } else {

            dispatch(addTask({todo, priority}))
            setTodo('')
            setPriority('')
        }


    }

    const dispatch = useDispatch()



    return (
        <div className="formulario">
            <input 
            type="text" 
            value={todo} 
            onChange={(e)=>setTodo(e.target.value)} 
            placeholder="Nueva tarea..." />

            <select 
            value={priority} 
            onChange={(e)=>setPriority(e.target.value)}
            defaultValue={'baja'} >
                <option value="">-- Escoge prioridad --</option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>

            <dialog
            ref={dialog}>
                Las tareas deben tener un texto y una prioridad
                <br />
                <button onClick={()=>dialog.current.close()} >Aceptar</button>

            </dialog>
            

            <button onClick={handleAdd} >Añadir</button>
        </div>
    )
}