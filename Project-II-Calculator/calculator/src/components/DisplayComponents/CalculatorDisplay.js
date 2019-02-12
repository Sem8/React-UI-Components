import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';



const CalculatorDisplay = props => {
    return (
        <div className='calculatorDisplay'>
            <div className='calculatorOutput'>
                {props.Numbers.textZero}
            </div>
            
            <NumberButton eachNumber={props.Numbers} />
            <ActionButton eachAction={props.Numbers} />           
        </div>
    );
}

export default CalculatorDisplay;