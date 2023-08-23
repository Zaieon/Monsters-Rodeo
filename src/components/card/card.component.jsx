import React from "react";
import './card.style.css';

export const Card = (props) => {
    
        return (
            <div className="card-container">
                <h2 className="delete">X</h2>
                <img src={`https://robohash.org/${props.monster.id}?set=set6&size=180x180`} alt={props.monster.name} />
                <h2>{props.monster.name}</h2>
                <p>{props.monster.email}</p>
            </div>
        )
    
}