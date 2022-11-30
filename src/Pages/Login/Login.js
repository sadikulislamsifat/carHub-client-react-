import React, { useContext, useState } from 'react';
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useNavigate,  useLocation, Link } from 'react-router-dom';
import useTitle from './../../hooks/useTitle/useTitle';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [eyeBtn, setEyeBtn] = useState(false);
    const {singIn, setLoading} = useContext(AuthContext);
    const [error, setError] = useState('');

    useTitle('Login')
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      singIn(email, password)
      .then(result => {
          const user = result.user;
          console.log(user);
          getUserToken(user.email)
         
          form.reset();
      })
      .catch(e => {
        console.error(e)
        })
    }

    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
          if(data.accessToken){
            localStorage.setItem('accessToken', data.accessToken)
           toast.success('Login Successfull');
           navigate('/');
          }
        })
      }
    return (
        <form onSubmit={handleSubmit} className=''>
         <input className='border-b-4 outline-none py-3 w-full  font-semibold' type="email" name="email" placeholder='Email' />
         <div className='relative'>
          <input required className='border-b-4  w-full py-3 outline-none font-semibold' type={eyeBtn ? 'text' : 'password'} name="password" placeholder='Password' />
          <span  className='absolute bottom-3 right-2'>
            {
                eyeBtn ? <AiFillEye onClick={() => setEyeBtn(false)} className='text-xl  '></AiFillEye> 
                :
               <AiFillEyeInvisible onClick={() => setEyeBtn(true)} className='text-xl'></AiFillEyeInvisible>
            }
            </span>
          </div>
         <label className="label">
             <span className="label-text font-semibold ">Forget Password?</span>
         </label>
         <button className='submit-btn w-full text-white font-semibold text-xl mt-5' type="submit" >Log in</button>
        </form>
    );
};

export default Login;