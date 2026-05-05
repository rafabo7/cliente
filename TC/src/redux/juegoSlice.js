import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numPlayer: 3,
  ganador: null,
  tirada: null,
  players: [0, 0, 0]
}

const juegoSlice = createSlice({
  name: 'juego',
  initialState,
  reducers: {
    tirada(state) {

      let nuevaTirada = Math.floor(Math.random() * state.players.length)

      if (state.ganador !== null) return

      state.tirada = nuevaTirada
      state.players[nuevaTirada]++

      if (state.players[nuevaTirada] === 5) state.ganador = nuevaTirada
    },

    comenzar(state, action) {
      state.numPlayer = Number(action.payload)
      state.players = Array(state.numPlayer).fill(0)
      state.tirada = null
      state.ganador = null
    }
  }
})

export default juegoSlice.reducer
export const selectPlayers = state => state.juego.players
export const selectTirada = state => state.juego.tirada
export const selectGanador = state => state.juego.ganador
export const { tirada, comenzar } = juegoSlice.actions


