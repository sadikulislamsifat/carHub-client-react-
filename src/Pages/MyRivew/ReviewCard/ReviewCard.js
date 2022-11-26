import React from 'react';
import { BiTrash } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({review, handleDelete}) => {
    const {_id, rating, message, name, photo , serviceName} = review;
    return (
        <div style={{minHeight: '250px'}} className='border relative  rounded-lg card'>
        <div className='flex justify-between p-3'>
            <div className=' flex items-center'>
                <p className='text-xl'>{rating}</p>
                <AiFillStar className='text-yellow-500 text-xl'></AiFillStar>
            </div>
            <div >
               <button onClick={() =>handleDelete(_id)}> <BiTrash className='text-3xl text-red-600'></BiTrash></button>
            </div>
        </div>
        <hr className='border bottom-1 w-full'/>
        <div className='my-5 p-2'>
            {/* <p>{serviceName}</p> */}
            <p>{message}</p>
        </div>
        
           <hr className='border bottom-1 w-full'/>
           <div className=' absolute bottom-0 pl-2 '>
                
             <div className='flex items-center'>
             {
                    photo ?
                    <img className='rounded-full h-14 w-14' src={photo} alt=""/>
                    :
                    <FaUserCircle className='text-4xl'></FaUserCircle>
                }
                <p className='ml-3 '>{name}</p>
             </div>
            </div>
          </div>
    );
};

export default ReviewCard;