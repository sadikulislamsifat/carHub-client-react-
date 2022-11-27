import React, { useState , useContext} from 'react';
import banner from '../../assest/Login/banner.jpg'
import './Register.css'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import {Outlet} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from './../../hooks/useTitle/useTitle';

const Register = () => {
    const [btn, setBtn] = useState(false);

    useTitle('Register')
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSingin = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => console.error(e))
    }


    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className='min-h-screen flex justify-center items-center '>
            <div className='absolute'>
                <div className='w-[370px] h-[480px] bg-white p-2 rounded-lg'>
                    <div className='w-[230px] my-9 py-2  mx-auto button-box '>
                        <div id='btn' className={`${btn ? 'right-0' : 'left-0'}`}>

                        </div>
                        <Link onClick={() => setBtn(false)} to='/register/login' className={`toggle-btn font-semibold `}>Log In</Link>
                        <Link onClick={() => setBtn(true)} to='/register/singup' className='toggle-btn font-semibold'>Register</Link>
                    </div>
                    <div className='text-center my-3 '>
                       <button onClick={handleGoogleSingin} > <FcGoogle className='text-4xl mx-auto'></FcGoogle></button>
                    </div>
                    <div className='px-6'>
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;