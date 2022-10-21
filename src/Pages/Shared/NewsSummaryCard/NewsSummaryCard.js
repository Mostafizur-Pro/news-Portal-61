import React from 'react';

const NewsSummaryCard = ({news}) => {
    console.log(news)
    return (
        <div>
            {news.title}
        </div>
    );
};

export default NewsSummaryCard;