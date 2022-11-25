import React, {useContext,useState} from 'react';
import { AuthContext } from './../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const btn = [1,2,3,4,5]
const Reviews = ({service}) => {
    // const {_id, title, price} = service;
    // console.log(title)
    const {user} = useContext(AuthContext);
    const [rating, setRating] = useState(5)
    

    const btnValue = event => {
        setRating(event)
    }

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const message = form.message.value;



        const reviweDetails = {
            // service : _id,
            // serviceName: title,
             name,
            message,
            rating,
            email : user?.email,
            photo: user?.photoURL

        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviweDetails)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
        if(data.acknowledged){
            alert('Review sent successfully')
        }
        form.reset();
        toast.success('Thank You For Your Valuable Opinion.')
        })
        .catch(e => console.error(e))
    }
    return (
        <div className='my-9'>
          <div style={{height: '30vh', width: '100%'}} className=" bg-base-200 flex justify-center items-center">
           <div className=' text-center'>
            <p className='mb-4 text-5xl'>Share Experience</p>
            <p className='text-xl '>Please share your experience with us.</p>
           </div>
           </div>

           <form onSubmit={handlePlaceReview} className='mt-5 md:my-9 flex justify-center  w-full'>
            <div>
                
           <div className='grid grid-cols-1 md:grid-cols-2'>
           <input type="text" name='name' placeholder="Name" className="input input-bordered w-full " />
           <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered mt-5 md:mt-0 md:ml-2 w-full " />
            </div>
            <textarea required name='message' className="textarea h-56 mt-5 w-full textarea-bordered" placeholder="Messages"></textarea>
            <div className='my-8 '>
                <span className='text-xl font-semibold'>Rating</span>
            {
                btn.map(r => <p onClick={() => btnValue(r)} className='btn ml-1 btn-outline'>{r}</p>)
            }
             <span className='text-xl ml-3 font-semibold'>Star</span>
            </div>
            <div>
                <input className='btn' type="submit" name="" value="Place Your Reviwe"/>
            </div>
            </div>
            
           </form>
           
           
          
        </div>
    );
};

export default Reviews;