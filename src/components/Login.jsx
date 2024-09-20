import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignINForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="h-full">
      <Header />
      <div className="flex items-center justify-center">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_medium.jpg"
          alt="bg-img"
          className=""
        />

        <form
          action="submit"
          className=" bg-black flex flex-col text-white absolute mx-auto gap-[20px] p-[80px] bg-opacity-80 w-[35%]"
        >
          <h1 className="font-bold text-4xl">
            {isSignIn ? "Sign in" : "Sign up"}
          </h1>

          {!isSignIn && (
            <input
              placeholder="Full Name"
              type="text"
              className="py-4 px-5 outline-none  border-[1px] border-solid border-gray-200 bg-black text-white"
            />
          )}

          {!isSignIn && (
            <input
              placeholder="Last Name"
              type="text"
              className="py-4 px-5 outline-none  border-[1px] border-solid border-gray-200 bg-black text-white"
            />
          )}

          <input
            type="text"
            placeholder="E-mail"
            className="py-4 px-5 outline-none  border-[1px] border-solid border-gray-200 bg-black text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-4 px-5 outline-none  border-[1px] border-solid border-gray-200 bg-black text-white"
          />
          <button type="sumit" className="bg-red-600 p-2 rounded-md">
            {isSignIn ? "Sign in" : " Sign up"}
          </button>

          <p className="cursor-pointer">
            {isSignIn ? "New to Netflix?" : "already a user of netflix"}
            <span className="font-bold" onClick={() => handleSignINForm()}>
              {isSignIn ? " Sign Up Now" : " Sign in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
