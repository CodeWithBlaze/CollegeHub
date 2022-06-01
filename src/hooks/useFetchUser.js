import axios from "axios";

export default async function FetchUser(userToken){
    const result = await axios.get('http://localhost:5000/user/auth',{
        headers:{usertoken:userToken}
    })
    return result;
}