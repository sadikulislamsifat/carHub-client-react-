import React, {useState, useEffect} from 'react';
import { toast } from 'react-hot-toast';
const AllSeller = () => {
    const [allUsers, setAllusers] = useState([]);
    const seller = "true";

    useEffect(() => {
        fetch(`http://localhost:5000/allSellers`)
        .then(res => res.json())
        .then(data => {
            setAllusers(data)
            console.log(data)
        })
    },[]);

    // const handleMakeAdmin = id => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: 'PUT'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.modifiedCount > 0){
    //             toast.success('Make Admin Successful')
    //         }
    //     })
    // }
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
            <td>{user?.seller ? user.name :''}</td>
            <td>{user.email}</td>
            <td>{user?.role}</td>
            <td><button className='' type="">Delete</button></td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllSeller;