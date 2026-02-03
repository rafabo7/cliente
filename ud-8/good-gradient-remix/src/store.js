import { configureStore } from "@reduxjs/toolkit";
import gradient from "./gradientSlice";

const store = configureStore({
    reducer: {
        gradient
    }

})

export default store