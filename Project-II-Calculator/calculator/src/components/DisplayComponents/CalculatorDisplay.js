import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton';



const CalculatorDisplay = props => {
    return (
        <div className='calculatorDisplay'>
            <div className='calculatorOutput'>
                {props.Numbers.textZero}
            </div>
            <NumberButton eachNumber={props.Numbers}/>
            
        </div>
    );
}

export default CalculatorDisplay;