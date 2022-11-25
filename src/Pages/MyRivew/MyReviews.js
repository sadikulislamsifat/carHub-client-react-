import React, {useContext, useState, useEffect} from 'react';
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState([]);


    useEffect(() => {

        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))

    }, [user?.email])

    const handleDelete = id => {
        console.log(id)

        const proceed = window.confirm("Are you sure you want to delete this review ?")
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted succesfully')
                    const remaing = reviews.filter(review => review._id !== id);
                    setReviews(remaing)
                }
            })
        }
    }
    return (
        <div className='min-h-screen'>
        {reviews.length >= 1 ? 
     <div className='p-5  md:p-9 grid grid-cols-1 md:grid-cols-2 gap-10'>
     {
       reviews.map(review => <ReviewCard
       key={reviews._id}
       review={review}
       handleDelete={handleDelete}
       ></ReviewCard>)
     }
   </div>   
    :
    <div className='min-h-screen flex justify-center items-center'>
        <h1 className='text-2xl md:text-6xl'>You Don't Ratting Us <Link className='underline text-blue-500 ' to='/review'>Give Review</Link></h1>
    </div>
    }
      </div>
    );
};

export default MyReviews;