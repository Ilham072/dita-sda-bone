import React from 'react';
import pertanian from './../images/pertanian.jpg';
import button from './../images/button1.png';
import pertanian_logo from './../images/pertanian_logo.svg';
import './CardNews.css';

const CardNews = () => {
    return (
        <div className="CardNews">
            <div className="CardNews-category">
                <img src={pertanian_logo}/>
                <span>Pertanian</span>
            </div>
            <div className="CardNews-image">
                <img src={pertanian} alt="Pertanian" />
            </div>
            <div className="CardNews-content">
                <div className="CardNews-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet elementum dignissim.
                </div>
                <div className="card-button">
                    <a href="#">
                        <button>
                            <img src={button}/>
                        </button>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default CardNews;