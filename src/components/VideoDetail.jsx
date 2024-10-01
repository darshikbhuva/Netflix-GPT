import React from "react";

const VideoDetail = ({ title, overview }) => {
  return (
    <div className=" px-8 py-[20%] flex flex-col justify-end absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-12 text-xl hover:bg-opacity-50  rounded-md">
          Play
        </button>
        <button className="mx-2 bg-gray-600 text-white p-2 px-12 text-xl bg-opacity-50  rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDetail;
