import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingTrailer } from "../utils/movieSlice";

const useMovieVideo = (id) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    const filterData = json.results.filter(
      (videos) => (videos.type = "Trailer")
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addNowPlayingTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieVideo;
