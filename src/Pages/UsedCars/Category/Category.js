import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import FavoriteBrand from '../../Home/FavoriteBrand/FavoriteBrand';
import Modal from '../Modal/Modal';
import ReportedModal from '../ReportedModal/ReportedModal';
import SingleBrands from './SingleBrand/SingleBrands';

const Category = () => {
    const categoryBrands = useLoaderData();
    const [modalData, setModalData] = useState({});
    
    console.log(modalData) 
    const [cars, setCars] = useState(null)
    console.log(cars)
    return (
       <div className=''>
      

       <div className='bg-orange-50 py-9 px-2 md:px-7'>
        <div className=' mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 '>
            {
                categoryBrands.map(brand => <SingleBrands
                key={brand.id}
                brand={brand}
                setModalData={brand}
                setCars={setCars}
                ></SingleBrands>)
            }
        </div>
        
       </div>
       <FavoriteBrand></FavoriteBrand>
            <Modal
            cars={cars}
            ></Modal>
            <ReportedModal
            cars={cars}
            ></ReportedModal>
       </div>
    );
};

export default Category;