import React from 'react';
import Rating from '../Rating/Rating.js'
import "./Review.css"
const Review = (props) => {

    return (
        <div class="review">
            <div>
                <Rating explanation="review: " iconClass="fas fa-star checked" />
                <Rating explanation="cleanliness: " iconClass="fas fa-head-side-mask checked"/>
            </div>
            <div>
                <span class="review-title">{props.title}</span>
                <p>{props.content}</p>
            </div>
        </div>
    )
};

export default Review;