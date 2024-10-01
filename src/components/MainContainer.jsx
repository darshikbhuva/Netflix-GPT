import React from "react";
import VideoCard from "./VideoCard";
import VideoDetail from "./VideoDetail";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoDetail title={original_title} overview={overview} />
      <VideoCard id={id} />
    </div>
  );
};

export default MainContainer;
