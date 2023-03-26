import React from "react";
import pariwisata from "./kategori_pariwisata.js";
import CardPertanianCategory from "./CardCategory.js";

const PariwisataCategory = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'row',
            }
        }>
            <CardPertanianCategory category={pariwisata.wisataAlam}/>
            <CardPertanianCategory category={pariwisata.wisataBudaya}/>
            <CardPertanianCategory category={pariwisata.wisataPanorama}/>  
        </div>
    )
}

export default PariwisataCategory;