import React from "react";
import './CardPariwisata.css';

const CardPariwisata = (props) => {
    return (
        <div className="CardPariwisata">
            <div className="CardPariwisata-location">
                <img src="images/logo_pariwisata/location_logo.svg"/>
                <p>{props.pariwisata.nameLocation}</p>
            </div>
            <div className="CardPariwisata-image">
                <img src={props.pariwisata.image}/>
            </div>
            <div className="CardPariwisata-content">
                <p>{props.pariwisata.name}</p>
                <a href="#">
                    <img src="images/button/Button1.svg"/>
                </a>
            </div>
        </div>
    )
}

export default CardPariwisata;