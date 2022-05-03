// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ8BtvyNfYjvjr3w_jeSySzdKRjT8oFl4",
  authDomain: "the-warehouse-76732.firebaseapp.com",
  projectId: "the-warehouse-76732",
  storageBucket: "the-warehouse-76732.appspot.com",
  messagingSenderId: "500261300643",
  appId: "1:500261300643:web:33938dc7dd8c62af999216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;