// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdI7bAMBcw2xyA_bJZyXbiQYsZ84pDWQc",
    authDomain: "fb-auth-d8b2b.firebaseapp.com",
    projectId: "fb-auth-d8b2b",
    storageBucket: "fb-auth-d8b2b.appspot.com",
    messagingSenderId: "562736862017",
    appId: "1:562736862017:web:db931a2bd39832e8c9c7c0"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export default FirebaseApp;