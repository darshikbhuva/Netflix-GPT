import React from "react";
import { PHOTO_URL } from "../utils/constant";

const MoviesCard = ({ photo }) => {
  return (
    <div className="pr-4 w-48">
      <img src={PHOTO_URL + photo} alt="movie img" />
    </div>
  );
};

export default MoviesCard;
