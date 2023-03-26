import React from 'react';
import pertanian from './kategori_pertanian.js';
import CardPertanianCategory from './CardCategory.js';

const PertanianCategory = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'row',
            }
        }>
            <CardPertanianCategory category={pertanian.tanamanPangan}/>
            <CardPertanianCategory category={pertanian.hortikultura}/>
            <CardPertanianCategory category={pertanian.perkebunan}/>
          </div>
    )
}

export default PertanianCategory;