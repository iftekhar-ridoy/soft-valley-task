import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import customerCare from '../../../Assets/icon/affiliate-suppport-desktop 1.png';

const Info = () => {
    return (
        <section className='max-w-[1282px] mx-auto px-5 lg:px-0  mt-5 lg:mt-[90px]'>
            <div className='lg:flex lg:justify-between'>
                {/* left side  */}
                <div>
                    <h1 className='text-[#0C0047] text-[35px] text-["Poppins"] font-semibold leading-[62px] tracking-[0.02em]'>Contact</h1>

                    <p className='text-[#1E1E1E] text-base font-["Nunito"] leading-[22px] font-normal mt-5 max-w-[800px]'>Lorem ipsum dolor sit amet consectetur. Justo fusce eu vitae ultrices vulputate placerat nisl volutpat. Id at in laoreet nibh leo mauris. At turpis adipiscing risus nec id est eget. Etiam viverra ornare ullamcorper cum.Lorem ipsum dolor sit amet consectetur. Justo fusce eu vitae ultrices vulputate placerat nisl volutpat. Id at in laoreet nibh leo mauris. At turpis adipiscing risus nec id est eget. Etiam viverra ornare ullamcorper cum.</p>

                    <div className='flex justify-center'>
                        <div className='mt-10'>
                            <iframe
                                className='w-[350px] lg:w-[800px] h-[200px] lg:h-[393px] rounded-[10px]'
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14602.423628206654!2d90.40441800000002!3d23.797044!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1678097223843!5m2!1sen!2sbd"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* right side  */}
                <div className='lg:w-[393px] mt-10 lg:mt-[30px] border border-[#006CEC80]  rounded-[20px] px-5 py-8'>
                    <h2 className='underline text-[#354895] font-semibold text-lg leading-[25px] font-["Poppins"]'>Contact with us:</h2>
                    <p className='font-["Poppins"] mt-6 leading-[30px]'>
                        <span className='font-medium'>Call us: </span> +8801718-78-3541 <span className='font-medium'> (9AM - 6PM)</span>
                    </p>
                    <p className='font-medium font-["Poppins"] text-lg  leading-[30px]'>SMS: Softvalley to 2525</p>
                    <p className='font-medium font-["Poppins"] text-lg  leading-[30px]'>E-mail: <span className='text-[#006CEC] font-normal'> info@softvalley.net</span></p>


                    <h2 className='underline text-lg mt-10 font-medium leading-[30px]'>Phone:</h2>
                    <p className='text-lg font-medium leading-[30px]'>+8801718-78-3541</p>
                    <p className='text-lg font-medium leading-[30px]'>+8801718-78-3541</p>
                    <p className='text-lg font-medium leading-[30px]'>+8801718-78-3541</p>
                    <p className='text-lg font-medium leading-[30px]'>+8801718-78-3541</p>


                    <p className='text-lg font-medium leading-[30px] mt-10'>Office Visit Time</p>
                    <p className='text-lg font-medium leading-[30px]'>Sunday - Thursday 9 am to 6 pm</p>

                    <div className='flex gap-5 mt-10'>
                        <a href='https://www.facebook.com/softvalley.net'
                            target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-[#354895] text-white flex items-center rounded-full justify-center'>
                            <FaFacebookF className='h-5 w-5 cursor-pointer'></FaFacebookF>
                        </a>
                        <a href='https://www.facebook.com/softvalley.net'
                            target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-[#1590D8] text-white flex items-center rounded-full justify-center'>
                            <FaTwitter className='h-5 w-5 cursor-pointer'></FaTwitter>
                        </a>
                        <a href='https://www.facebook.com/softvalley.net'
                            target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-[#D0021B] text-white flex items-center rounded-full justify-center'>
                            <FaYoutube className='h-5 w-5 cursor-pointer'></FaYoutube>
                        </a>
                    </div>
                </div>
            </div>



            <div className='mt-10 lg:mt-[150px] border border-[#F1552480] p-2 lg:p-10 rounded-[20px]'>
                <div className='lg:flex justify-between items-center'>
                    {/* left  */}
                    <div className='flex gap-5'>
                        <img src={customerCare} className='w-20 h-20 lg:w-[126px] lg:h-[132px]' alt="" />
                        <div>
                            <p className='font-semibold text-xl lg:text-[28px] font-["Poppins"] lg:leading-[42px]'>Be with Us to Wheel Up Your Revenue</p>
                            <p className='font-normal text-sm lg:text-base lg:leading-[24px] py-5'>We are always ready to serve you. Please share your ideas and values with us.</p>
                            <p className='font-normal text-sm lg:text-base lg:leading-[24px]'>Sunday - Thursday 9 am to 6 pm</p>
                        </div>
                    </div>

                    {/* right  */}
                    <div className='mt-5 lg:mt
                    '>
                        <div className='flex items-center justify-center'>
                            <button className='flex gap-[5px] items-center border border-[#006CEC] hover:text-[#006CEC] text-lg font-semibold px-5 py-2 rounded-md bg-[#006CEC] hover:bg-white text-white leading-[29px]'><BsTelephone className='w-[32px] h-[32px]'></BsTelephone> 098-543000000</button>
                        </div>
                        <p className='text-[#696969] font-light leading-[22px] text-[15px] mt-5 text-center'>* Normal call rate from any number *</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;