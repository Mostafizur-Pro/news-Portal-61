import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>This is Category has news: {news.length}</h2>
        </div>
    );
};

export default Catagory;