import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    filter: '',
    todos: []

}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addTask(state, action) {
            const { todo, priority } = action.payload

            state.todos.push({
                id: state.counter,
                todo,
                priority,
                fulfilled: false
            })
            state.counter++
            
        },

        setFilter(state, action) {
            const userFilter = action.payload
            state.filter = userFilter
        },

        deleteTodo(state, action) {
            const id = action.payload
            state.todos = state.todos.filter( item => item.id !== id)
        },

        toggleComplete(state, action) {
            const id = action.payload
            const todo = state.todos.find( item => item.id === id)
            if (todo) todo.fulfilled = !todo.fulfilled
        }

    }

})

export const {
    addTask,
    setFilter,
    deleteTodo,
    toggleComplete
} = todoSlice.actions

export const selectTodos = state => state.todo.todos
export const selectFilter = state => state.todo.filter

export default todoSlice.reducer
