import React from 'react';
import { MdLocationPin, MdLocalGasStation } from "react-icons/md";
import { TbEngine} from "react-icons/tb";
import { BsBookmarkPlusFill, BsArrowRight} from "react-icons/bs";

const SingleBrands = ({brand}) => {
    const {Milage, brand : brandName, category_id, color, engine, gearbox, id, img, location, name, price, year} = brand;
    console.log(brand)
    return (
    <div className='bg-white flex rounded-md border'>
        <div className='w-2/5'>
            <img className='w-full rounded-md h-full' src={img} alt=""/>
        </div>
        <div className='ml-4 py-4 w-full'>
            <h4 className='text-lg md:text-xl'>{name}</h4>
            <p className='flex items-center'><MdLocationPin className='text-lg text-red-500'></MdLocationPin> <span>{location}</span></p>
            <hr className='w-full'/>
            <div className='font-semibol flex justify-between pr-2 md:pr-9'>
                <div className=''>
                    <p>PRICE</p>
                    <p className='text-red-500'>BDT: {price}</p>

                </div>
                <div className='font-bold text-gray-400'>
                    <p>Mileage</p>
                    <p>{Milage} KM</p>
                </div>
                <div>
                    <p className='flex'><span className='text-red-400 mr-1 flex items-center'><MdLocalGasStation></MdLocalGasStation>{engine}L</span> (Gas) </p>
                    <p className='text-red-400 flex items-center'>
                        <TbEngine className='mr-1'></TbEngine>
                        {gearbox}</p>
                </div>
            </div>
            <hr className='w-full'/>
            <div className='flex justify-between items-center pr-2 md:pr-9'>
                <p className='text-primary mt-3 flex items-center'><span>BOOK NOW</span>   <BsArrowRight className='text-lg md:text-xl text-primary ml-1'></BsArrowRight></p>
                <div className=''>
                    <BsBookmarkPlusFill className='text-lg md:text-xl text-primary mr-2'></BsBookmarkPlusFill>
                  
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleBrands;