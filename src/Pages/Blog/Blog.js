import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle/useTitle';
import BlogItem from './BlogItem';

const Blog = () => {

    const [blogData, setBlogData] = useState([]);

    useTitle("Blog")

    useEffect(() => {
        fetch('http://localhost:5000/blog')
        .then(res => res.json())
        .then(data => setBlogData(data))
    },[])
    return (
        <div>
              <div style={{height: '30vh', width: '100%'}} className=" bg-base-200 flex justify-center items-center">
           <div className=' text-center'>
            <p className='mb-4 text-5xl'>Blog</p>
            <p className='text-xl '>Our latest news, updates, and stories for developers</p>
           </div>
           </div>
           <div className='w-full mx-auto  container mt-24 pb-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    blogData.map(data => <BlogItem
                    key={data.id}
                    data={data}
                    ></BlogItem>)
                }
            </div>
           </div>
        </div>
    );
};

export default Blog;