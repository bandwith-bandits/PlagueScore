import React from 'react';
import Rating from '../Rating/Rating.js';
import Card from '../Card/Card.js';
import "./Review.css";
const Review = (props) => {
    return (
        <Card className="review">
                <div className="review-user">{props.user}</div>
                <div className="review-title">{props.title}</div>
                <div className = "review-ratings">
                    <Rating iconClass="fas fa-star checked" />
                    <Rating iconClass="fas fa-head-side-mask checked"/>
                </div>
                <p>{props.content}</p>
        </Card>
    )
};

export default Review;