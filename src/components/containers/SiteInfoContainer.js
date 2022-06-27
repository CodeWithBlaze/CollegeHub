import React from 'react';
import HeadingText from '../Headings/HeadingText';
import TopicCard from '../card/TopicCard';
import { TUTORIAL_ROUTE } from '../../config/CONFIG';

function SiteInfoContainer({topics}) {
    return (
        <div>
            <HeadingText label="Extraordinary Topics" 
            subheading="LEARN ALGORITHMS,NETWORKING AND MUCH MORE"
            customContainerStyle={{width:'100%'}} 
            customTextStyle={{textAlign:'center'}}
            customSubheadingStyle={{textAlign:'center'}}
            />
            <div className='home-topic-container'>
            
                     {
                        topics.map(topic=><TopicCard key={topic._id} topic={topic} customStyle={{width:"50%"}} link={TUTORIAL_ROUTE}/>)
                     }
                
                
            </div>
        </div>
    );
}

export default SiteInfoContainer;