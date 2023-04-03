import React from 'react';
import Card from './Card/Card.js';

const Komoditi = (props) => {
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
                props.komoditi && props.komoditi.map(item => {
                    return (
                        <Card key={item.id} komoditi={item}/>
                    )
                })
            }
        </div>
    )
}

export default Komoditi;