import React, { useContext } from 'react';
import { AuthContext } from './../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Modal = ({cars}) => {
    // const {} = cars;
    console.log(cars)
    const {user} = useContext(AuthContext);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const number = form.phone.value;
        const email = form.email.value;

        const bookingData = {
            name,
            location,
            number,
            email,
            img: cars.img,
            carsName: cars.name,
            bookingId: cars.id
        }
        console.log(bookingData)

        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers:
            {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookingData)
        })

        console.log(name, location, number, email)
        form.reset()
    }
    return (
          <div>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box rounded-lg relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{ cars?.name}</h3>
                    <form onSubmit={handleSubmit} className='mt-5'>
                        <input name='email' type="email" defaultValue={user?.email}  disabled placeholder="Email" className="input mt-5 input-bordered w-full " required/>
                        <input name='name' type="text" required defaultValue={user?.displayName} placeholder="Full Name"  className="input mt-5 input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input mt-5 input-bordered w-full " />
                        <input name='location' type="text" placeholder="Location" className="input mt-5 input-bordered w-full " />
                        <button className='btn  mt-5 w-full' type="submit">Submit</button>
                    </form>
                </div>
            </div>
         </div>
    );
};

export default Modal;