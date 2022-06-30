import firebase_app from '../config';
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onIdTokenChanged,
    signOut,
    updatePassword

} from "firebase/auth";
import { getUserProgress } from '../../hooks/useUserProgress';
import { isEmpty } from '../../validation/validate';
import { getErrorToast } from '../../components/toast/Toast';

const auth = getAuth(firebase_app);
function registerUser(email,password,onSignUpSuccess,onSignUpFailed,setShowLoader){
    if(!isEmpty([email,password])){
        setShowLoader(false)
        getErrorToast("All Fields are required")
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential =>onSignUpSuccess(userCredential))
    .catch(error => onSignUpFailed(error));
}
function signInUser(email,password,onSignInSuccess,onSignInFailed,setShowLoader){
    if(!isEmpty([email,password])){
        setShowLoader(false)
        getErrorToast("All Fields are required")
        return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => onSignInSuccess(userCredential))
    .catch(error=>onSignInFailed(error));
}
function signOutUser(){
    signOut(auth)
}

function updateAuthState(setUpdatedAuth,setUserProgress){
    onIdTokenChanged(auth,function(user){
        if(user){
            user.getIdToken().then((token)=>{
                const {uid,email} = user;
                setUpdatedAuth({uid:uid,email:email,accessToken:token})
                getUserProgress(setUserProgress); 
            })
        }
        else{
            setUpdatedAuth(null);
            setUserProgress([])
        }
            
    })
}
async function updateUserPassword(password){
    await updatePassword(auth.currentUser,password)
    
}
function getAuthState(){
    return auth.currentUser;
}
export {registerUser,signInUser,signOutUser,updateAuthState,getAuthState,updateUserPassword};