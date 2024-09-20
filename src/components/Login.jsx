import React, { useState, useRef } from "react";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignINForm = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);

  const validateForms = () => {
    const msg = validateForm(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg) return;

    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstName.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&s",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
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
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-bold text-4xl">
            {isSignIn ? "Sign in" : "Sign up"}
          </h1>

          {!isSignIn && (
            <input
              ref={firstName}
              placeholder="Full Name"
              type="text"
              className="py-4 px-5 outline-blue-400  border-[1px] border-solid border-gray-200 bg-black text-white first-letter:"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="E-mail"
            className="py-4 px-5 outline-blue-400  border-[1px] border-solid border-gray-200 bg-black text-white first-letter:"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="py-4 px-5 outline-blue-400  border-[1px] border-solid border-gray-200 bg-black text-white first-letter:"
          />
          <p className="text-red-500 font-semibold">{errorMsg}</p>

          <button className="bg-red-600 p-2 rounded-md" onClick={validateForms}>
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
