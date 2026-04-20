import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    experiences: [
        {
            id: 0,
            company: 'Empresa Falsa 123',
            role: 'Software Developer',
            startDate: '2024-05',
            endDate: '2025-05',
            description: 'Build lots of cool stuff, enjoyed myself very much'
        }
    ],
    editingItem: null,
    nextId: 1
}

const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {

        addExperience(state, action) {
            
            state.experiences.push({ id: state.nextId, ...action.payload })
            state.nextId++
        },
        deleteExperience(state, action) {
            let index = state.experiences.findIndex(it => it.id === action.payload)

            if (index !== -1) {
                state.experiences.splice(index, 1)
            }


            // Alternativa? 
            // return state.filter(it => it.id !== action.payload)
        },

        updateExperience(state, action) {

            let index = state.experiences.findIndex(it => it.id === action.payload.id)

            if (index !== -1) {
                state.experiences.splice(index, 1, action.payload)
            }
        },

        startUpdate(state, action) {
            state.editingItem = state.experiences.find(it => it.id === action.payload)
        }

    }

})

export const {
    addExperience,
    deleteExperience,
    updateExperience,
    startUpdate
} = experienceSlice.actions

export const selectExperience = state => state.experiences
export const selectEditingItem = state => state.editingItem


export default experienceSlice.reducer