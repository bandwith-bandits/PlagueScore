import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Modal from '../../components/Modal/Modal.js'
import Review from '../../components/Review/Review.js'
import NavBar from '../../components/NavBar/NavBar.js';
import './BusinessPage.css'
const BusinessPage = (props) => {
    const { pageName } = useParams();
    const [page, setPage] = useState({"business": {"description": "", 'hours': "", 'id':'', "name": "Loading..."}, "reviews": []});
    const request = `/api/page/${pageName}`;
    useEffect(() => {
        fetch(request)
            .then(response => response.json())
            .then(data => setPage(data))
            .catch(err => console.debug(`could not fetch search results at ${request}`))
    });
    const {business: {name, ...pageInfo}, reviews} = page;
    const reviewList = reviews.map((info) => <Review user={info.user} title={info.title} content={info.review}/>)
    return (<div>
        <NavBar />
        <div class="business-page">
            <div>
                <h1>{name}</h1>
                <Modal buttonText="Review!" title="Write a review!">
                    This goes in the modal!    
                </Modal> 
                <p>{pageInfo.description}</p>
            </div>
            <div>
                {reviewList}
            </div>
        </div> 
    </div>)
}

export default BusinessPage