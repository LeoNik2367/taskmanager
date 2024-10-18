// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "realtimetaskmanager.firebaseapp.com",
  projectId: "realtimetaskmanager",
  storageBucket: "realtimetaskmanager.appspot.com",
  messagingSenderId: "386037975181",
  appId: "1:386037975181:web:d6f4c88ee8ea93271c3ac4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
