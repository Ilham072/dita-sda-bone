import React from 'react';
import kategoriPertanian from './kategori_pertanian.json';
import CardCategory from './Card/CardCategory.js';

const PertanianCategory = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'row',
            }
        }>
            {
                kategoriPertanian && kategoriPertanian.map(item => {
                    return (
                        <CardCategory key={item.id} category={item}/>
                    )
                })
            }
          </div>
    )
}

export default PertanianCategory;