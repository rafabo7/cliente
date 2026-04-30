import { useSelector } from "react-redux"
import { selectFilter, selectTodos } from "../todoSlice"
import TodoItem from "./TodoItem"

export default function TodoList() {
    const todos = useSelector(selectTodos)
    const filter = useSelector(selectFilter)

    const filteredTodos = todos.filter(item => setFilter(item, filter))

    return (
        <ul className="lista">

            {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}

        </ul>
    )
}

function setFilter(item, filter) {

    if (!filter) return true
    if (filter === 'fulfilled' && item.fulfilled === true) return true
    if (filter === 'pending' && item.fulfilled === false) return true
    return false
}