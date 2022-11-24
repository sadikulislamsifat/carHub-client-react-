import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(e => console.error(e))
  }
    const menuItem = <React.Fragment>
    <li><Link className=' text-lg' to='/'>Home</Link></li>
    <li><Link className=' text-lg' to='/usedcar'>Used Car</Link></li>
    <li><Link className=' text-lg' to='/blog'>Blog</Link></li>
    {
      user?.uid ? 
      <li><Link className='text-lg' to='/register'>Service</Link></li> 
      :
      <li><Link className='text-lg' to='/register'>Login</Link></li> 
    }
</React.Fragment>
    return (
        <div className='mb-5'>
           <div className="navbar bg-primary py-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <FiMenu className='text-3xl text-white'></FiMenu>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg w-52 text-black">
       {menuItem}
      </ul>
    </div>
    <a href='#' className="btn btn-primary normal-case text-2xl font-semibold text-white">Cur Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-white">
      {menuItem}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <BsCart3 className='text-2xl text-white'></BsCart3>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {
            user?.uid &&
            user?.photoURL ?
            <img src={user?.photoURL} alt='' />
            :
            <FaUserCircle className='text-4xl mt-1 text-white'></FaUserCircle>
          }
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg w-52">
        <li>
          <Link to='/profile' className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        {
          user?.uid ?
          <li onClick={handleLogOut}><a>Logout</a></li>
          :
          <li><Link className='text-lg' to='/register'>Login</Link></li> 
        }
      </ul>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Navbar;