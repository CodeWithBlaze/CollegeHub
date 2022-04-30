import React from 'react';
import CourseCard from '../components/card/CourseCard';
import Navbar from '../components/navbar/Navbar';
import './see_all.css';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import Thumbnail from '../components/Thumbnails/Thumbnail';
const ShowCourses = ()=>{
        return  <CourseCard 
        image = "https://elu.nl/wp-content/uploads/2020/12/1_SKjEotIqtQ3P0MrBLbncMg.jpg"
        heading="Software Engineering"
        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, eget ut at eu, quis pretium mauris. Aliquam a dignissim id erat lorem. Id tortor ac sit nisl magna odio curabitur non. Ac risus blandit."
        />
}
const ShowPaths = () =>{
    return <Thumbnail 
    customStyle={{width:300,height:250,marginRight:30,borderRadius:10}} 
    label="Network Engineer"
    image="https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-wan-new-628x353.png"/>
}
function SeeAllPage(props) {
    
    const [data,setDate] = useState(null);
    const location = useLocation();
    console.log(location.state)
    return (
       <>
        <Navbar bg_color='transparent'/>
        <section className="see-all-container">
            {location.state === 'courses' && <ShowCourses/>}
            {location.state === 'paths' && <ShowPaths/>}
        </section>
       </>
    );
}

export default SeeAllPage;