import React from 'react';
import './CardNews.css';

const CardNews = (props) => {
    return (
        <div className="CardNews">
            <div className="CardNews-category">
                <img src={props.news.categoryLogo}/>
                <span>{props.news.category}</span>
            </div>
            <div className="CardNews-image">
                <img src={props.news.image} alt={props.news.category}/>
            </div>
            <div className="CardNews-content">
                <div className="CardNews-description">
                {props.news.description}
                </div>
                <div className="card-button">
                    <a href="#">
                        <button>
                            <img src="images/button/Button1.svg"/>
                        </button>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default CardNews;