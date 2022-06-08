import React, {useState} from 'react';
import "./CounterCard.scss";
import Button from "../Button/Button";


const CounterCard = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter(counter + 1)
  }
   const handleDecrease = () => {
     counter === 0 ? setCounter(0): setCounter(counter - 1)
  }
  
  return (
    <div className='counter-card'>
        <h4 className='counter-card__title'>Counter</h4>
        <p className='counter-card__number'>{counter}</p>
        <div className='counter-card__button-bar'>
        <div onClick={handleIncrease}>
        <Button buttonText="+" />
        </div>
        <div onClick={handleDecrease}>
        <Button buttonText="-" />
        </div>
        </div>
    </div>
  )
}

export default CounterCard