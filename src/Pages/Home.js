import GradientButton from "../components/buttons/Gradient";
import Navbar from "../components/navbar/Navbar";
import SiteInfoContainer from "../components/containers/SiteInfoContainer";
import { HOMEPAGEVIDEO } from "../config/HOMEPAGE_HARDCODED";
import Socials from "../components/containers/Socials";
import Reviews from "../components/containers/Reviews";
import AvailableCourses from "../components/containers/AvailableCourses";
import IdeologyCard from "../components/containers/IdeologyCard";

import './home.css';

const Home = () => {
    return (
        <>
        <Navbar bg_color="transparent"/>
        <div className="container">
            <div className="title-container">
                <h1>Get Entire College Study For Free</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
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
            <IdeologyCard/>
        </section>
        <section style={{marginTop:30}}>
            <AvailableCourses/>
        </section>
        <section className="user-review-container">
            <Reviews/>
        </section>
        <section style={{marginTop:30}}>
            <SiteInfoContainer/>
        </section>
        <section className="footer">
            <Socials/>
        </section>
        </> 
        
        
     );
}
 
export default Home;
