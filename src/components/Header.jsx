import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute  shadow-xl w-full h-[80px] px-[150px] bg-black bg-opacity-60 flex justify-between items-center ">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
        className="h-full w-[200px]"
      />

      {user && (
        <div className="flex items-center gap-[15px]">
          <img
            src={user.photoURL}
            alt="user photo"
            className="rounded-[50%] w-12 h-12 "
          />

          <button
            className="bg-red-500 rounded-md py-[10px] px-[20px] text-white font-semibold  "
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
