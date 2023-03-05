import React from 'react';
import pic1 from '../../../Assets/images/crmBenifits/Picture11.png';
import pic2 from '../../../Assets/images/crmBenifits/Picture12.png';
import pic3 from '../../../Assets/images/crmBenifits/Picture13.png';

const WhoCanBenifit = () => {

    const benefits = [
        {
            id: 1,
            pic: pic1,
            title: 'Fulfill Everyone’s Need',
            description: 'With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. These features include the following section:',
            path: '/',
        },
        {
            id: 2,
            pic: pic2,
            title: 'Versatile Platform ',
            description: 'With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. These features include the following section:',
            path: '/',
        },
        {
            id: 3,
            pic: pic3,
            title: 'Increase Productivity',
            description: 'With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. These features include the following section:',
            path: '/',
        },
    ]

    return (
        <section className='bg-[#FDF3FF] my-10 lg:mt-[90px]'>
            <div className='max-w-[1282px] mx-auto px-5 lg:px-0 py-10 lg:py-[100px]'>
                <h1 className='font-["Manrope"] font-extrabold text-2xl lg:text-[40px] text-[#0C0047] lg:leading-[55px] tracking-[0.005em] text-center'>Who Can Benefit From the <span className='text-[#F15524]'>Soft Valley CRM System</span></h1>
                <h3 className='font-["Manrope"] text-xs md:text-base md:leading-8 tracking-[0.5px] text-[#584F49] text-center mt-5 max-w-[1038px] mx-auto'>There are a lot of interesting features that will boost your business up. We are the best CRM software company. Those features are going to make your work so easy and give you ultimate control over your business. Maintain your small or local business by using features are going to make your work so easy and give you ultimate control over your business. Maintain your small or local business by using SoftValley  CRM.</h3>



                <div className='mt-[100px]'>
                    {/* first  */}
                    <div className='lg:flex items-center gap-16'>
                        <div className='lg:w-1/2'>
                            <h1 className='text-[#0C0047] font-["Manrope"] font-bold text-[30px] leading-[48px] tracking-[0.005em]'>Fulfill Everyone’s Need</h1>

                            <p className='mt-2 text-[#191A15] font-["Manrope"] text-base leading-[30px] tracking-[0.05em]'>With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. These features include the following section:</p>

                            <div className='flex items-center justify-center lg:justify-start gap-4 mt-5 lg:mt-[30px]'>
                                <button className='flex gap-[10px] items-center justify-center bg-[#006CEC] border border-[#006CEC] hover:bg-white rounded-md text-white hover:text-[#006CEC] font-medium text-sm lg:text-base md:leading-[30px] md:tracking-[-0.02em] py-[12px] px-[17px] lg:px-[37px]'>More Details</button>

                                <button className='border border-[#006CEC] hover:bg-[#006CEC] rounded-md text-[#006CEC] hover:text-white font-medium text-base md:leading-[30px] md:tracking-[-0.02em] py-[10px] px-[47px] lg:px-[67px]'>Buy Now</button>
                            </div>
                        </div>
                        <div className='lg:w-1/2 mt-5 lg:mt-0'>
                            <img src={pic1} alt="" />
                        </div>
                    </div>

                    {/* second  */}
                    <div className='lg:flex flex-row-reverse items-center gap-16 my-[100px]'>
                        <div className='lg:w-1/2'>
                            <h1 className='text-[#0C0047] font-["Manrope"] font-bold text-[30px] leading-[48px] tracking-[0.005em]'>Versatile Platform</h1>

                            <p className='mt-2 text-[#191A15] font-["Manrope"] text-base leading-[30px] tracking-[0.05em]'>With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. These features include the following section:</p>

                            <div className='flex items-center justify-center lg:justify-start gap-4 mt-5 lg:mt-[30px]'>
                                <button className='flex gap-[10px] items-center justify-center bg-[#006CEC] border border-[#006CEC] hover:bg-white rounded-md text-white hover:text-[#006CEC] font-medium text-sm lg:text-base md:leading-[30px] md:tracking-[-0.02em] py-[12px] px-[17px] lg:px-[37px]'>More Details</button>

                                <button className='border border-[#006CEC] hover:bg-[#006CEC] rounded-md text-[#006CEC] hover:text-white font-medium text-base md:leading-[30px] md:tracking-[-0.02em] py-[10px] px-[47px] lg:px-[67px]'>Buy Now</button>
                            </div>
                        </div>
                        <div className='lg:w-1/2 mt-5 lg:mt-0'>
                            <img src={pic2} alt="" />
                        </div>
                    </div>

                    {/* third  */}
                    <div className='lg:flex items-center gap-16'>
                        <div className='lg:w-1/2'>
                            <h1 className='text-[#0C0047] font-["Manrope"] font-bold text-[30px] leading-[48px] tracking-[0.005em]'>Increase Productivity</h1>

                            <p className='mt-2 text-[#191A15] font-["Manrope"] text-base leading-[30px] tracking-[0.05em]'>With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. These features include the following section:</p>

                            <div className='flex items-center justify-center lg:justify-start gap-4 mt-5 lg:mt-[30px]'>
                                <button className='flex gap-[10px] items-center justify-center bg-[#006CEC] border border-[#006CEC] hover:bg-white rounded-md text-white hover:text-[#006CEC] font-medium text-sm lg:text-base md:leading-[30px] md:tracking-[-0.02em] py-[12px] px-[17px] lg:px-[37px]'>More Details</button>

                                <button className='border border-[#006CEC] hover:bg-[#006CEC] rounded-md text-[#006CEC] hover:text-white font-medium text-base md:leading-[30px] md:tracking-[-0.02em] py-[10px] px-[47px] lg:px-[67px]'>Buy Now</button>
                            </div>
                        </div>
                        <div className='lg:w-1/2 mt-5 lg:mt-0'>
                            <img src={pic3} alt="" />
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default WhoCanBenifit;