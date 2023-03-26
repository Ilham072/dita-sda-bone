import React from 'react';
import logo from './logo.js';
import category from './pertanian_category.js';
import CardPertanianCategory from './CardPertanianCategory.js';

const PertanianCategory = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'row',
            }
        }>
            <CardPertanianCategory category={category[0]} logo={logo.tanamanPangan} />
            <CardPertanianCategory category={category[1]} logo={logo.hortikultura} />
            <CardPertanianCategory category={category[2]} logo={logo.perkebunan} />
          </div>
    )
}

export default PertanianCategory;