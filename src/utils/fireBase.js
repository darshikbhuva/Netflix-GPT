// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlmafNcFbbRImmxbtT5Ol8IwWKF9igppI",
  authDomain: "netflixgpt-1844.firebaseapp.com",
  projectId: "netflixgpt-1844",
  storageBucket: "netflixgpt-1844.appspot.com",
  messagingSenderId: "139780278548",
  appId: "1:139780278548:web:354044598e409042739a01",
  measurementId: "G-WB8QS2L5HJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
