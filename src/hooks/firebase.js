// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHQl6t4QqGR7H-uUhKXxzWL0foZ_omCHE",
    authDomain: "online-crosswords.firebaseapp.com",
    projectId: "online-crosswords",
    storageBucket: "online-crosswords.firebasestorage.app",
    messagingSenderId: "501680338470",
    appId: "1:501680338470:web:8ca1d5ec73d85d104898e7",
    measurementId: "G-701G8YP3EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
