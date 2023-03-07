import React from 'react';
import company1 from '../../../Assets/images/company/company1.png';
import company2 from '../../../Assets/images/company/company2.png';
import company3 from '../../../Assets/images/company/company3.png';
import company4 from '../../../Assets/images/company/company4.png';
import company5 from '../../../Assets/images/company/company5.png';
import company6 from '../../../Assets/images/company/company6.png';
import company7 from '../../../Assets/images/company/company7.png';
import Marquee from 'react-fast-marquee';
import './Companies.css'

const Companies = () => {
    const companies = [
        {
            id: 1,
            company: company1
        },
        {
            id: 2,
            company: company2
        },
        {
            id: 3,
            company: company3
        },
        {
            id: 4,
            company: company4
        },
        {
            id: 5,
            company: company5
        },
        {
            id: 6,
            company: company6
        },
        {
            id: 7,
            company: company7
        },
    ]

    return (
        <section className='mt-20 lg:mt-[150px] 2xl:mt-[265px] w-full max-w-[1282px] mx-auto'>
            <h2 className='text-center font-["Manrope"] font-semibold text-[20px] md:text-[22px] md:leading-[30px] text-[#0C0047]'>Companies we have helped to grow</h2>

            <div className='my-5 md:my-12 mx-5 md:mx-0 flex '>
                <div className='w-[100%]'>
                    <Marquee className='' speed={30}>
                        <div className='flex flex-row '>
                            {
                                companies.map((data) => (
                                    <div className='w-full'>
                                        <img className='h-4 mr-14 md:h-5 max-w-[120px] mx-auto' src={data.company} alt="" />
                                    </div>
                                ))}
                        </div>
                    </Marquee>
                </div>
            </div>

        </section>
    );
};

export default Companies;