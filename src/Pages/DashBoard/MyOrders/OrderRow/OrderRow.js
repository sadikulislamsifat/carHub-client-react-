import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

const OrderRow = ({order}) => {
    const {img, carsName,location, name } = order;
    console.log(order)
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
              <div className="font-bold">{carsName}</div>
            </div>
          </div>
        </td>
        <td>
         {name}
        </td>
        <td> 
            <div className="text-sm flex items-center"> 
              <MdLocationOn className='text-xl text-red-400 '></MdLocationOn>
              <span className='opacity-50'>{ location}</span>
              </div>
              </td>
        <td>
          <button  className="btn btn-ghost btn-xs"><BsTrash className='text-2xl text-red-500'></BsTrash></button>
        </td>
        <td><button className='font-semibold btn btn-xs btn-success text-white'>Pay now</button></td>
      </tr>
    );
};

export default OrderRow;