import { initializeApp } from "firebase/app";

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDPrRaW1jyXtkDXNEUE2VwnCMbmPRHc9xQ",
    authDomain: "collegehub-587a5.firebaseapp.com",
    projectId: "collegehub-587a5",
    storageBucket: "collegehub-587a5.appspot.com",
    messagingSenderId: "963945608086",
    appId: "1:963945608086:web:da418b428f44623c5b23b7",
    measurementId: "G-YNQGSDQLXX"
};
const firebase_app = initializeApp(FIREBASE_CONFIG);
export default firebase_app
