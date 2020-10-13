
import React, { useState, useEffect, Fragment } from 'react';
import Biker from '../Bikers/Biker/Biker';
import axios from 'axios';


const fetchBikers = () => {
    const [fetchBikers, setBikers] = useState([])
    useEffect(() =>{
        // Get all of our riders from api
        // Update bikers in our state
        axios.get('/api/v1/bikers.json')
        .then( resp => {
            setBikers(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [fetchBikers.length])

    const list = fetchBikers.map( item => {
        return (<Biker
            key={item.id}
            attributes={item.attributes}/>)
    })

    return(
        
        {list}

    )
}

    export default fetchBikers