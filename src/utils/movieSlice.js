import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
  },
  reducers: {
    addNowPlayingMoviesList: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMoviesList, addNowPlayingTrailer } =
  movieSlice.actions;
export default movieSlice.reducer;
