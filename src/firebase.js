// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId

  apiKey: "AIzaSyC7Utqi_8e1kTc5eWBWaKg9L6UxVyi0vNY",
  authDomain: "bristo-boss-dc7d6.firebaseapp.com",
  projectId: "bristo-boss-dc7d6",
  storageBucket: "bristo-boss-dc7d6.appspot.com",
  messagingSenderId: "560265057337",
  appId: "1:560265057337:web:4550f416f0b04ba8db69e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);