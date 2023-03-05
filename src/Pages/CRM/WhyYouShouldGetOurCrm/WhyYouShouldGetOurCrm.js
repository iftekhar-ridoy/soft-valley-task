import React from 'react';
import bg from '../../../Assets/background/Picture10.png';
import img from '../../../Assets/images/crmBanner/Picture9.png';

const WhyYouShouldGetOurCrm = () => {
    return (
        <section className='relative'>
            <div className='w-full max-w-[1282px] mx-auto mt-14 lg:mt-[150px] px-5 lg:px-0'>
                <div className='lg:flex items-center gap-7'>
                    <div className='max-w-[550px]'>
                        <h1 className='text-[30px] font-["Manrope"] font-bold leading-[48px] tracking-[0.005em] text-[#0C0047]'>Why you should get our</h1>
                        <h2 className='text-[30px] font-["Manrope"] font-bold leading-[48px] tracking-[0.005em] text-[#F15524]'>CRM software?</h2>

                        <p className='my-[15px] text-[#191A15] font-["Manrope"] text-base leading-[30px] tracking-[0.005em]'>With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. These features include the following section:</p>
                        <div>
                            <li className='text-[#191A15] text-base leading-[30px]'>Simplified Order Process</li>
                            <li className='text-[#191A15] text-base leading-[30px]'>Use Just One Platform</li>
                            <li className='text-[#191A15] text-base leading-[30px]'>Investment Report Every Month</li>
                            <li className='text-[#191A15] text-base leading-[30px]'>Multiple Payment Method</li>
                            <li className='text-[#191A15] text-base leading-[30px]'>Online Transection</li>
                            <li className='text-[#191A15] text-base leading-[30px]'>Investment Report Every Month</li>
                            <li className='text-[#191A15] text-base leading-[30px]'>Complete Solution</li>
                            <li className='text-[#191A15] text-base leading-[30px]'>Use Just One Platform</li>
                            <li className='text-[#191A15] text-base leading-[30px]'>Investment Report Every Month</li>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>

                <div className='flex items-center justify-start mt-[30px]'>
                    <button className='flex items-center  font-["Poppins"] font-medium text-base text-white hover:text-[#006CEC] bg-[#006CEC] hover:bg-white border hover:border-[#006CEC] rounded-[7px] py-[7px] md:py-[15px] px-10 md:px-[70px]'>See Demo</button>
                </div>
            </div>

            <img className='w-[680px] h-[400px] absolute right-0 top-[-120px] -z-30 hidden lg:block' src={bg} alt="" />
        </section>
    );
};

export default WhyYouShouldGetOurCrm;