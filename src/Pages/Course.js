import './course.css';
import Navbar from '../components/navbar/Navbar';
import GradientBackground from '../components/backgrounds/GradientBackground';
import HeadingButton from '../components/Headings/Heading_Button';
import Thumbnail from '../components/Thumbnails/Thumbnail';
import CourseCard from '../components/card/CourseCard';
import TagCard from '../components/tags/TagCard';
import { Link } from 'react-router-dom';

//-----------------------------------
// test code
import courses from '../database/sample_course';
import paths from '../database/sample_paths';
import tags from '../database/sample_tags';
//-----------------------------------

const Course = () => {
    return ( 
        <>
        <Navbar bg_color='transparent'/>
        <section style={{marginTop:70}}>
            <GradientBackground customStyle={{paddingLeft:100}}>
            <Link  style={{textDecoration:'none'}} to="/seeall" state="paths"><HeadingButton text="Popular Paths" label="See All"/></Link>
            <div className='path-container'>
                {
                    paths.map(path=><Thumbnail 
                        key={path.id}
                        customStyle={{width:300,height:250,marginRight:30,borderRadius:10}} 
                        label={path.label}
                        image={path.image}
                    />)
                }
            </div>
            </GradientBackground>
        </section>
        <section>
            <GradientBackground customStyle={{paddingLeft:100}}>
                <div>
                    <Link to="/seeall" style={{textDecoration:'none'}} state="courses"><HeadingButton text="Courses" label="See All"/></Link>
                    <div className='course-card-container'>
                    
                        {
                            courses.map(course=><CourseCard 
                                key={course.id} 
                                id={course.id}
                                customStyle={{marginRight:30}}
                                image = {course.image}
                                heading={course.title}
                                description = {course.description}
                                
                                /> )
                        }
                        
                    </div>
                </div>
            </GradientBackground>
        </section>
        <section>
            <GradientBackground customStyle={{paddingLeft:100}}>
                <HeadingButton text="Tags" label="See All"/>
                <div className='course-tag-container'>
                    {
                        tags.map(tag=><TagCard marginRight={60} height={60} label={tag.label}/>)
                    }
                
                </div>
            </GradientBackground>
            
        </section>
        </>
     );
}
 
export default Course;