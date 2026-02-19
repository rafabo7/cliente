import { configureStore } from "@reduxjs/toolkit";
import  grid  from "./gridSlice";

const store = configureStore({
    reducer: {
        grid

    }
})

export default store