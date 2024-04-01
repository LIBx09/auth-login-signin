// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKpub8iFCWVPVhz2moEhi7iNsv0y5USRM",
    authDomain: "more-auth-efa00.firebaseapp.com",
    projectId: "more-auth-efa00",
    storageBucket: "more-auth-efa00.appspot.com",
    messagingSenderId: "1072971605320",
    appId: "1:1072971605320:web:a7648a688c4a13500cff7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;