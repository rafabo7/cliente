import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonData, getSpeciesSprite } from "../../Exercises-template/pokemon_api";

const initialState = {
    pokedex: {
        status: null,
        error: null,
        data: []
    },
    sprites: {
        status: null,
        error: null,
        data: null
    },
}

export const getPokemon = createAsyncThunk(
    'getPokemon',
    async() => {
        const data = await getPokemonData()
        return data

    }
)
export const getSprites = createAsyncThunk(
    'getSprites',
    async(query) => {
        const data = await getSpeciesSprite(query)
        return data

    }
)

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(getPokemon.fulfilled, (state, action) => {
            state.pokedex.status = 'success'
            state.pokedex.data = action.payload
        })
        .addCase(getSprites.pending, state => {
            state.sprites.data = null
            state.sprites.status = 'loading'
        })
        .addCase(getSprites.fulfilled, (state, action) => {
            state.sprites.status = 'success'
            state.sprites.data = action.payload
            console.log(state.sprites.data)
        })
        .addCase(getSprites.rejected, state => {
            state.sprites.status = 'error'
            state.sprites.error = 'No se encontró ningún pokemon'
        })
    }

})

export const selectPokedex = state => state.pokedex.pokedex
export const selectSprites = state => state.pokedex.sprites



export default pokedexSlice.reducer