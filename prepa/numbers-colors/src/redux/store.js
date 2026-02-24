import { configureStore } from "@reduxjs/toolkit";
import numbers from "./numbersSlice"

const store = configureStore({
    reducer:{
        numbers

    }
})

export default store