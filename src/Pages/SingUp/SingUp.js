import React, { useContext, useState } from 'react';
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";

const SingUp = () => {
    const [eyeBtn, setEyeBtn] = useState(false)
    const {creatUser, updateUserProfile} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        creatUser(email, password)
        .then(result => {
            const user = result.user;
            
            // console.log(user)
            // navigate('/');
            handleUpdateUserProfile(name);
            toast.success("Please verify your email address.");
            form.reset();
        })
        .catch(error => {
          console.error(error)
        }) ;
        const handleUpdateUserProfile = (name) => {
            const profile = {
              displayName: name
            }
            updateUserProfile(profile)
            .then(() => {})
            .catch(error => console.error(error))
          }
        }
        const handleEyebtnToggle = (event) => {
            console.log(event.checked)
        }
    return (
        <form onSubmit={handleSubmit}>
            <input className='border-b-4 w-full py-3 outline-none font-semibold' type="text" required name="name" placeholder='Name' />
            <input required className='border-b-4 w-full py-3 outline-none font-semibold' type="email" name="email" placeholder='Email' />
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
            
            <div className="form-control">
                <label className="cursor-pointer block mt-3 label">
               <div className='flex'>
               <input type="checkbox"   className="checkbox mt- checkbox-sm" /> 
                    <span className=" ml-2 mb-1">Accept Terms And Conditions</span>

               </div>
                </label>
            </div>
            <button className='submit-btn w-full text-white font-semibold text-xl mt-5' type="submit" >Register</button>
        </form>
    );
};

export default SingUp;