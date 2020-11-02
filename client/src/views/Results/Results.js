import React from 'react';
import {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar.js';
import PageResult from '../../components/PageResult/PageResult.js'
import './Results.css';
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Results = (props) => {
    let query = useQuery();
    let [pages, setPages] = useState([]);
    useEffect(() => {
        fetch(`/api/search?query=${query.get("q")}`)
            .then(response => response.json())
            .then(data => setPages(data))
            .catch(err => console.debug(`could not fetch search results at /search?query=${query.get("q")}`))
    });
    const listing = pages.map(element => <PageResult key={element.id} data={element} />);
    return <div>
        <NavBar />
        <h2>Search Results</h2>
            <ul className="result-list">
                {listing}
            </ul>
    </div> 
}

export default Results;