import React from 'react';
import pertanian from './kategori_pertanian.js';
import CardCategory from './CardCategory.js';

const PertanianCategory = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'row',
            }
        }>
            <CardCategory category={pertanian.tanamanPangan}/>
            <CardCategory category={pertanian.hortikultura}/>
            <CardCategory category={pertanian.perkebunan}/>
          </div>
    )
}

export default PertanianCategory;