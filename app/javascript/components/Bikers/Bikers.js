import React, { useState, useEffect, Fragment } from 'react';
import Biker from '../Bikers/Biker/Biker';
import axios from 'axios';

const bikers = () => {
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
        return (<Biker
            key={item.id}
            attributes={item.attributes}/>)
    })
    return(
        <Fragment>
            <h1>This is the Bikers view for Boulder Bike Tour</h1>
            <ul>{list}</ul>
        </Fragment>
    )
};
export default bikers;