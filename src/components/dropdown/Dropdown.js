import { useState } from 'react';
import SolidButton from '../buttons/Solid';
import './dropdown.css';

const Dropdown = ({label,syllabus}) => {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div className={`dropdown_common ${isOpen?"dropdown_open":"dropdown_close"}`} onClick={()=>setIsOpen(!isOpen)} >
            <div className="dropdown-container">
                {label}
                {!isOpen && <i className="bi bi-caret-down-fill"></i>}
                { isOpen && <i className="bi bi-x-circle-fill"></i>}
            </div>
            {
                isOpen && <div className='hidden-content'>
                            <ul>
                            {
                                syllabus.map(item=><li key={item}>{item}</li>)
                            }
                            </ul>
                            <div style={{marginLeft:18,marginRight:18,marginTop:65}}>
                                 <SolidButton label="Read More" width="100%" height={50} fontsize={15} bg_color="white" color="black"/>
                            </div>
                           
                        </div>
            }
        </div> 
        
     );
}
 
export default Dropdown;