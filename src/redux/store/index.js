import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/movies/moviesSlice";
import aboutReducer from "../slices/about/aboutSlice"
import formReducer from "../slices/form/formSlice"


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        about: aboutReducer,
        form: formReducer,
    }
})