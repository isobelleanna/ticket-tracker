import React from 'react';
import "./TeamCard.scss";
import CounterCard from '../CounterCard/CounterCard';

const TeamCard = (props) => {
    const {teamArr} = props;
    const teamCardJSX = teamArr.map((teamMember, index) => (
        <div className='team-card'>
         <h2 key={index} className='team-card__name'>{teamMember.name}</h2>
        <h3 key={teamMember.id} className='team-card__role'>{teamMember.role}</h3>
        <CounterCard />
    </div>
       
    ));
  return (
      <div className='team-cards'>{teamCardJSX}</div>
  )
}

export default TeamCard