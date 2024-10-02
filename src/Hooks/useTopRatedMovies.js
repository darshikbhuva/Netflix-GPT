import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPopularMovies, addTopRatedMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  async function getTopRatedMovieApi() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json_data = await data.json();
    // console.log(json_data.results);
    dispatch(addTopRatedMovies(json_data.results));
  }

  useEffect(() => {
    getTopRatedMovieApi();
  }, []);
};

export default useTopRatedMovies;
