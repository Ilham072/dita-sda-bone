import React from "react";
import './CardPariwisata.css';
import location_logo from './../images/location_logo.svg';
import button from './../images/Button1.svg'; 

const CardPariwisata = (props) => {
    return (
        <div className="CardPariwisata">
            <div className="CardPariwisata-location">
                <img src={location_logo}/>
                <p>{props.pariwisata.nameLocation}</p>
            </div>
            <div className="CardPariwisata-image">
                <img src={props.pariwisata.image}/>
            </div>
            <div className="CardPariwisata-content">
                <p>{props.pariwisata.name}</p>
                <a href="#">
                    <img src={button}/>
                </a>
            </div>
        </div>
    )
}

export default CardPariwisata;