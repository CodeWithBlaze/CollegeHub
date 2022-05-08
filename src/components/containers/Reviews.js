import React from 'react';
import { REVIEWS } from '../../config/HOMEPAGE_HARDCODED';
import GradientBackground from '../backgrounds/GradientBackground';
import ReviewCard from '../review/ReviewCard';

function Reviews(props) {
    return (
        <GradientBackground>
                <h1>What People Say</h1>
                <div className="review-container">
                   {
                       REVIEWS.map(review=><ReviewCard image={review.image} name={review.name}/>)
                   }
                </div>
        </GradientBackground>
    );
}

export default Reviews;