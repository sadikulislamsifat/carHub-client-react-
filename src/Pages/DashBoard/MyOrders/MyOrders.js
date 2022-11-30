import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from './../../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow/OrderRow';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect( () => {
        fetch(`http://localhost:5000/bookings/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            
            setOrders(data)
        })
    },[user?.email])
    console.log(orders)


    // const handleDelete = id => {
    //     console.log(id)
    
    //     const proceed = window.confirm("Are you sure you want to delete this item ?")
    //     if(proceed){
    //         fetch(`http://localhost:5000/allcars/${id}`, {
    //             method: 'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if(data.deletedCount > 0){
    //                 alert('Deleted succesfully')
    //                 const remaing = allCars.filter(car => car._id !== id);
    //                 setAllCars(remaing)
    //             }
    //         })
    //     }
    // }
    return (
        <div className='px-3'>
           {orders.length > 0 ? <>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>Car</th>
        <th>Car Name</th>
        <th>Customar name</th>
        <th>Location</th>
        <th>Delete</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      
      {
        orders.map(order => <OrderRow
        key={order._id}
        order={order}
        ></OrderRow>)
      }
   
    </tbody>
    
    <tfoot>
      <tr>
      <th>Car</th>
        <th>Car Name</th>
        <th>Customer Name</th>
        <th>Location</th>
        <th>Delet</th>
        <th>Payment</th>
      </tr>
    </tfoot>
    
  </table>
</div>
           </>
           
        :<div className='flex justify-center items-center min-h-screen'><h1 className='capitalize text-xl md:text-4xl md:font-semibold'> No order were Found</h1></div>}
        </div>
    );
};

export default MyOrders;