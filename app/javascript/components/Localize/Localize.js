import React, { useState, useEffect, Fragment } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from '../UI/Pin/Pin';
import axios from 'axios';

const TOKEN = "pk.eyJ1IjoicGllcnJlbG9nIiwiYSI6ImNrZzk4ZmcyODAwaW4yeW81ZzR5Mm0yZTUifQ.nwijaIQJdm5WQogVzrw5FQ";
const localize = () => {
    const [ viewport, setViewport] = useState({
        latitude: 40.014984,
        longitude: -105.270546,
        width:"100%",
        height:600,
        zoom: 11,
    });
    const [bikers, setBikers] = useState([])
    useEffect(() =>{
        // Get all of our riders from api
        // Update bikers in our state
        axios.get('/api/v1/bikers.json')
        .then( resp => {
            setBikers(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [bikers.length])

    const list = bikers.map( item => {
        return (
        <Marker
        key={item.id}
        latitude={item.attributes.latitude}
        longitude={item.attributes.longitude}>
            <Pin
            attributes={item.attributes}/>
        </Marker>)
    })


    return(
        <section className="bg-dark">
            <div className="text-white container">
                <h1 className="py-5">LOCATE RIDERS</h1>
                <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/pierrelog/ckg9bpxup3dp619qotqr7aj14"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}>
                    {list}
                </ReactMapGL>
            </div>
        </section>
        

    )
};
export default localize;