import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);
  return (
    <div className="absolute  shadow-xl w-full h-[80px] px-[150px] bg-black bg-opacity-60 flex justify-between items-center z-30 ">
      <img src={LOGO} alt="netflix logo" className="h-full w-[200px]" />

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
