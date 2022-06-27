import {getAuthState} from '../firebase/functions/auth';

export function addUserTokenInHeader(){
    const user = getAuthState();
    if( user )
        return {usertoken:user.accessToken}
    return {};
}