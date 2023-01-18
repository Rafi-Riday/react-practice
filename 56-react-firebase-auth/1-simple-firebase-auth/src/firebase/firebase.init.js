// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgS_Y-g6t1NF0IEf_4MEgtRbv9ZNhtNCM",
    authDomain: "simple-firebase-auth-91563.firebaseapp.com",
    projectId: "simple-firebase-auth-91563",
    storageBucket: "simple-firebase-auth-91563.appspot.com",
    messagingSenderId: "1030563273801",
    appId: "1:1030563273801:web:38b2024115ac57fb7c7398"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;