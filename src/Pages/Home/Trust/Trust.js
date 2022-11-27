import React from 'react';

const Trust = () => {
    return (
        <section className=' my-6 md:my-12 bg-base-200 p-3 md:p-5 lg:py-12' >
            <div>
                <div >
                    <h1 className='text-4xl font-semibold'>Why Trust <span className='text-primary'>Car Hub ?</span></h1>
                </div >
                <div  className='grid grid-cols-2  lg:grid-cols-4 gap-5 mt-5 bg-base-content w-full h-auto p-5'>
                    <div className=" rounded-lg bg-base-100 shadow-xl w-full">
                        <div className="card-body">
                            <p className='md:text-lg font-semibold'><span className='text-orange-500 text-2xl font-bold'>25+</span> Primium Brands</p>
                        </div>
                    </div>
                    <div className=" rounded-lg bg-base-100 shadow-xl w-full">
                        <div className="card-body">
                            <p className='md:text-lg font-semibold'><span className='text-orange-500 text-2xl font-bold'>10K+</span> Perfect Cars</p>
                        </div>
                    </div>
                    <div className=" rounded-lg bg-base-100 shadow-xl w-full">
                        <div className="card-body">
                            <p className='md:text-lg font-semibold'><span className='text-orange-500 text-2xl font-bold'>30K+</span> Happy Users</p>
                        </div>
                    </div>
                    <div className=" rounded-lg bg-base-100 shadow-xl w-full">
                        <div className="card-body">
                            <p className='md:text-lg font-semibold'><span className='text-orange-500 text-2xl font-bold'>2K+</span> Total Registration</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;