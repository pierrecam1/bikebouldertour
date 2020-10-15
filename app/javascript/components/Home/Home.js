import React, { Fragment, useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import Button from '../UI/Button/Button';
import Flickity from "react-flickity-component";
import Linked from "../UI/Linked/Linked";
import axios from 'axios';
import Biker from '../Bikers/Biker/Biker';
import Localize from '../Localize/Localize';

const renderer = ({days, hours, minutes, seconds, completed}) =>{
    if(completed){
        return(
            <h2>Today is the big day!</h2>
        )
    }
    if(days > 0) {
        return (
            <h2 className="d-flex justify-content-center counter">
                <div className="d-flex flex-column col-4">
                    {days}
                    <span>Days</span>
                </div>
                <div className="d-flex flex-column col-4">
                    {hours} 
                    <span>Hours</span>
                </div>
                <div className="d-flex flex-column col-4">
                    {minutes} 
                    <span>Minutes</span>
                </div>
            </h2>
        )
    }
    else{
        return (
            <h2 className="d-flex justify-content-between counter">
                <div className="d-flex flex-column">
                    {hours} 
                    <span>Hours</span>
                </div>
                <div className="d-flex flex-column">
                    {minutes} 
                    <span>Minutes</span>
                </div>
                <div className="d-flex flex-column">
                    {seconds} 
                    <span>Seconds</span>
                </div>
            </h2>
        )
    }
}
const home = () => {
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
            <header className="bg-dark">
            <section className="container justify-content-center text-white d-flex align-items-center">
                <div className="card bg-blur col-sm-12 col-md-8 col-lg-6 text-center p-5">
                    <h1>Bike boulder tour</h1>
                    <hr/>
                    <Countdown date={new Date("Apr 1, 2021 00:00:00")} renderer={renderer} />
                    <hr/>
                    <h3>Comming Soon</h3>
                    <p className="w-75 mx-auto">If you have a slogan, you could be sponsoring this great event. 
                        The only thing you have to do, is to submit the form
                    </p>
                    <Button>Ask for Sponsorship</Button>
                </div>

            </section>
            </header>
            <section className="bg-dark text-white" id="riders-list">
                <div className="container">
                    <h2>LIST OF RIDERS<span className="bbt">BBT</span></h2>
                </div>
                <div className="col-11 pr-0 ml-auto position-relative indexedup">
                <Flickity
                options={{freeScroll: true,contain: true}}>
                    {list}
                </Flickity>
                
                    <Linked>All riders</Linked>
                </div>
            </section>
            <Localize/>
        </Fragment>
    )
};
export default home;