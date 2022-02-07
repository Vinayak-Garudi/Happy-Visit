import firebase from 'firebase/app';
// import { initializeApp } from "firebase/app";
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAyr30BGZujX4tVrrP5cCGWyFGMxSQQ7pM",
    authDomain: "happy-visit-32e03.firebaseapp.com",
    databaseURL: "https://happy-visit-32e03-default-rtdb.firebaseio.com",
    projectId: "happy-visit-32e03",
    storageBucket: "happy-visit-32e03.appspot.com",
    messagingSenderId: "200795276042",
    appId: "200795276042:web:31b4ccef5c8349496770f3",
    measurementId: "G-KGRBCZH1PT"
})

export const auth = app.auth()
export default app;