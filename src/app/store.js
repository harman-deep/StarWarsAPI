import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "../features/characterInfo";

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
    },
});
