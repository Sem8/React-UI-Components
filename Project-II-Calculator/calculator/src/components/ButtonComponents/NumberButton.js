import React from 'react';
import './Button.css';

const buttonStyle = {
    
}

const NumberButton = props => {
    return (
        <button className={props.buttonStyle}> {props.eachNumber.textOne} </button>
    )
}

export default NumberButton;