import { configureStore } from "@reduxjs/toolkit";
import storeslice from "./slices/storeslice";

const store = configureStore({
    reducer: {
        storeReducer : storeslice,
    }
})

export default store