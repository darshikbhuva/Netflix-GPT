import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMoviesList } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useMoviesData = () => {
  const dispatch = useDispatch();
  async function getMovieApi() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json_data = await data.json();
    // console.log(json_data.results);
    dispatch(addNowPlayingMoviesList(json_data.results));
  }

  useEffect(() => {
    getMovieApi();
  }, []);
};

export default useMoviesData;
