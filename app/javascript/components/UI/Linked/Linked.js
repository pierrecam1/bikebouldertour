import React from 'react';
import classes from './Linked.module.scss'
const Linked = (props) => {
    return (
        <div className="mt-5">
          <a className={classes.Btn}
          onClick={() => alert('I am styled with SCSS Modules')}>
          {props.children}
          </a>
        </div>
  
      
    );
  };
  export default Linked;