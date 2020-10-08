import React, { Fragment } from 'react'
import Countdown from 'react-countdown';

const renderer =({days, hours, minutes, seconds, completed}) =>{
    if(completed){
        return(
            <h2>Today is the big day!</h2>
        )
    }
    if(days > 0) {
        return (
            <h2 className="d-flex">
                <div className="d-flex flex-column">
                    {days}
                    <span>Days</span>
                </div>
                <div className="d-flex flex-column">
                    {hours} 
                    <span>Hours</span>
                </div>
                <div className="d-flex flex-column">
                    {minutes} 
                    <span>Minutes</span>
                </div>
            </h2>
        )
    }
    else{
        return (
            <h2 className="d-flex">
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
    return(
        <Fragment>
            <header className="bg-dark">
            <section className="container text-white">
                <h1>Bike boulder tour</h1>
                <hr/>
                <Countdown date={new Date("Apr 1, 2021 00:00:00")} renderer={renderer} />
                <hr/>
                <h3>Comming Soon</h3>
                <p>If you have a slogan, you could be sponsoring this great event. 
                    The only thing you have to do, is to submit the form
                </p>
            </section>
            </header>
        </Fragment>
    )
};
export default home;