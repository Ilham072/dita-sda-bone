import React from "react";
import komoditiPariwisata from './komoditi_pariwisata.json';
import CardPariwisata from "./Card/CardPariwisata.js";

const KomoditiPariwisata = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                flexBasis: '30%',            
            }
        }>
            {
                komoditiPariwisata && komoditiPariwisata.map(item => {
                    return (
                        <CardPariwisata key={item.id} pariwisata={item}/> 
                    )
                })
            }

        </div>
    );
}

export default KomoditiPariwisata;