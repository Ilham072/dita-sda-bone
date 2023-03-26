import React from 'react';
import './CardCategory.css';

const CardPertanianCategory = (props) => {
    return (
        <div className="cardPertanianCategory">
            <a href="#">
                <div className="cardPertanianCategory-content">
                    <div>
                        <p id="sum">{props.category.count}</p>
                        <p id="title">{props.category.name}</p>
                    </div>
                    <div style={
                        {backgroundColor:props.category.bgColor}
                    } className="cardPertanianCategory-logo">
                        <img src={props.category.image}/>
                    </div>
                </div>
            </a>         
        </div>
    )
}

export default CardPertanianCategory;