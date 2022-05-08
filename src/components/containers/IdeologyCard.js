import React from 'react';
import GradientBackground from '../backgrounds/GradientBackground';
import Card from '../card/Card';
import CardPhoto from '../card/CardPhoto';
import CardText from '../card/CardText';

function IdeologyCard(props) {
    return (
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
    );
}

export default IdeologyCard;