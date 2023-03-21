import React from 'react';
import padi from './../images/padi.jpg';
import button from './../images/button1.png';
import './Card.css';
const Card = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={padi} alt="padi"/>
            </div>
            <div className="card-content">
                <span>Title</span>
                <a href="#">
                    <button>
                        <img src={button}/>
                    </button>
                </a>
            </div>    
        </div>
    )
}

export default Card;