import { configureStore } from "@reduxjs/toolkit"
import pokedex from './pokedexSlice'



const store = configureStore({
    reducer: {
        pokedex
        
    }

})

export default store