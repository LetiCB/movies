import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    filteredData: [],
}

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        loadMoviesData:(state,action) =>{
            state.data = action.payload;
            state.filteredData = action.payload; // Initialize filteredData with all movies
        },
        filterDataByActor: (state, action) => {
            const query = action.payload.toLowerCase(); 
            state.filteredData = state.data.filter((movie) => movie.actor.toLowerCase().includes(query)
            );
        },
        filterDataByCharacter: (state, action) => {
            const query = action.payload.toLowerCase(); 
            state.filteredData = state.data.filter((movie) => movie.name.toLowerCase().includes(query)
            );
        },
    }
})

export const {loadMoviesData, filterDataByActor, filterDataByCharacter} = moviesSlice.actions

export default moviesSlice.reducer