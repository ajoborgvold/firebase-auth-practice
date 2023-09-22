// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqktX7M1cintVSpEkU2SHA-MElTaiNWOA",
  authDomain: "auth-practice-f7dae.firebaseapp.com",
  databaseURL: "https://auth-practice-f7dae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "auth-practice-f7dae",
  storageBucket: "auth-practice-f7dae.appspot.com",
  messagingSenderId: "178983029876",
  appId: "1:178983029876:web:2320dee3a5189d2e231521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { auth, database }