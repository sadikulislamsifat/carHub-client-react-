import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import FavoriteBrand from '../../Home/FavoriteBrand/FavoriteBrand';

const Category = () => {
    const cars = useLoaderData();
    return (
       <div>
        <FavoriteBrand></FavoriteBrand>
        <h1>{cars.length}</h1>
       </div>
    );
};

export default Category;