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

const Home = () => {
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
            <LatestCourseContainer/>
        </section>
        <section style={{marginTop:30}}>
            <DevelopementCourseContainer/>
        </section>
        <section>
            <PathContainer/>
        </section>
        <section>
            <SiteInfoContainer/>
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
