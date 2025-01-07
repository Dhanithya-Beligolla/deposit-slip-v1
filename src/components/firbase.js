// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj9mlkF-fstn9TI5zoEHIRxDZpdqKEAg8",
    authDomain: "test-qr-5687f.firebaseapp.com",
    projectId: "test-qr-5687f",
    storageBucket: "test-qr-5687f.firebasestorage.app",
    messagingSenderId: "603616905644",
    appId: "1:603616905644:web:9f9fd429cd77285ac89209",
    measurementId: "G-PMXC6M9WMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth();

export const db = getFirestore(app);

export default app;