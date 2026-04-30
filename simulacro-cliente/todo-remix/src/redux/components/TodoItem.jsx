import { useDispatch } from "react-redux"
import { toggleComplete, deleteTodo } from "../todoSlice"

export default function TodoItem({ todo }) {

    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(deleteTodo(todo.id))
    }

    function handleToggle() {
        dispatch(toggleComplete(todo.id))
    }



    return (

        <li className="tarea" >
            <div className="todo-text">
                <span className="texto"> {todo.todo} </span>
                <span className={`prioridad ${todo.priority}`}> {todo.priority} </span>
            </div>

            <div className="controls">
                <button onClick={handleToggle} >✔</button>
                <button onClick={handleDelete} >🗑</button>
            </div>
        </li>
    )
}

