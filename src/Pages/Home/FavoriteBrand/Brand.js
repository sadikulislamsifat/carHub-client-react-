import React from 'react';

const Brand = ({brand}) => {
    const {name , img} = brand;
    return (
        <div className="rounded-lg hover:bg-orange-200 transition-colors bg-base-100 shadow-xl p-3 m-2">
                    <figure className="px-2 pt-2">
                        <img style={{width:'95px', height: ' 75px'}} src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" flex justify-center">
                        <h2 className="font-semibold mt-1">{name}</h2>
                    </div>
                </div>
    );
};

export default Brand;