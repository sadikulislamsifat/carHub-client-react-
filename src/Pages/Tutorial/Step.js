import React from 'react';
import { MdSportsSoccer } from "react-icons/md";

const Step = ({step}) => {
    const {img, title, description, id} = step;
    
    return (
        <div className='text-center'>
            <div className='flex justify-center'>
            <h3 className='font-semibold text-3xl text-primary flex items-center'><MdSportsSoccer></MdSportsSoccer> <span className='ml-2'>Step {id}</span></h3>
            </div>
            <div className='w-full my-3 flex justify-center '>
                <img src={img} alt=""/>
            </div>
                <p className='font-semibold text-xl'>{title}</p>
                <p>{description}</p>
           
        </div>
    );
};

export default Step;