import React from 'react';
import picture1 from '../../../Assets/images/whyChooseUs/Picture1.png';
import picture2 from '../../../Assets/images/whyChooseUs/Picture2.png';
import picture3 from '../../../Assets/images/whyChooseUs/Picture3.png';
import picture4 from '../../../Assets/images/whyChooseUs/Picture4.png';

const WhyChooseUs = () => {

    const reasons = [
        {
            id: 1,
            image: picture1,
            title: 'No Extra Fee',
            description: 'End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution.',
            cardColor: '#DDF9FF',
        },
        {
            id: 2,
            image: picture2,
            title: 'No Extra Fee',
            description: 'End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution.',
            cardColor: ' #E8E4FF',
        },
        {
            id: 3,
            image: picture3,
            title: 'No Extra Fee',
            description: 'End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution.',
            cardColor: '#FFDAE8',
        },
        {
            id: 4,
            image: picture4,
            title: 'No Extra Fee',
            description: 'End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution. End-to-end payments and financial management in a single solution.',
            cardColor: '#FFE7D6',
        },
    ]

    return (
        <section className='px-5 xl:px-[120px] mt-20 lg:mt-[150px]'>
            <div className='font-["Manrope"] text-center font-extrabold'>
                <h3 className='text-[#F15524] text-base lg:text-[18px] lg:leading-[25px]'>WHY SOFT VALLEY?</h3>
                <h1 className='text-[#0C0047] text-2xl lg:text-[40px] lg:leading-[69px] tracking-[0.005em]'>Why Choose Us</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 lg:mt-[70px]'>
                {
                    reasons?.map(reason =>
                        <div key={reason.id}>
                            <div
                                className='flex flex-col xl:flex-row gap-6 p-7 lg:p-[40px] rounded-[20px]'
                                style={
                                    {
                                        backgroundColor: `${reason.cardColor}`
                                    }
                                }>

                                <div >
                                    <img className='w-[80px] h-[80px]' src={reason.image} alt="" />
                                </div>
                                <div className='font-["Manrope"] max-w-sm'>
                                    <h2 className=' text-[24px] font-bold leading-[33px] text-[#251A5A]'>{reason.title}</h2>
                                    <p className='text-[#757095] text-base leading-[30px] tracking-tight'>{reason.description}</p>
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </section>
    );
};

export default WhyChooseUs;