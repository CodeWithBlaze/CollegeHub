import React, {  useEffect, useState } from 'react';
import GradientBackground from '../components/backgrounds/GradientBackground';
import Navbar from '../components/navbar/Navbar';
import CourseCard from '../components/card/CourseCard';
import InputBox from '../components/input/InputBox';
import GradientButton from '../components/buttons/Gradient';
import { getAuthState, updateUserPassword } from '../firebase/functions/auth';

import './profile.css';
import SetToastContainer,{getErrorToast,getSuccessToast} from '../components/toast/Toast';
import FetchCourseById from '../hooks/useFetchCourseById';

const input_box_style = {
    width:'100%',
    height:50,
    backgroundColor:'rgba(83,83,83,0.5)',
    color:'#8D8D8D',
    fontSize:16,
    
}
function Profile({progress}) {
    const [password,setPassword] = useState("");
    const [courses,setCourses] = useState([]);
    
    function checkError(err){
        if(err.message.includes("requires-recent-login"))
            getErrorToast("Please Login Again and then try")
        else if(!getAuthState())
            getErrorToast("Please Sign in before updating the account")
        else
            getErrorToast("Something went wrong")
        
    }
    useEffect(()=>{
        if(progress.length > 0){
            FetchCourseById(progress)
            .then(res=>setCourses(res.data))
            .catch(err=>console.log(err))
        }
        else
            setCourses([])
    },[progress])
    return (
        <>
        <Navbar bg_color='#2A2E35'/>
        <GradientBackground customStyle={{paddingTop:150}}>
            <div className='Profile-container'>
                <div className='profile-courses-enrolled'>
                    <h1 className='profile-heading-text'>Courses Enrolled</h1>
                    <div className='profile-course-enrolled-container'>
                        {
                            courses.map(course=><CourseCard 
                                isUserEnrolled={true}
                                key={course._id} 
                                id={course._id}
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
                        placeholder="Password" 
                        customStyle={input_box_style}
                        type="password"
                        value={password}
                        setValue={setPassword}
                    />
                    <GradientButton 
                            label="Update Password" 
                            width={'100%'}
                            height={50} 
                            fontsize={16}
                            color="white"
                            borderRadius={3}
                            marginBottom={15}
                            onClick={()=>updateUserPassword(password)
                                .then(()=>getSuccessToast("Password Updated Successfully"))
                                .catch(err=>checkError(err))
                            }
                    />
                    
                </div>
            </div>
        </GradientBackground>
        <SetToastContainer/>
        </>
    );
}

export default Profile;