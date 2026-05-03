import { createSlice } from "@reduxjs/toolkit";
import { generarListaAleatoria } from "../randomItems";

const initialState = generarListaAleatoria()

const numbersSlice = createSlice({
    name: 'numbers',
    initialState,
    reducers: {

        addNumber(state, action) {

            const {valor, color} = action.payload

            state.unshift({valor, color})


        }, 

    }

})

export const {
 addNumber   
} = numbersSlice.actions

export const selectNumeros = state => state.numbers
// export const selectEditingItem = state => state.numbers.editingItem

// esto exporta el slice bajo el nombre expresado en name:'numbers'
export default numbersSlice.reducer
