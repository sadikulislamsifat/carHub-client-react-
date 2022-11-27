import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle/useTitle';
import FavoriteBrand from '../Home/FavoriteBrand/FavoriteBrand';
import Tutorial from '../Tutorial/Tutorial';
import Brand from './../Home/FavoriteBrand/Brand';
import Category from './Category/Category';

const UsedCars = () => {
    const [categories, setCategories] = useState([]);
    useTitle("used Car")

    useEffect( () => {
        fetch('http://localhost:5000/brand-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div className='min-h-screen'>
        <FavoriteBrand></FavoriteBrand>
        <Tutorial></Tutorial>
        </div>
    );
};

export default UsedCars;