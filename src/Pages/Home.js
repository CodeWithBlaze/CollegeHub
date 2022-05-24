import GradientButton from "../components/buttons/Gradient";
import Navbar from "../components/navbar/Navbar";
import SiteInfoContainer from "../components/containers/SiteInfoContainer";
import { HOMEPAGEVIDEO } from "../config/HOMEPAGE_HARDCODED";
import Socials from "../components/containers/Socials";
import PathContainer from "../components/containers/PathContainer";
import DevelopementCourseContainer from "../components/containers/DevelopementCourseContainer";
import LatestCourseContainer from "../components/containers/LatestCourseContainer";
import AnimatedFillButton from "../components/buttons/AnimatedFillButton";
import HeadingText from "../components/Headings/HeadingText";


import './home.css';
import useCourses from "../hooks/useCourses";
import usePaths from "../hooks/usePaths";
import useCategoryCourse from '../hooks/useCatgeoryCourse';
import useTopics from "../hooks/useTopics";
const Home = () => {
    const {courses} = useCourses(3);
    const {paths} = usePaths(3);
    const {coursesCategory} = useCategoryCourse(3,'','Beginner');
    const {topics} = useTopics(5);
    return (
        <>
        <Navbar bg_color="#2A2E35"/>
        <div className="container">
            <div className="title-container">
                <h1>College Study For Free</h1>
                <p>CollegeHub is a completely free education platform focused particularly on practical skill developement that are required across the industries. All the courses and lessons are absolutely free and are taught by the best teachers</p>
                <GradientButton 
                label="Get Everything For Free" 
                width={260} 
                height={50} 
                fontsize={15} 
                color="white" 
                borderRadius={5}/>
            </div>
            <div className="video-container">
                <video width={680} 
                height={350} 
                loop 
                autoPlay={true} 
                controls 
                controlsList="nodownload">
                    <source src={HOMEPAGEVIDEO} type="video/mp4"/>
                </video>
            </div>
            
        </div>
        <section style={{marginTop:30}}>
            <LatestCourseContainer latest_courses={courses}/>
        </section>
        <section style={{marginTop:30}}>
            <DevelopementCourseContainer beginner_courses={coursesCategory}/>
        </section>
        <section>
            <PathContainer paths={paths}/>
        </section>
        <section>
            <SiteInfoContainer topics={topics}/>
        </section>
        <section>
        <HeadingText label="MULTIPLE LEARNING FORMAT" 
            subheading="LEARN IN YOUR OWN WAY"
            customContainerStyle={{width:'100%'}} 
            customTextStyle={{textAlign:'center'}}
            customSubheadingStyle={{textAlign:'center'}}
            />
            <div className="home-courses-component-container">
                <AnimatedFillButton label="FULL COURSE" customStyle={{width:160,height:60}} color="purple"/>
                <AnimatedFillButton label="QUICK LESSON" customStyle={{width:160,height:60}} color="green"/>
                <AnimatedFillButton label="COMPLETE PATH" customStyle={{width:160,height:60}} color="blue"/>
            </div>
        </section>
        <section className="footer">
            <Socials/>
        </section>
        </> 
        
        
     );
}
 
export default Home;
