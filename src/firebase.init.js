// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2sAzeOIaZcBk45xaHL0K6dFmziLxdelw",
    authDomain: "primefactor-8a8c8.firebaseapp.com",
    projectId: "primefactor-8a8c8",
    storageBucket: "primefactor-8a8c8.appspot.com",
    messagingSenderId: "343269002692",
    appId: "1:343269002692:web:94f1e57eb43b6291556891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;