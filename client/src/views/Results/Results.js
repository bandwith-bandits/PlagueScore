import React from 'react';
import {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar.js';
import PageResult from '../../components/PageResult/PageResult.js'
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import './Results.css';
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Results = (props) => {
    let query = useQuery();
    let [pages, setPages] = useState([]);
    const position = [29.65195, -82.32278];
    useEffect(() => {
        fetch(`/api/search?query=${query.get("q")}`)
            .then(response => response.json())
            .then(data => setPages(data))
            .catch(err => console.debug(`could not fetch search results at /search?query=${query.get("q")}`))
    });
    const listing = pages.map(element => <PageResult key={element.id} data={element} />);
    return <div>
        <NavBar />
        <div id="results-page">
            <div>
                <div className="results-header">Search Results</div>
                <ul className="result-list">
                    {listing}
                </ul>
            </div>
            <div className="container1">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
    </div> 
}

export default Results;