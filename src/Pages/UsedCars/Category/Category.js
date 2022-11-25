import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import FavoriteBrand from '../../Home/FavoriteBrand/FavoriteBrand';
import SingleBrands from './SingleBrand/SingleBrands';

const Category = () => {
    const categoryBrands = useLoaderData();
    return (
       <div>
        <FavoriteBrand></FavoriteBrand>

       <div className='bg-sky-200 py-9'>
       <h1>{categoryBrands.length}</h1>
        <div className='px-2 md:px-7 mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 '>
            {
                categoryBrands.map(brand => <SingleBrands
                key={brand.id}
                brand={brand}
                ></SingleBrands>)
            }
        </div>
       </div>

       </div>
    );
};

export default Category;