import React from 'react';

const BlogItem = ({data}) => {
    const {author, authorPhoto,date, description,  imageURL, title} = data;
    return (
             <div style={{height: '550px'}}  className=" rounded-xl border border-1 relative">
      <img style={{height: '200px'}} src={imageURL} className="card-img-top rounded-xl w-full" alt="..."/>
      <div className="p-5">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div   className=" absolute bottom-0 mb-2 m;-3">
       <div className='flex ml-3'>
            <div >
                <img className='rounded-2xl' style={{height:'45px', width:'45px' }} src={authorPhoto} alt=""/>
            </div>
            <div className='ml-3'>
                <p className='mb-0 text-primary'><small >{author}</small></p>
                <p className='mb-0'><small >{date}</small></p>
            </div>
        </div>
      </div>
  </div>
    );
};

export default BlogItem;