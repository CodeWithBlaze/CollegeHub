import './question.css';
import React, { useState } from 'react';

import { getWarningToast,getSuccessToast,getErrorToast } from '../toast/Toast';
import InputBox from '../input/InputBox';
import IconButton from '../buttons/IconButton';
import SolidButton from '../buttons/Solid';

function checkAnswer(submittedAnswer,actualAnswer){
    if(submittedAnswer.trim().toLowerCase() === actualAnswer)
        getSuccessToast('Correct Answer')
    else
        getErrorToast('Wrong Answer. Try Again')
}
function Question({practiceQuestion}) {
    const [answer,setAnswer] = useState('')
    return (
        <div key={practiceQuestion.question} className='practice-card-container'>
                <p>{practiceQuestion.question}</p>
                <div className='practice-details-container'>
                    <InputBox 
                    placeholder="Answer" 
                    value={answer}
                    setValue={setAnswer}
                    customStyle={{width:'100%',height:50,backgroundColor:'#284A97',color:'#1C2333'}}
                    />
                    <div className='practice-btn-container'>
                        <IconButton 
                        label="Submit" 
                        customStyle={{backgroundColor:'#17B45F',color:'#056431'}}
                        onClick={()=>checkAnswer(answer,practiceQuestion.answer)}
                        />
                        <IconButton 
                        label="Hint" 
                        icon='fa-solid fa-face-smile-wink'
                        onClick={()=>getWarningToast(practiceQuestion.hint,"BOTTOM_RIGHT")} 
                        customStyle={{backgroundColor:'#FFA86A',color:'black'}}/>
                        <a href={practiceQuestion.solution} style={{textDecoration:'none'}}><SolidButton label="Show Solution" width={150} height={50} bg_color="black" fontsize={16} color="white"/></a>
                    </div>
            
                </div>
            </div>
    );
}

export default Question;