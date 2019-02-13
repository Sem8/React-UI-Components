import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

// const buttonStyle = {
//   .padding: 20px;

// }


const CalculatorText = {
  textZero: 0,
  textOne: 1,
  textTwo: 2,
  textThree: 3,
  textFour: 4,
  textFive: 5,
  textSix: 6,
  textSeven: 7,
  textEight: 8,
  textNine: 9,
  textEqual: '=',
  textPlus: '+',
  textMinus: '-',
  textTimes: 'x',
  textDivision: '/',
  textClear: 'clear'
}

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      <div className='calculatorDiv'>
        <CalculatorDisplay Numbers={CalculatorText} />

      </div>
    </div>
  );
};

export default App;
