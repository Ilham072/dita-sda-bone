import React from "react";
import komoditi from "./komoditi.js";
import CardCategory from "./CardCategory.js";

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
            <CardCategory komoditi={komoditi.pertanian}/>
            <CardCategory komoditi={komoditi.peternakan}/>
            <CardCategory komoditi={komoditi.perikanan}/>
            <CardCategory komoditi={komoditi.perindustrian}/>
            <CardCategory komoditi={komoditi.pariwisata}/>
        </div>
    )
}

export default KomoditiCategory;


