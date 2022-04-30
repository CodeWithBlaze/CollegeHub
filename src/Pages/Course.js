import './course.css';
import Navbar from '../components/navbar/Navbar';
import GradientBackground from '../components/backgrounds/GradientBackground';
import HeadingButton from '../components/Headings/Heading_Button';
import Thumbnail from '../components/Thumbnails/Thumbnail';
import CourseCard from '../components/card/CourseCard';
import TagCard from '../components/tags/TagCard';
import { Link } from 'react-router-dom';

const Course = () => {
    return ( 
        <>
        <Navbar bg_color='transparent'/>
        <section style={{marginTop:70}}>
            <GradientBackground customStyle={{paddingLeft:100}}>
            <Link  style={{textDecoration:'none'}} to="/seeall" state="paths"><HeadingButton text="Popular Paths" label="See All"/></Link>
            <div className='path-container'>
                <Thumbnail 
                customStyle={{width:300,height:250,marginRight:30,borderRadius:10}} 
                label="Network Engineer"
                image="https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-wan-new-628x353.png"/>
                <Thumbnail 
                customStyle={{width:300,height:250,borderRadius:10}}
                label="Web Developement" 
                image="https://content.techgig.com/photo/84794342/what-are-the-key-responsibilities-of-web-developers.jpg?49831"/>
            </div>
            </GradientBackground>
        </section>
        <section>
            <GradientBackground customStyle={{paddingLeft:100}}>
                <div>
                    <Link to="/seeall" state="courses"><HeadingButton text="Courses" label="See All"/></Link>
                    <div className='course-card-container'>
                        <CourseCard  customStyle={{marginRight:30}}
                        image = "https://www.uwl.ac.uk/sites/uwl/files/styles/16_by_9_960_x_540/public/2019-01/Cyber%20Security%20at%20UWL.jpg?itok=tiMI1eLa"
                        heading="Cyber Security"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, eget ut at eu, quis pretium mauris. Aliquam a dignissim id erat lorem. Id tortor ac sit nisl magna odio curabitur non. Ac risus blandit."
                        />
                        <CourseCard 
                        image = "https://elu.nl/wp-content/uploads/2020/12/1_SKjEotIqtQ3P0MrBLbncMg.jpg"
                        heading="Software Engineering"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, eget ut at eu, quis pretium mauris. Aliquam a dignissim id erat lorem. Id tortor ac sit nisl magna odio curabitur non. Ac risus blandit."
                        />
                    </div>
                </div>
            </GradientBackground>
        </section>
        <section>
            <GradientBackground customStyle={{paddingLeft:100}}>
                <HeadingButton text="Tags" label="See All"/>
                <div className='course-tag-container'>
                <TagCard  height={60} label="Programming"/>
                <TagCard  height={60} label="Dev OPS"/>
                <TagCard height={60} label="Malware Developement"/>
                </div>
               
                
            </GradientBackground>
            
        </section>
        </>
     );
}
 
export default Course;