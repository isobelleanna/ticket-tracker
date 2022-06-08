import React from 'react';
import "./TeamCard.scss";
import CounterCard from '../CounterCard/CounterCard';

const TeamCard = (props) => {
    const {name, role} = props;
    
  return (
     <div className='team-card'>
         <h2 className='team-card__name'>{name}</h2>
        <h3  className='team-card__role'>{role}</h3>
        <CounterCard />
    </div>
  )
}

export default TeamCard