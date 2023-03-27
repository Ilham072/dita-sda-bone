import React from 'react';
import './CardKomoditiCategory.css';
import button from './../images/Button2.svg';

const CardKomoditiCategory = (props) => {
    return (
        <div className="CardKomoditiCategory">
            <div className="CardKomoditiCategory-content">
                <div className="CardKomoditiCategory-logo">
                    <img src={props.komoditi.image}/>
                </div>
                <div className="CardKomoditiCategory-title">
                    <p id="Sum-Category">{props.komoditi.count}</p>
                    <p id="Title">{props.komoditi.name}</p>
                </div>
                <a href="#" className="CardKomoditiCategory-button">
                    <img src={button}/>
                </a>
            </div>
        </div>
    )
}

export default CardKomoditiCategory;