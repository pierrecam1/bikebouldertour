import React, { useState, useEffect } from 'react';
import axios from 'axios';

const photos = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() =>{
        // Get all of our riders from api
        // Update bikers in our state
        axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e876b56dd2862c8bcb031909903826d&tags=bikerace%2C+BoulderBikeTour&format=json&nojsoncallback=1')
        .then( resp => {
            setPhotos(resp.data.photos.photo)
        }, [photos.length])
        .catch( resp => console.log(resp) )
    })
    const galery = photos.map( item => {
        return (
            <div key={item.id}>{item.id}
            <img
            src={'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'}
            alt=""/>
            
            </div>
        )
    })

    return(
        <div>
            <h1>This is the Photos view for Boulder Bike Tour</h1>
            {galery}
        </div>

    )
};
export default photos;
