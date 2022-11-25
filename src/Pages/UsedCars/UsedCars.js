import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBrand from '../Home/FavoriteBrand/FavoriteBrand';
import Brand from './../Home/FavoriteBrand/Brand';
import Category from './Category/Category';

const UsedCars = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/brand-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div>
            {/* <section className=' bg-base-200 p-3 md:p-5 lg:py-12 my-9'>
            <h1 className='text-4xl'>Popular Brands</h1>

            <div className='flex flex-wrap mt-5'>
               {
                categories.map(brand => <Brand
                key={brand.id}
                brand={brand}
                ></Brand>)
               }
            </div>

        </section> */}
        <FavoriteBrand></FavoriteBrand>
        </div>
    );
};

export default UsedCars;