export default function useLocalStorage(){
    function getItem(item){
        return localStorage.getItem(item);
    }
    function setItem(item,value){
        if(item && value)
            localStorage.setItem(item,value);
        else
            console.log("LOCAL STORAGE NOT AFFECTED")
    }
    return {getItem,setItem}
}