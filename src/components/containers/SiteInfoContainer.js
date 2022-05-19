import React from 'react';
import HeadingText from '../Headings/HeadingText';
import topics from '../../database/sample_topic';
import TopicCard from '../card/TopicCard';
import { TUTORIAL_ROUTE } from '../../config/CONFIG';

function SiteInfoContainer() {
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
                        topics.map(topic=><TopicCard key={topic.id} topic={topic} customStyle={{width:"50%",height:60}} link={TUTORIAL_ROUTE}/>)
                     }
                
                
            </div>
        </div>
    );
}

export default SiteInfoContainer;