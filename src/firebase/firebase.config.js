// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD5pQLBmMJvznozuaibQQ6aF3zA_h88aE",
  authDomain: "the-chef-house.firebaseapp.com",
  projectId: "the-chef-house",
  storageBucket: "the-chef-house.appspot.com",
  messagingSenderId: "497550065553",
  appId: "1:497550065553:web:56f933125bb4432ced6430",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
