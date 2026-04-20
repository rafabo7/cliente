import { configureStore } from "@reduxjs/toolkit";
import experience from "./expericenceSlice";

const store = configureStore({
    reducer:
    experience
})

export default store