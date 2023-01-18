// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaKIZlJ0fpiylaSTE5YQNnMQGo7osmdTo",
    authDomain: "email-pass-auth-bc9f7.firebaseapp.com",
    projectId: "email-pass-auth-bc9f7",
    storageBucket: "email-pass-auth-bc9f7.appspot.com",
    messagingSenderId: "505956995835",
    appId: "1:505956995835:web:934bb064f9b9a002ac165e"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export default FirebaseApp;