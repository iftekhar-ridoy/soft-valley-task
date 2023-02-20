import React from 'react';
import picture1 from '../../../Assets/images/manageYourBusinessHome/Picture1.png';
import picture2 from '../../../Assets/images/manageYourBusinessHome/Picture2.png';
import picture3 from '../../../Assets/images/manageYourBusinessHome/Picture3.png';

const ManageYourBusiness = () => {
    const businesses = [
        {
            id: 1,
            name: 'Small Business',
            description: 'End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution. End-to-end payments',
            image: picture1,
        },
        {
            id: 2,
            name: 'Medium Business',
            description: 'End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution. End-to-end payments',
            image: picture2,
        },
        {
            id: 3,
            name: 'Enterprise Business',
            description: 'End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution. End-to-end payments',
            image: picture3,
        }
    ]


    return (
        <section className='px-5 xl:px-[120px] lg:mt-[90px]'>
            <h1 className='font-["Manrope"] font-extrabold text-2xl lg:text-[40px] text-[#0C0047] lg:leading-[55px] tracking-[0.005em] text-center'>Soft Valley Manage Your <span className='text-[#F15524]'>Business</span></h1>
            <h3 className='font-["Manrope"] text-xs md:text-base md:leading-8 tracking-[0.5px] text-[ #64607D] text-center mt-5'>We make it easy for users to use our platform, that's why we provide this benefit.</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 lg:mt-[60px]'>
                {
                    businesses?.map(business =>
                        <div key={business.id} className='border border-[#EAEAEA]  rounded-[15px]'>
                            <div className='flex flex-col items-center justify-center m-8'>
                                <img className='w-[100px] h-[100px]' src={business.image} alt="" />

                                <h2 className='my-[15px] text-[#0C0047] text-[22px] font-["Manrope"] font-bold leading-[30px] tracking-[-0.408px]'>{business.name}</h2>

                                <p className='text-[#757095] font-["Manrope"] text-base leading-[30px] tracking-tight'>{business.description} <span className='text-[#006CEC] cursor-pointer'>...Read More</span> </p>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default ManageYourBusiness;