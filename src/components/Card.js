import React from 'react';
import './Card.css';
const Card = (props) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.komoditi.image} alt={props.komoditi.name}/>
            </div>
            <div className="card-content">
                <span>{props.komoditi.name}</span>
                <a href="#">
                    <button>
                        <img src="images/button/Button1.svg"/>
                    </button>
                </a>
            </div>    
        </div>
    )
}

export default Card;