import React, {useState, useEffect} from 'react';

const AllBuyers = () => {
    const [allUsers, setAllusers] = useState([]);
    const seller = "true";

    useEffect(() => {
        fetch(`http://localhost:5000/allBuyers`)
        .then(res => res.json())
        .then(data => {
            setAllusers(data)
            console.log(data)
        })
    },[]);
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

export default AllBuyers;