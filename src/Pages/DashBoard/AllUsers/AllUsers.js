import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const [allUsers, setAllusers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => {
            setAllusers(data)
        })
    },[]);

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successful')
            }
        })
    }
    return (
        <div>

<div className="overflow-x-auto p-2 md:p-5">
  <table className="table table-zebra w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
     {
        allUsers.map((user, i) =>  <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-success' type="">Make Admin</button>}</td>
            <td><button className='btn btn-xs btn-warning' type="">Delete</button></td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllUsers;