import React from 'react';
import news from './news.json';
import CardNews from './CardNews.js';

const News = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                flexBasis: '30%'
            }
        }>
            {
                news && news.map(item => {
                    return (
                        <CardNews key={item.id} news={item}/>
                    )
                })
            }

        </div>
    )
}

export default News;
