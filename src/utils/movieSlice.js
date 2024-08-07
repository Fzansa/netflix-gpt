import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlyaingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const { addNowPlyaingMovies, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;