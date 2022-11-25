import React, {useState,useEffect} from 'react';
import toyota from '../../../assest/Brands/Tata_HGo8YNn.svg';
import nissan from '../../../assest/Brands/nissan_new.svg';
import rover from '../../../assest/Brands/land-rover.webp';
import tata from '../../../assest/Brands/Tata_HGo8YNn.svg';
import morris from '../../../assest/Brands/New_mg_logo.svg';
import marcedes from '../../../assest/Brands/mercedes-benz-logo-190x132_nVwdfnd.svg';

import bently from '../../../assest/Brands/BENTLEY_kbb6otv.svg';
import bmw from '../../../assest/Brands/bmw_new.svg';
import Brand from './Brand';



const FavoriteBrand = () => {
    const brandData = [
      {
         id: 1,
         name: 'Marcedes Benz',
         img: marcedes  
      },
        
        {
         id: 2,
         name: 'BMW',
         img: bmw 
      },
      {
         id: 3,
         name: 'Bently',
         img: bently  
      },
      {
         id: 4,
         name: 'Range Rover',
         img: rover 
      },
        {
           id: 2,
           name: 'Nissan',
           img: nissan  
        },
       
        
        {
           id: 5,
           name: 'Tata',
           img: tata  
        },
        {
           id: 6,
           name: 'Morris Garage',
           img: morris 
        },
        {
         id: 1,
         name: 'Toyota',
         img: toyota  
      },
        {
           id: 8,
           name: 'Audi',
           img: 'https://listcarbrands.com/wp-content/uploads/2015/10/Audi-Logo.png'  
        },
        
    ]

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/brand-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <section className=' bg-base-200 p-3 md:p-5 lg:py-12 my-9'>
            <h1 className='text-4xl'>Popular Brands</h1>

            <div className='flex flex-wrap mt-5'>
               {
                categories?.map(brand => <Brand
                key={brand.id}
                brand={brand}
                ></Brand>)
               }
            </div>

        </section>
    );
};

export default FavoriteBrand;