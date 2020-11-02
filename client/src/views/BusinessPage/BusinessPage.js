import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Review from '../../components/Review/Review.js'
import NavBar from '../../components/NavBar/NavBar.js';

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
        <h1>{name}</h1>
        <p>{pageInfo.description}</p>
        {reviewList}
    </div>)
}

export default BusinessPage