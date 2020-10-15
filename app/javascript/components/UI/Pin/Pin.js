import React from 'react';
import classes from './Pin.module.scss';



const Pin = (props) => {

  return (
        <div className="position-relative">
            <div className={classes.Pin}></div>
            <div className={classes.CardPin + " card p-3"}>
                <img src={props.attributes.avatar} alt={props.attributes.first_name}/>
                <hr/>
                <h4 className="">{props.attributes.first_name} {props.attributes.last_name}</h4>
            </div>
        </div>
      
  );
};
export default Pin;