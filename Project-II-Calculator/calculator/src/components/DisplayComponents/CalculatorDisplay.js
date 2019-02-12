import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton';



function CalculatorDisplay() {
    return (
        <div className='calculatorDisplay'>
            <NumberButton eachNumber={props.Numbers}/>
            
        </div>
    );
}

export default CalculatorDisplay;