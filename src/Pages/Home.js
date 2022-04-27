import GradientBackground from "../components/backgrounds/GradientBackground";
import GradientButton from "../components/buttons/Gradient";
import Card from "../components/card/Card";
import CardPhoto from "../components/card/CardPhoto";
import CardText from "../components/card/CardText";
import Navbar from "../components/navbar/Navbar";
import Dropdown from "../components/dropdown/Dropdown";
import './home.css';
import ReviewCard from "../components/review/ReviewCard";
import ImageInfo from "../components/card/ImageInfo";
import LinkIcon from "../components/icon/LinkIcon";

const site_info_card = {
    image:"https://cdnp1.stackassets.com/200056fa01936b0a7fa476bba72abfff93b39a2c/store/580f9016f9c76b772c5519f6e3c160bec14cc6b6aee54411da5e2d1ed9b9/sale_10524_primary_image_wide.jpg",
    heading:"Everything in Browser",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit fames duis eu vitae egestas sit. Amet, consequat mi dictumst ornare fermentum cursus urna cras pellentesque. Eget velit dolor senectus ut donec habitant. Feugiat lacus lorem eu in cursus. In et metus proin tincidunt tellus."
}

const Home = () => {
    return (
        <>
        <Navbar bg_color="transparent"/>
        <div className="container">
            <div className="title-container">
                <h1>Get Entire College Study For Free</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                <GradientButton label="Get Started For Free" width={260} height={50} fontsize={15} color="white"/>
            </div>
            <div className="video-container">
                <video width={680} height={350} loop autoPlay={true} controls controlsList="nodownload">
                    <source src="https://res.cloudinary.com/codecafe/video/upload/v1649680754/6HR4pEcXoQw_720_gdkmxr.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
        <section style={{marginTop:30}}>
        <GradientBackground>
            <div className="card-component-container">
                <Card>
                    <CardText heading="Everything For Absolutely Free" subheading="All courses and tutorial are absolutely free of cost"/>
                    <div className="card-photo-image1">
                        <CardPhoto photo="card_image1.png"/>
                    </div>
                </Card>
                <Card>
                    <div className="card-photo-image2">
                        <CardPhoto photo="card_image2.png" width_outer={220} width_inner={160}/>
                    </div>
                    <CardText heading="All at one place" subheading="No need to move around. Study and Practice at one place"/>
                </Card>
                <Card>
                    <CardText heading="Study the subjects that you really need" subheading="Study and master only those subjects you need for your carrer"/>
                    <div className="card-photo-image3">
                        <CardPhoto photo="card_image3.png" width_outer={230} width_inner={170}/>
                    </div>
                    
                </Card>
            </div>
            
        </GradientBackground>
        </section>
        <section style={{marginTop:30}}>
            <GradientBackground>
                <div className="course-container">
                    <h1>Course Available</h1>
                    <div className="course-dropdown-container">
                        <Dropdown label="Networking"/>
                        <Dropdown label="Software Engineering"/>
                        <Dropdown label="Cyber Security"/>
                        <Dropdown label="Linux"/>
                        <Dropdown label="Operating System"/>
                        <Dropdown label="Web Developement"/>
                    </div>
                </div>
                
            </GradientBackground>
        </section>
        <section className="user-review-container">
            <GradientBackground>
                <h1>What People Say</h1>
                <div className="review-container">
                   <ReviewCard image="profile.jpg" name="Adriana Patrick"/>
                   <ReviewCard image="profile.jpg" name="Adriana Patrick"/>
                   <ReviewCard image="profile.jpg" name="Adriana Patrick"/>
                   <ReviewCard image="profile.jpg" name="Adriana Patrick"/>
                   <ReviewCard image="profile.jpg" name="Adriana Patrick"/>
                </div>
            </GradientBackground>
            
        </section>
        <section style={{marginTop:30}}>
            <GradientBackground>
                <ImageInfo heading={site_info_card.heading} 
                description={site_info_card.description}
                image={site_info_card.image}
                />
               <ImageInfo heading={site_info_card.heading} 
                description={site_info_card.description}
                image={site_info_card.image}
                rev={true}
                />
            </GradientBackground>
        </section>
        <section className="footer">
            <LinkIcon name="fa-brands fa-twitter-square" size="fa-4x" color="white" marginRight={15}/>
            <LinkIcon name="fa-brands fa-facebook-square" size="fa-4x" color="white" marginLeft={15} marginRight={15}/>
            <LinkIcon name="fa-brands fa-github-square" size="fa-4x" color="white"marginLeft={15} marginRight={15} link="https://www.google.com"/>
            <LinkIcon name="fa-brands fa-instagram-square" size="fa-4x" color="white"marginLeft={15} marginRight={15}/>
        </section>
        </> 
        
        
     );
}
 
export default Home;
