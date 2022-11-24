import React, { useEffect, useState } from 'react';

const UsedCars = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/brand-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div>
            <div>
                <select className="border py-2 px-5">
                    <option disabled selected>Select You Favorite Brands</option>
                    {
            categories.map(category =>  <option key={category.id}>{category.name}</option>
               
            )
           }
                </select>
            </div>

        </div>
    );
};

export default UsedCars;