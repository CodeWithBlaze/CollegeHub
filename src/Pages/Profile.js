import React, { useState } from 'react';
import GradientBackground from '../components/backgrounds/GradientBackground';
import Navbar from '../components/navbar/Navbar';
import courses from '../database/sample_course';
import CourseCard from '../components/card/CourseCard';
import InputBox from '../components/input/InputBox';
import GradientButton from '../components/buttons/Gradient';

import './profile.css';

const input_box_style = {
    width:'75%',
    height:50,
    backgroundColor:'rgba(83,83,83,0.5)',
    color:'#8D8D8D',
    fontSize:16,
    
}
function Profile(props) {
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    return (
        <>
        <Navbar bg_color='transparent'/>
        <GradientBackground customStyle={{paddingTop:150}}>
            <div className='Profile-container'>
                <div className='profile-courses-enrolled'>
                    <h1 className='profile-heading-text'>Courses Enrolled</h1>
                    <div className='profile-course-enrolled-container'>
                        {
                            courses.map(course=><CourseCard 
                                key={course.id} 
                                id={course.id}
                                customStyle={{marginRight:30,marginBottom:30}}
                                image = {course.image}
                                heading={course.title}
                                description = {course.description}
                                
                                />)
                        }
                    </div>
                </div>
                <div className='profile-details'>
                    <h1 className='profile-heading-text'>Profile Details</h1>
                    <InputBox 
                        placeholder="Name" 
                        customStyle={{...input_box_style,marginBottom:15}}
                        type="text"
                        value={name}
                        setValue={setName}
                    />
                    <InputBox 
                        placeholder="Password" 
                        customStyle={input_box_style}
                        type="password"
                        value={password}
                        setValue={setPassword}
                    />
                    <GradientButton 
                            label="Update Details" 
                            width={380}
                            height={50} 
                            fontsize={16}
                            color="white"
                            borderRadius={3}
                            marginBottom={15}
                    />
                    
                </div>
            </div>
        </GradientBackground>
        
        </>
    );
}

export default Profile;