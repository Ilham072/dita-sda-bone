import React from "react";
import pariwisata from "./kategori_pariwisata.js";
import CardCategory from "./CardCategory.js";

const PariwisataCategory = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'row',
            }
        }>
            <CardCategory category={pariwisata.wisataAlam}/>
            <CardCategory category={pariwisata.wisataBudaya}/>
            <CardCategory category={pariwisata.wisataPanorama}/>  
        </div>
    )
}

export default PariwisataCategory;