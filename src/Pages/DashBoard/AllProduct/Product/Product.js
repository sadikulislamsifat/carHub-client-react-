import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

const Product = ({car, handleDelete}) => {
    const {name, price, location,gearbox, brand, img, _id} = car;
    console.log(car)
    return (
        <tr>
        <th>
        <div className="avatar">
  <div className="w-24 rounded">
    <img src={img} alt='car' />
  </div>
</div>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm"> 
              <span className='opacity-50'>{brand }</span>
              </div>
            </div>
          </div>
        </td>
        <td>
         {price} Tk
          <br/>
          <span className="badge badge-ghost badge-sm">Gearbox {gearbox}</span>
        </td>
        <td> 
            <div className="text-sm flex items-center"> 
              <MdLocationOn className='text-xl text-red-400 '></MdLocationOn>
              <span className='opacity-50'>{location }</span>
              </div>
              </td>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs"><BsTrash className='text-2xl text-red-500'></BsTrash></button>
        </th>
      </tr>
    );
};

export default Product;