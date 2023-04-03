import React from "react";
import CardKomoditiCategory from "./Card/CardKomoditiCategory.js";
import kategoriKomdoti from './kategori_komoditi.json';

const KomoditiCategory = () => {
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
                kategoriKomdoti && kategoriKomdoti.map(item => {
                   return (
                    <CardKomoditiCategory key={item.id} komoditi={item}/>
                   ) 
                })
            }
        </div>
    )
}

export default KomoditiCategory;


