import React from 'react';
import './CardCategory.css';
import pertanian_logo from './../images/logo/pertanian_logo2.svg';
import button from './../images/Button2.svg';

const CardCategory = (props) => {
    return (
        <div className="CardCategory">
            <div className="CardCategory-content">
                <div className="CardCategory-logo">
                    <img src={props.komoditi.image}/>
                </div>
                <div className="CardCategory-title">
                    <p id="Sum-Category">{props.komoditi.count}</p>
                    <p id="Title">{props.komoditi.name}</p>
                </div>
                <a href="#" className="CardCategory-button">
                    <img src={button}/>
                </a>
            </div>
        </div>
    )
}

export default CardCategory;