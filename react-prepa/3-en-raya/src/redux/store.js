import { configureStore } from "@reduxjs/toolkit";
import juego from './juegoSlice'

const store = configureStore({
    reducer: {
        juego
    }
})

export default store