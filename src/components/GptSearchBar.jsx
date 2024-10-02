import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[20%] flex justify-center">
      <form action="" className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder="what would you like to watch today?"
          className="p-4 m-4 col-span-9"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
