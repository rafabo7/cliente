import { createSlice } from "@reduxjs/toolkit";
import { elegirDosDistintas } from "../utils.js"

const initialState = {
    casillasDesbloqueadas: [],
    raton: [],
    queso: [],
    isPlaying: null
}


export const juegoSlice = createSlice({
    name: 'juego',
    initialState,
    reducers: {

        setCasillasDesbloqueadas(state, action) {
            state.casillasDesbloqueadas.push(action.payload)
        },

        setIsPlaying(state, action) {
            state.isPlaying = action.payload
        },
        setRatonQueso(state) {
            const [raton, queso] = elegirDosDistintas(state.casillasDesbloqueadas);

            state.raton = raton
            state.queso = queso
            

        }

    }
})

export const {
    setCasillasDesbloqueadas,
    setIsPlaying,
    setRatonQueso
} = juegoSlice.actions

export const selectCasillasDesbloqueadas = state => state.juego.casillasDesbloqueadas
export const selectIsPlaying = state => state.juego.isPlaying
export const selectQueso = state => state.juego.queso
export const selectRaton = state => state.juego.raton
export default juegoSlice.reducer