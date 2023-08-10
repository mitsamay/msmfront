// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgZycp5F2zlU3XHGfL1ei8Y91yooThsiA",
  authDomain: "enrolment-78e9d.firebaseapp.com",
  projectId: "enrolment-78e9d",
  storageBucket: "enrolment-78e9d.appspot.com",
  messagingSenderId: "690492500128",
  appId: "1:690492500128:web:ed81be5beef564a903c1c5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
