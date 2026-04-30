

import { configureStore } from "@reduxjs/toolkit";
import todo from "./todoSlice";

const store = configureStore({
    reducer: {
        todo
    }
})

export default store