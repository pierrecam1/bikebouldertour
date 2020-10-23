import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';


const photos = () => {
    const [state, setState] = useState({ posts: [], limit:10});
    const { posts } = state;
    console.log("limited", state.limit);

    const fetchData = () => {
        console.log("hello");
        axios
          .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e876b56dd2862c8bcb031909903826d&tags=bikerace%2C+BoulderBikeTour&per_page=10&page=${state.limit}&format=json&nojsoncallback=1`)
          .then(resp => {
            setState({...state, posts: state.posts.concat(resp.data.photos.photo), limit: state.limit + 10})
            console.log("fetched data", resp.data.photos.photo);
          });
      };

    useEffect(() =>{
        // Get all of our riders from api
        // Update bikers in our state
        axios
        .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e876b56dd2862c8bcb031909903826d&tags=bikerace%2C+BoulderBikeTour&per_page=10page=${state.limit}&format=json&nojsoncallback=1`)
        .then( resp => {
            setState({...state, posts: resp.data.photos.photo})
            console.log("initialData", resp.data.photos.photo);
        })
        .catch( resp => console.log(resp) )
    }, [])

    const images = posts.map(item => (
        <div key={item.id} className="card overflow-hidden border-dark">
            <div className="card-block text-white">
                <img
                src={'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'}
                className="img-contain"
                alt=""/> 
            </div>

        </div>
       
    ))
    return(
        <div className="bg-dark">
            <h1 className="text-center text-white py-5">SEE PICTURES OF THE EVENT</h1>
            <h2><span className="bbt-photos">BBT</span></h2>
            <InfiniteScroll
            dataLength={state.posts.length}
            next={fetchData}
            hasMore={true}
            loader={<div>loader</div>}>
                <div className="card-columns container">
                    {images}
                </div>
            </InfiniteScroll>
            
        </div>

    )
};
export default photos;
