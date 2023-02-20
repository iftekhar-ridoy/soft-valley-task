import React from 'react';
import './Faq.css'

const Faq = () => {
    const faqs = [
        {
            id: 1,
            title: 'What is Amar Solution and why is it the best POS software?',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis beatae dolorum, quas doloribus quia voluptatum molestiae dolorem omnis, fuga eius suscipit autem minus consequatur. Reiciendis illum neque maiores eum.'
        },
        {
            id: 2,
            title: 'What is your favorite template from BRIX Templates?',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis beatae dolorum, quas doloribus quia voluptatum molestiae dolorem omnis, fuga eius suscipit autem minus consequatur. Reiciendis illum neque maiores eum.'
        },
        {
            id: 3,
            title: ' How do you clone a Webflow Template from the Showcase?',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis beatae dolorum, quas doloribus quia voluptatum molestiae dolorem omnis, fuga eius suscipit autem minus consequatur. Reiciendis illum neque maiores eum.'
        },
        {
            id: 4,
            title: 'Why is BRIX Templates the best Webflow agency out there?',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis beatae dolorum, quas doloribus quia voluptatum molestiae dolorem omnis, fuga eius suscipit autem minus consequatur. Reiciendis illum neque maiores eum.'
        },

    ]
    return (
        <section className='mx-5 xl:mx-[120px] mt-20 lg:mt-[150px]'>
            <div className='text-center font-["Manrope"]'>
                <h3 className='text-[#F15524] text-lg font-bold leading-[25px]'>FAQs</h3>
                <h1 className='text-2xl md:text-[20px] lg:text-[40px] text-[#2E2E2E] lg:leading-[60px] font-extrabold tracking-[0.0053m]'>Ask Us Anything</h1>
                <h4 className='text-xs md:text-sm lg:text-base text-[#808080] lg:leading-[22px] tracking-[0.003em] mt-3'>Have any questions? We're here to assist you.</h4>
            </div>


            <div>
                <div className="flex flex-col gap-4 lg:gap-8 mt-7 lg:mt-14">
                    {
                        faqs?.map(faq =>
                            <div key={faq.id}>
                                <div className="accordion-container lg:w-[70%] mx-auto ">
                                    <div className=" collapse collapse-arrow lg:px-[60px] lg:py-[20px]">
                                        <input type="checkbox" className="" />
                                        <div className="collapse-title flex items-center justify-between">
                                            <p className='text-sm lg:text-base'>{faq.title}</p>
                                        </div>
                                        <div className="collapse-content ">
                                            <p className='text-sm lg:text-base'>{faq.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Faq;