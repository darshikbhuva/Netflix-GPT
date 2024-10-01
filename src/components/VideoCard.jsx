import React from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../Hooks/useMovieVideo";

const VideoCard = ({ id }) => {
  const trailerId = useSelector((Store) => Store.movies.nowPlayingTrailer);

  useMovieVideo(id);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId?.key +
          "?si=IM-RX6Ws10dnXax6&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoCard;
