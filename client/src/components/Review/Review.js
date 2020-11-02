import React from 'react';
import Rating from '../Rating/Rating.js';
import Card from '../Card/Card.js';
import "./Review.css"
const Review = (props) => {
    return (
        <Card className="review">
                <div className="review-user">{props.user}</div>
                <div>
                    <Rating explanation="review: " iconClass="fas fa-star checked" />
                    <Rating explanation="cleanliness: " iconClass="fas fa-head-side-mask checked"/>
                </div>
                <div>
                    <span className="review-title">{props.title}</span>
                    <p>{props.content}</p>
                </div>
        </Card>
    )
};

export default Review;