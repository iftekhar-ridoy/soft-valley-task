import React from 'react';
import picture1 from '../../../Assets/images/manageYourBusinessService/Picture1.png';
import picture2 from '../../../Assets/images/manageYourBusinessService/Picture2.png';
import picture3 from '../../../Assets/images/manageYourBusinessService/Picture3.png';
import picture4 from '../../../Assets/images/manageYourBusinessService/Picture4.png';

const ManageYourBusinessService = () => {
    const businesses = [
        {
            id: 1,
            image: picture1,
            name: 'Sales',
            description: "It doesn't cost a fortune to move your work online —in fact, it's free! Starting from 5 GB of free storage.problems."
        },
        {
            id: 2,
            image: picture2,
            name: 'Stock',
            description: "It doesn't cost a fortune to move your work online —in fact, it's free! Starting from 5 GB of free storage.problems."
        },
        {
            id: 3,
            image: picture3,
            name: 'Account',
            description: "It doesn't cost a fortune to move your work online —in fact, it's free! Starting from 5 GB of free storage.problems."
        },
        {
            id: 4,
            image: picture4,
            name: 'Report',
            description: "It doesn't cost a fortune to move your work online —in fact, it's free! Starting from 5 GB of free storage.problems."
        },
    ]
    return (
        <section className='max-w-[1282px] mx-auto px-5 lg:px-0 lg:mt-[90px]'>
            <h1 className='font-["Manrope"] font-extrabold text-2xl lg:text-[40px] text-[#0C0047] lg:leading-[55px] tracking-[0.005em] text-center'>Soft Valley Manage Your <span className='text-[#F15524]'>Business</span></h1>
            <h3 className='font-["Manrope"] text-xs md:text-base md:leading-8 tracking-[0.5px] text-[#64607D] text-center mt-5'>We make it easy for users to use our platform, that's why we provide this benefit.</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 lg:mt-[60px]'>
                {
                    businesses?.map(business =>
                        <div key={business.id} className='border border-[#EAEAEA]  rounded-[15px]'>
                            <div className='p-7'>
                                <img className='w-[71px] h-[64px]' src={business.image} alt="" />

                                <h2 className='my-[24px] text-[#0C0047] text-[22px] font-["Manrope"] font-bold leading-[30px] tracking-[-0.408px]'>{business.name}</h2>

                                <p className='text-[#64607D] font-["Manrope"] text-sm leading-[24px] tracking-[-0.408px]'>{business.description}</p>
                                <button className='text-[#3734A9] underline mt-5 font-["Manrope"] font-semibold text-base'>Learn more</button>
                            </div>
                        </div>)
                }
            </div>
            <div className='mt-12 flex items-center justify-center'>
                <button className='text-white bg-[#006CEC] text-base font-medium font-["Poppins"] rounded-[7px] px-12 py-4'>More About Feature</button>
            </div>
        </section>
    );
};

export default ManageYourBusinessService;