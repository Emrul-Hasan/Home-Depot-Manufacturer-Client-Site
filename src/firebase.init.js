// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5ELzHKHmIEO2IvZ04ChDrxLA5yVyuKNI",
    authDomain: "manufacturer-website-71cb2.firebaseapp.com",
    projectId: "manufacturer-website-71cb2",
    storageBucket: "manufacturer-website-71cb2.appspot.com",
    messagingSenderId: "850249278167",
    appId: "1:850249278167:web:fd198adb50a452fda60692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;