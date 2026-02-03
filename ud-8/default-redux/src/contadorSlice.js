import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1
}

const contadorSlice = createSlice({
    name: 'contador',
    initialState,
    reducers: {
        incrementar(state, action){
            console.log(action)
            state.value += Number(action.payload)
        },
        decrementar(state, action){
            state.value -= Number(action.payload)

        }

    }
})

export const {
    incrementar,
    decrementar
} = contadorSlice.actions

export const selectValue = state => state.contador.value

export default contadorSlice.reducer