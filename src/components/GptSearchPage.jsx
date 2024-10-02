import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_PAGE_BG_IMG } from "../utils/constant";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-20 ">
        <img src={LOGIN_PAGE_BG_IMG} alt="bg-img" className="" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
