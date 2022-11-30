import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle/useTitle';
import Product from './Product/Product';

const AllProduct = () => {
  const [allCars, setAllCars] = useState([]);
  useTitle('All Product')

  useEffect(() => {
    fetch('http://localhost:5000/allcars')
    .then(res => res.json())
    .then(data => {
      setAllCars(data)
    })
  },[]);

  const handleDelete = id => {
    console.log(id)

    const proceed = window.confirm("Are you sure you want to delete this item ?")
    if(proceed){
        fetch(`http://localhost:5000/allcars/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted succesfully')
                const remaing = allCars.filter(car => car._id !== id);
                setAllCars(remaing)
            }
        })
    }
}
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>Car</th>
        <th>Name</th>
        <th>Price</th>
        <th>Location</th>
        <th>Delet</th>
      </tr>
    </thead>
    <tbody>
      
      {
        allCars.map(car => <Product
        key={car._id}
        car={car}
        handleDelete={handleDelete}
        ></Product>)
      }
   
    </tbody>
    
    <tfoot>
      <tr>
      <th>Car</th>
        <th>Name</th>
        <th>Price</th>
        <th>Location</th>
        <th>Delet</th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default AllProduct;