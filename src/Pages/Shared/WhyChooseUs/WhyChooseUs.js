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
            title: 'Experience and Expertise',
            description: 'Highlight the experience and expertise of your team, emphasizing their skills and qualifications. You can mention the number of years your company has been in business, the types of projects you have worked on, and any industry-specific knowledge you have.',
            cardColor: '#DDF9FF',
        },
        {
            id: 2,
            image: picture2,
            title: 'Quality and Reliability',
            description: 'Emphasize your commitment to quality and reliability, emphasizing your dedication to delivering products and services that meet or exceed client expectations. You can mention any quality assurance processes you have in place, any certifications or awards you have received, and any guarantees or warranties you offer.',
            cardColor: ' #E8E4FF',
        },
        {
            id: 3,
            image: picture3,
            title: 'Customized Solutions',
            description: 'Emphasize your ability to provide customized solutions tailored to the specific needs of each client. You can mention your flexible approach to projects, your willingness to collaborate with clients to understand their unique requirements, and any examples of how you have customized solutions in the past.',
            cardColor: '#FFDAE8',
        },
        {
            id: 4,
            image: picture4,
            title: 'Customer Support',
            description: 'Highlight your dedication to customer support and service, emphasizing your commitment to providing ongoing support to clients even after the project is completed. You can mention the channels through which clients can reach you, any service level agreements you have in place, and any testimonials or reviews from satisfied clients.',
            cardColor: '#FFE7D6',
        },
    ]

    return (
        <section className='max-w-[1282px] mx-auto px-5 lg:px-0 mt-20 lg:mt-[150px]'>
            <div className='font-["Manrope"] text-center font-extrabold'>
                <h3 className='text-[#F15524] text-base lg:text-[18px] lg:leading-[25px]'>WHY SOFT VALLEY?</h3>
                <h1 className='text-[#0C0047] text-2xl lg:text-[40px] lg:leading-[69px] tracking-[0.005em]'>Why Choose Us</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 lg:mt-[70px]'>
                {
                    reasons?.map(reason =>
                        <div key={reason.id}>
                            <div
                                className='flex flex-col xl:flex-row gap-6 p-7 h-full lg:p-[40px] rounded-[20px]'
                                style={
                                    {
                                        backgroundColor: `${reason.cardColor}`
                                    }
                                }>

                                <div >
                                    <img className='w-[80px] h-[80px]' src={reason.image} alt="" />
                                </div>
                                <div className='font-["Manrope"] max-w-sm'>
                                    <h2 className='text-[24px] font-bold leading-[33px] text-[#251A5A] mb-2'>{reason.title}</h2>
                                    <p className='text-[#757095] text-sm lg:text-[16px] leading-[30px] tracking-tight'>{reason.description}</p>
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </section>
    );
};

export default WhyChooseUs;