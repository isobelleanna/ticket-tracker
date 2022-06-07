import React from 'react';
import "./TeamCard.scss";
import CounterCard from '../CounterCard/CounterCard';

const TeamCard = (props) => {
  return (
    <div className='team-card'>
        <h2 className='team-card__name'>Name</h2>
        <h3 className='team-card__role'>Role</h3>
        <CounterCard />
    </div>
  )
}

export default TeamCard