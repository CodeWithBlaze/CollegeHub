import firebase_app from '../config';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebase_app);
function registerUser(email,password,onSignUpSuccess,onSignUpFailed){
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential =>onSignUpSuccess(userCredential))
    .catch(error => onSignUpFailed(error));
}
function signInUser(email,password,onSignInSuccess,onSignInFailed){
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => onSignInSuccess(userCredential))
    .catch(error=>onSignInFailed(error));
}
export {registerUser,signInUser};