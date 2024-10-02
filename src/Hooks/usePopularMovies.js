import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  async function getPopularMovieApi() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json_data = await data.json();
    // console.log(json_data.results);
    dispatch(addNowPopularMovies(json_data.results));
  }

  useEffect(() => {
    getPopularMovieApi();
  }, []);
};

export default usePopularMovies;
