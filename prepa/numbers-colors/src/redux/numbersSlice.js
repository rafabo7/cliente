import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numbers : [],
    form: {
        valor: 15,
        color: "#000000"
    }
}

export const numbersSlice = createSlice({
    name: 'numbers',
    initialState,
    reducers: {
        setInitialNumbers(state, action){
            state.numbers = action.payload
        },

        setFormColor(state, action) {
            state.form.color = action.payload

        },

        setFormFont(state, action) {
            state.form.valor = Number(action.payload )

        },

        handleClickNumber(state, action) {
            state.form.color = action.payload.color
            state.form.valor = action.payload.valor
        },

        addNumber(state) {
            state.numbers = [...state.numbers, {...state.form} ]
        }
    }
})

export const {
    setInitialNumbers,
    setFormColor,
    setFormFont,
    addNumber,
    handleClickNumber

} = numbersSlice.actions

export const selectNumbers = state => state.numbers.numbers
export const selectForm = state => state.numbers.form

export default numbersSlice.reducer