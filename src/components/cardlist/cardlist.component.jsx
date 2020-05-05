import React from 'react';
import './cardlist.style.css'
import { Card } from '../card/card.component';

export const CardList = (props) => (
    <div className="cardlist-container">
        {
            props.monsters.map(
                monsters => (
                    <Card key={monsters.id} monsters={monsters}/>
                )
            )
        }
    </div>
)