import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function getErrorToast(message,position){
    toast.error(message,{
        position:toast.POSITION[position]
    })
}
function getWarningToast(message,position){
    toast.warn(message,{
        position:toast.POSITION[position]
    })
}
function getSuccessToast(message,position){
    toast.success(message,{
        position:toast.POSITION[position]
    })
}
function getInfoToast(message,position){
    toast.info(message,{
        position:toast.POSITION[position]
    })
}
function SetToastContainer(){
    return <ToastContainer/>
}
export default ToastContainer;
export {getErrorToast,getInfoToast,getSuccessToast,getWarningToast};