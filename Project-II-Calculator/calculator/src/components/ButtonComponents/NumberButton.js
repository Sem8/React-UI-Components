import React from 'react';
import './Button.css';

const buttonStyle = {

}

const NumberButton = props => {
    return (        
            <button className='buttonStyle'>
                <div>{props.eachNumber.textSeven}</div>
                <div>{props.eachNumber.textEight}</div>
                <div>{props.eachNumber.textNine}</div>
                <div>{props.eachNumber.textFour}</div>
                <div>{props.eachNumber.textFive}</div>
                <div>{props.eachNumber.textSix}</div>
                <div>{props.eachNumber.textOne}</div>
                <div>{props.eachNumber.textTwo}</div>
                <div>{props.eachNumber.textThree}</div>         
            </button> 
            );
        }

export default NumberButton;