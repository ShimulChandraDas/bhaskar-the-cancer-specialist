// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADS-OM3sFmGNDIKRuyM5fK1iY2G0pEP40",
    authDomain: "bhaskar-the-cancer-specialist.firebaseapp.com",
    projectId: "bhaskar-the-cancer-specialist",
    storageBucket: "bhaskar-the-cancer-specialist.appspot.com",
    messagingSenderId: "128555810068",
    appId: "1:128555810068:web:a906fe05f527615c8d1601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;