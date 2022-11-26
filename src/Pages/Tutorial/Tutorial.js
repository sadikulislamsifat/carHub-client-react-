import React from 'react';
import Step from './Step';
import step1 from '../../assest/tutorial/1.png'
import step2 from '../../assest/tutorial/2.png'
import step3 from '../../assest/tutorial/3.png'
import step4 from '../../assest/tutorial/4.png'

const Tutorial = () => {

    const tutorialData =[
        {
            id: 1,
            img: step1,
            title: "Choose Your Car",
            description: "We have compiled recommended information that you want to know to buy your car."
        }, 
        {
            id: 2,
            img: step2,
            title: "Contact Seller",
            description: "After You've selected a car, we arrange a viewing to seller location or one of our points."
        }, 
        {
            id: 3,
            img: step3,
            title: "Financing & Registration",
            description: "We deal with the paper work to avail your financing and registration in 24 hours."
        }, 
        {
            id: 4,
            img: step4,
            title: "Get Your Car",
            description: "Embrace the joy of Car Ownership without any of hassle."
        }, 
    ]
    return (
        <div className='bg-base-200 w-full p-2 py-9'>
            <h1 className='text-2xl md:text-4xl'>How to buy your car with <span className='text-primary'>Car Hub?</span></h1>

          <div className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5 rounded-md p-4 md:p-5'>
                {
                    tutorialData.map(step => <Step
                    key={step.id}
                    step={step}
                    ></Step>)
                }
            </div>
          
            
        </div>
    );
};

export default Tutorial;