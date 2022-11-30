import React from 'react';

const ReportedProduct = () => {
    return (
        <div>
              <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>Car</th>
        <th>Name</th>
        <th>Reason</th>
        <th>Location</th>
        <th>Delet</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>
        <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
   
    </tbody>
    
    <tfoot>
      <tr>
      <th>Car</th>
        <th>Name</th>
        <th>Reason</th>
        <th>Location</th>
        <th>Delet</th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default ReportedProduct;