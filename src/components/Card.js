import React from 'react';
import padi from './../images/padi.jpg';
import button from './../images/button1.png';
import './Card.css';
const Card = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={padi} alt="Padi"/>
            </div>
            <div className="card-content">
                <span className="card-title">Title</span>
                <span className="card-button">
                    <a href="#">
                        <button>
                            <img src={button}/>
                        </button>
                    </a>
                </span>
            </div>

        </div>
    )
}

export default Card;