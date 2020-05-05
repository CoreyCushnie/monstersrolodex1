import React from 'react';
import './card.style.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monsters.id + 17}`}/>
        <h1> { props.monsters.name } </h1>
        <p> { props.monsters.email } </p>
    </div>
)