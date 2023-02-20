import React from 'react';
import company1 from '../../../Assets/images/company/company1.png';
import company2 from '../../../Assets/images/company/company2.png';
import company3 from '../../../Assets/images/company/company3.png';
import company4 from '../../../Assets/images/company/company4.png';
import company5 from '../../../Assets/images/company/company5.png';
import company6 from '../../../Assets/images/company/company6.png';
import company7 from '../../../Assets/images/company/company7.png';

const Companies = () => {
    return (
        <section className='mt-20 lg:mt-[150px]'>
            <h2 className='text-center font-["Manrope"] font-semibold text-[22px] md:leading-[30px] text-[#0C0047]'>Companies we have helped to grow</h2>

            <div className='flex flex-wrap gap-5 lg:gap-10 justify-center py-5 md:py-10'>
                <img className='h-3 lg:h-6' src={company1} alt="" />
                <img className='h-3 lg:h-6' src={company2} alt="" />
                <img className='h-3 lg:h-6' src={company3} alt="" />
                <img className='h-3 lg:h-6' src={company4} alt="" />
                <img className='h-3 lg:h-6' src={company5} alt="" />
                <img className='h-3 lg:h-6' src={company6} alt="" />
                <img className='h-3 lg:h-6' src={company7} alt="" />
            </div>
        </section>
    );
};

export default Companies;