import React from 'react';
import picture1 from '../../../Assets/images/manageYourBusinessHome/Picture1.png';
import picture2 from '../../../Assets/images/manageYourBusinessHome/Picture2.png';
import picture3 from '../../../Assets/images/manageYourBusinessHome/Picture3.png';
import ReadMoreReadLess from '../../Shared/ReadMoreReadLess/ReadMoreReadLess';

const ManageYourBusiness = () => {
    const businesses = [
        {
            id: 1,
            name: 'Small Business',
            description: 'Soft Valley can provide solutions that help with inventory management, sales tracking, customer relationship management (CRM), and financial management. These tools can help small businesses stay organized and make informed decisions to grow their business.',
            image: picture1,
        },
        {
            id: 2,
            name: 'Medium Business',
            description: 'Medium-sized businesses have more complex needs, and Soft Valley can help with custom software development, cloud solutions, and automation tools to streamline business processes. Soft Valley can also provide analytics and reporting solutions to help medium-sized businesses make data-driven decisions.',
            image: picture2,
        },
        {
            id: 3,
            name: 'Enterprise Business',
            description: 'Soft Valley can provide customized solutions for complex business processes, including enterprise resource planning (ERP), supply chain management, and data warehousing. Soft Valley can also help enterprise-level businesses with security and compliance solutions to protect sensitive data and meet regulatory requirements.',
            image: picture3,
        }
    ]


    return (
        <section className='max-w-[1282px] mx-auto px-5 lg:px-0 lg:mt-[90px]'>
            <h1 className='font-["Manrope"] font-extrabold text-2xl lg:text-[40px] text-[#0C0047] lg:leading-[55px] tracking-[0.005em] text-center'>Soft Valley Manage Your <span className='text-[#F15524]'>Business</span></h1>
            <h3 className='font-["Manrope"] text-xs md:text-base md:leading-8 tracking-[0.5px] text-[ #64607D] text-center mt-5'>We make it easy for users to use our platform, that's why we provide this benefit.</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 lg:mt-[60px]'>
                {
                    businesses?.map(business =>
                        <div key={business.id} className='border border-[#EAEAEA]  rounded-[15px]'>
                            <div className='flex flex-col items-center justify-center m-8'>
                                <img className='w-[100px] h-[100px]' src={business.image} alt="" />

                                <h2 className='my-[15px] text-[#0C0047] text-[22px] font-["Manrope"] font-bold leading-[30px] tracking-[-0.408px]'>{business.name}</h2>

                                {/* <p className='text-[#757095] font-["Manrope"] text-base leading-[30px] tracking-tight hidden lg:block'>{business.description.slice(0, 200)} <span className='text-[#006CEC] cursor-pointer'>...Read More</span> </p> */}

                                <ReadMoreReadLess limit={200} readClass={'text-[#757095] font-["Manrope"] leading-[30px] tracking-tight'} readBtn={'text-[#006CEC]'}>
                                    {business.description}
                                </ReadMoreReadLess>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default ManageYourBusiness;