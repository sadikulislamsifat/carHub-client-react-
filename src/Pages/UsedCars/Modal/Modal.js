import React, { useContext } from 'react';
import { AuthContext } from './../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Modal = ({cars}) => {
    // const {} = cars;
    console.log(cars)
    const {user} = useContext(AuthContext);
    return (
          <div>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box rounded-lg relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{ cars?.name}</h3>
                    <form className='mt-5'>
                        <input type="text" disabled className="input mt-5 input-bordered w-full " />
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Full Name"  className="input mt-5 input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input mt-5 input-bordered w-full " />
                        <input name='email' type="email" defaultValue={user?.email}  disabled placeholder="Email" className="input mt-5 input-bordered w-full " required/>
                        <button className='btn  mt-5 w-full' type="submit">Submit</button>
                    </form>
                </div>
            </div>
         </div>
    );
};

export default Modal;