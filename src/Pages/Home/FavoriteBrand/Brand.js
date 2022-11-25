import React from 'react';
import { Link } from 'react-router-dom';
import { SiBrandfolder } from "react-icons/si";

const Brand = ({brand}) => {
    const {name , img, id} = brand;
    return (
       <Link to={`/category/${id}`}>
        <div className="rounded-lg hover:bg-orange-200 transition-colors bg-base-100 shadow-xl p-3 m-2">
                    <figure className="px-2 pt-2">
                        {
                            img ? 
                            <img style={{width:'95px', height: ' 75px'}} src={img} alt="Shoes" className="rounded-xl" />
                            :

                        <SiBrandfolder className='text-[75px] w-[90px]'></SiBrandfolder>
                        }
                    </figure>
                    <div className=" flex justify-center">
                        <h2 className="font-semibold mt-1">{name}</h2>
                    </div>
                </div>
       </Link>
    );
};

export default Brand;