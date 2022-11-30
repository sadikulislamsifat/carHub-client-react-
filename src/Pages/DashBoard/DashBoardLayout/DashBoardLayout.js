import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side border">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      <li><Link to='/dashboard/allseller'>All Seller</Link></li>
      <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
      <li><Link to='/dashboard/allusers'>All Users</Link></li>
      <li><Link to='/dashboard/allproduct'>All Product</Link></li>
      <li><Link to='/dashboard/reportedproduct'>Reported Product</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default DashBoardLayout;