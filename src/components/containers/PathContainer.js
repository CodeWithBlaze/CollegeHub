import React from 'react';
import GradientBackground from '../backgrounds/GradientBackground';
import HeadingText from '../Headings/HeadingText';
import Paths from '../path/Paths';

function PathContainer(props) {
    return (
        <GradientBackground>
            <HeadingText label="POPULAR PATHS" 
            subheading="DONT KNOW WHERE TO START, WE ARE HERE FOR HELP"
            customContainerStyle={{width:'100%'}} 
            customTextStyle={{textAlign:'center'}}
            customSubheadingStyle={{textAlign:'center'}}
            />
            <div className='home-courses-component-container'>
                <Paths/>
            </div>
        </GradientBackground>
    );
}

export default PathContainer;