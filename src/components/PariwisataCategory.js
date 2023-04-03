import React from "react";
import kategoriPariwisata from './kategori_pariwisata.json';
import CardCategory from "./Card/CardCategory.js";

const PariwisataCategory = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'row',
            }
        }>
            {
                kategoriPariwisata && kategoriPariwisata.map(item => {
                    return (
                        <CardCategory key={item.id} category={item}/>
                    )
                })
            }
        </div>
    )
}

export default PariwisataCategory;