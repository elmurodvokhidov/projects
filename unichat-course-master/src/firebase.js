import firebase from "firebase";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCdQmay5QIC7kGUgh0QduFnbLoHLkl5TLk",
    authDomain: "unichat-7eadc.firebaseapp.com",
    projectId: "unichat-7eadc",
    storageBucket: "unichat-7eadc.appspot.com",
    messagingSenderId: "505081154758",
    appId: "1:505081154758:web:73565745226a8e03501bc7"
}).auth();