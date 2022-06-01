import firebase_app from '../config';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onIdTokenChanged,signOut } from "firebase/auth";
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
function signOutUser(){
    signOut(auth)
}
function updateAuthState(setUpdatedAuth){
    onIdTokenChanged(auth,function(user){
        if(user){
            user.getIdToken().then((token)=>{
                const {uid,email} = user;
                setUpdatedAuth({uid:uid,email:email,accessToken:token}) 
            })
        }
        else
            setUpdatedAuth(null);
    })
}

export {registerUser,signInUser,signOutUser,updateAuthState};