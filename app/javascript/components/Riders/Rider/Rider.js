import React from 'react'
import Button from '../../UI/Button/Button';
import classes from './Rider.module.scss';
import dustingreen from '../../../../assets/images/Dustin-Green.png'


const rider = () => {
    return(
        <div className={classes.RiderCard + " card mr-5 pb-4 bg-blur text-center"}>
            <div className="d-flex">
                <div className={classes.ContainPicture}>
                    <img src={dustingreen} />
                </div>
                <div className="mx-auto">
                    <h3>ILL</h3>
                    <p><strong>Hickory Hills</strong></p>
                </div>
            </div>
           
            <h4 className="text-left ml-3 mt-3">Dustin GREEN</h4>
            <hr />
            <Button>Find on the map</Button>
        </div>
    )
};
export default rider;
