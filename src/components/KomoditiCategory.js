import React from "react";
import komoditi from "./kategori_komoditi.js";
import CardKomoditiCategory from "./CardKomoditiCategory.js";

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
            <CardKomoditiCategory komoditi={komoditi.pertanian}/>
            <CardKomoditiCategory komoditi={komoditi.peternakan}/>
            <CardKomoditiCategory komoditi={komoditi.perikanan}/>
            <CardKomoditiCategory komoditi={komoditi.perindustrian}/>
            <CardKomoditiCategory komoditi={komoditi.pariwisata}/>
        </div>
    )
}

export default KomoditiCategory;


