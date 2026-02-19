import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    rows: 4,
    columns: 5,
    empty: { 
        row: 0, 
        col: 0
    }

}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        
        setGridProps(state, action) {

            state.columns = Number(action.payload.formColumns)
            state.rows = Number(action.payload.formRows)

        },
        setEmpty(state, action) {
            
            state.empty = action.payload
        }

    }
})

export const {
    setRows, setColumns, setGridProps, setEmpty
} = gridSlice.actions

export const selectGridProps = state => state.grid
export default gridSlice.reducer