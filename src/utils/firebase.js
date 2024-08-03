// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCo42aOWGXIErfGrIdUqeBXISXKhthXD94",
    authDomain: "netflixgpt-d519e.firebaseapp.com",
    projectId: "netflixgpt-d519e",
    storageBucket: "netflixgpt-d519e.appspot.com",
    messagingSenderId: "907527177554",
    appId: "1:907527177554:web:4563ac54847f3d5edfa68b",
    measurementId: "G-X50NWDGD1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();