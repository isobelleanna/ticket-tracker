import React from 'react';
import "./CounterCard.scss";
import Button from "../Button/Button";

const CounterCard = () => {
  return (
    <div className='counter-card'>
        <h4 className='counter-card__title'>Counter</h4>
        <p className='counter-card__number'>0</p>
        <Button buttonText="+" />
        <Button buttonText="-" />
    </div>
  )
}

export default CounterCard