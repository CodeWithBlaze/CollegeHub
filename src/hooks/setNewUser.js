import axios from "axios";

export default async function setNewUser(name,id){
    const result = await axios.post('http://localhost:5000/user',{
        name:name,
        _id:id
    })
    return result;
}