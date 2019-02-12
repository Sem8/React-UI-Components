import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className='actionButton'>
            <div>{props.eachAction.textDivision}</div>
            <div>{props.eachAction.textTimes}</div>
            <div>{props.eachAction.textMinus}</div>
            <div>{props.eachAction.textPlus}</div>
            <div>{props.eachAction.textEqual}</div>

        </button>

    )
}

export default ActionButton;
