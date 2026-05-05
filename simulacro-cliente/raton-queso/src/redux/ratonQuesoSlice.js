import { createSlice, current } from "@reduxjs/toolkit";
import { elegirDosDistintas } from "../utils";

function popularGrid(area = 5) {
    let casillas = []

    for (let i = 0; i < area; i++) {
        for (let j = 0; j < area; j++) {
            casillas.push({ 
                row: i, 
                col: j, 
                content: '', 
                desbloqueada: false })
        }
    }
    return casillas
}

function setContent(casillas, posicion, content) {
    const item = casillas.find(cell => cell.row === posicion.row && cell.col === posicion.col)

    if (item) item.content = content
}

const initialState = {
    casillasDesbloqueadas: [],
    casillas: popularGrid(),
    gameActive: false,

}

const ratonQuesoSlice = createSlice({
    name: 'ratonQueso',
    initialState,
    reducers: {

        desbloquearCasilla(state, action) {
            if (state.gameActive) return

            const { row, col } = action.payload

            const index = state.casillasDesbloqueadas.findIndex( item => item.row === row && item.col === col)
            const casilla = state.casillas.find( item => item.row === row && item.col === col)

            
            if ( index != -1 ) {
                state.casillasDesbloqueadas.splice(index, 1)
                casilla.desbloqueada = false
                return
            }
            
            state.casillasDesbloqueadas.push({ row, col })
            casilla.desbloqueada = true
            console.log(current(state.casillasDesbloqueadas));
               

        },

        comenzar(state) {

            if ( state.casillasDesbloqueadas.length < 2 ) return

            state.gameActive = true

            const [raton, queso] = elegirDosDistintas(state.casillasDesbloqueadas)

            setContent(state.casillas, raton, 'raton')
            setContent(state.casillas, queso, 'queso')
        }

    }

})

export const {
    desbloquearCasilla,
    comenzar
} = ratonQuesoSlice.actions

export const selectGameActive = state => state.gameActive
export const selectCasillas = state => state.casillas
export const selectCasillasDesbloqueadas = state => state.casillasDesbloqueadas
// export const selectEditingItem = state => state.editingItem

// esto exporta el slice bajo el nombre expresado en name:'ratonQuesoSlice'
export default ratonQuesoSlice.reducer
