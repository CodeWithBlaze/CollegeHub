import React from 'react';
import Question from './Question';

function PracticeCard({currentTopic}) {
    
    return (
        <>
            {
                (currentTopic.practice).map(practiceQuestion=><Question practiceQuestion={practiceQuestion}/>)
            }
        </>
    );
}

export default PracticeCard;