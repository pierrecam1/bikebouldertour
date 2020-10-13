import React from 'react';
import { btn } from './button.module.scss';
const Button = (props) => {
  return (
      <div>
        <button
        className={btn}
        onClick={() => alert('I am styled with SCSS Modules')}>
        {props.children}
        </button>
      </div>

    
  );
};
export default Button;