import React from 'react';
import './practicecard.css';
import InputBox from '../input/InputBox';
import IconButton from '../buttons/IconButton';
import SolidButton from '../buttons/Solid';
import { getWarningToast } from '../toast/Toast';

function PracticeCard({customStyle,currentTopic}) {
    return (
        <>
            {
                (currentTopic.practice).map(practiceQuestion=> <div key={practiceQuestion.question} className='practice-card-container' style={customStyle}>
                <p>{practiceQuestion.question}</p>
                <div className='practice-details-container'>
                    <InputBox 
                    placeholder="Answer" 
                    customStyle={{height:50,backgroundColor:'#284A97',color:'#1C2333'}}/>
                    <IconButton 
                    label="Submit" 
                    customStyle={{backgroundColor:'#17B45F',color:'#056431'}}/>
                    <IconButton 
                    label="Hint" 
                    icon='fa-solid fa-face-smile-wink'
                    onClick={()=>getWarningToast(practiceQuestion.hint,"BOTTOM_RIGHT")} 
                    customStyle={{backgroundColor:'#FFA86A',color:'black'}}/>
                    <SolidButton label="Show Solution" width={150} height={50} bg_color="black" fontsize={16} color="white"/>
            
                </div>
            </div>)
            }
        </>
    );
}

export default PracticeCard;