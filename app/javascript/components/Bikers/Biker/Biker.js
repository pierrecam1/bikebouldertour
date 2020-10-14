import React from 'react'
import Button from '../../UI/Button/Button';
import classes from './Biker.module.scss';


const biker = (props) => {
    return(
        <div className={classes.RiderCard + " card mr-5 pb-4 bg-blur text-center"}>
            <div className="d-flex">
                <div className={classes.ContainPicture}>
                    <img src={props.attributes.avatar} />
                </div>
                <div className="mx-auto">
                    <h3>{props.attributes.state}</h3>
                    <p><strong>{props.attributes.city}</strong></p>
                </div>
            </div>
           
            <h4 className="text-left ml-3 mt-3">{props.attributes.first_name} {props.attributes.last_name}</h4>
            <hr />
            <Button>Find on the map</Button>
        </div>
    )
};
export default biker;
