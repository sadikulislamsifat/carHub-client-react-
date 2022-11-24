import React, { useContext } from 'react';
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='min-h-screen bg-base-200 flex items-center justify-center'>

            <div className='h-96 w-96 rounded-lg bg-white '>
                <div style={{height: '90px'}} className='text-center bg-primary w-full flex justify-center'>
                   <div className=''>
                   <h4 className='text-xl text-white pt-5'>{user?.displayName ? user.displayName : 'User : NAN'}</h4>
                    {
                        user?.photoURL ?
                        <img style={{width: '110px'}} src={user?.photoURL} className='shadow-lg rounded-full mx-auto mt-1 ' alt=""/>
                        :
                        <FaUserCircle className='text-6xl mx-auto mt-1 '></FaUserCircle>
                    }
                   </div>
                </div>
                <div className='p-4'>
                    <p className='mt-4 text-lg font-semibold'>Name : {user?.displayName ? user.displayName : 'NAN'}</p>
                    <hr className='border-b-2 border-base-300'/>

                    <p className='mt-4 text-lg font-semibold'>Role : {user?.displayName}</p>
                    <hr className='border-b-2 border-base-300'/>
                    <p className='mt-4 text-lg font-semibold'>Email : {user?.email ? user.email : 'NAN'}</p>
                    <hr className='border-b-2 border-base-300'/>
                    <p className='mt-4 text-lg font-semibold'>Type : {user?.uid ? 'User' : 'NAN'}</p>
                    <hr className='border-b-2 border-base-300'/>
                    {
                        user?.uid ?
                        <button className='btn btn-primary text-white mt-4 w-full' type="">Log Out</button>
                        :
                        <Link className='btn btn-primary text-white mt-4 w-full' to='/register'>Login</Link>
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Profile;