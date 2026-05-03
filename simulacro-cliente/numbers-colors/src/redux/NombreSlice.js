import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const featureSlice = createSlice({
    name: 'feature',
    initialState,
    reducers: {

        addAction(state, action) {


        }, 

    }

})

// export const {
//  addAction   
// } = featureSlice.actions

// export const selectExperience = state => state.feature.experiences
// export const selectEditingItem = state => state.feature.editingItem

// esto exporta el slice bajo el nombre expresado en name:'feature'
export default featureSlice.reducer
