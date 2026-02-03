import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hue: 180,
    steps: 5,
    saturation: 50
}

export const gradientSlice = createSlice({
    name: 'gradient',
    initialState,
    reducers: {

        setHue(state, action) {
            state.hue = Number(action.payload)

        },
        setSteps(state, action) {
            state.steps = Number(action.payload)


        },
        setSaturation(state, action) {
            state.saturation = Number(action.payload)


        },

    }
})



export const {
    setHue,
    setSteps,
    setSaturation
} = gradientSlice.actions

export const selectGradient = state => state.gradient
export default gradientSlice.reducer