import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (        
            <button className='buttonStyle'>
                <div className='clearDiv'>{props.eachNumber.textClear}</div>
                <div className='numberDiv'>
                    <div className='anumberDiv'>{props.eachNumber.textSeven}</div>
                    <div className='anumberDiv'>{props.eachNumber.textEight}</div>
                    <div className='anumberDiv'>{props.eachNumber.textNine}</div>
                    <div className='anumberDiv'>{props.eachNumber.textFour}</div>
                    <div className='anumberDiv'>{props.eachNumber.textFive}</div>
                    <div className='anumberDiv'>{props.eachNumber.textSix}</div>
                    <div className='anumberDiv'>{props.eachNumber.textOne}</div>
                    <div className='anumberDiv'>{props.eachNumber.textTwo}</div>
                    <div className='anumberDiv'>{props.eachNumber.textThree}</div>                    
                </div>
                <div className='zeroDiv'>{props.eachNumber.textZero}</div>
                      
            </button> 
            );
        }

export default NumberButton;