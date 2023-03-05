import React from 'react';

const Contact = () => {
    return (
        <section className='max-w-[1281px] mx-auto px-5 xl:px-0 mt-20 lg:mt-[150px]'>
            <div className='flex flex-col lg:flex-row justify-center'>

                <div className='font-["Manrope"] w-full lg:w-1/2'>
                    <div className='lg:max-w-[487px]'>
                        <h1 className='text-[#0C0047] text-[20px] lg:text-[40px] lg:leading-[60px] font-extrabold text-center lg:text-start'>Get in <span className='text-[#F15524]'>Touch</span> With Us to Meet Your Business Goal.</h1>
                        <p className='text-xs md:text-[15px] text-[#584F49] lg:leading-[28px] tracking-[0.05em] mt-5 '>Get in touch with us for any kind of help. We are here to give you the best Pricing and also here to help you to find your Domain.Get in touch with us for any kind of help. We are here to give you the best Pricing and also here to help you to find your Domain.</p>
                    </div>
                </div>


                <div className='w-full lg:w-1/2 flex flex-col lg:items-end mt-5 lg:mt-0'>
                    <div className='w-full max-w-[564px] shadow-[0px_80px_85px_rgba(153,171,219,0.2)] p-3 lg:p-12 rounded-[5px] lg:rounded-[20px] border border-[#FA9483]'>
                        <form>
                            <div>
                                <input type="text" placeholder='First Name'
                                    className="w-full lg:max-w-[484px] py-[17px]  mx-auto outline-none  px-5 border border-solid border-[#CFCFCF] text-sm md:text-[16px] text-[#584F49] font-['Manrope'] placeholder-[#584F49] md:leading-[26px] rounded-[5px]"
                                />
                            </div>
                            <div className='mt-5'>
                                <input type="text" placeholder='Last Name'
                                    className="w-full lg:max-w-[484px] py-[17px]  mx-auto outline-none  px-5 border border-solid border-[#CFCFCF] text-sm md:text-[16px] text-[#584F49] font-['Manrope'] placeholder-[#584F49] md:leading-[26px] rounded-[5px]"
                                />
                            </div>
                            <div className='mt-5'>
                                <input type="email" placeholder='Email Address'
                                    className="w-full lg:max-w-[484px] py-[17px]  mx-auto outline-none  px-5 border border-solid border-[#CFCFCF] text-sm md:text-[16px] text-[#584F49] font-['Manrope'] placeholder-[#584F49] md:leading-[26px] rounded-[5px]"
                                />
                            </div>
                            <div className='mt-5'>
                                <textarea
                                    className="form-control block w-full lg:max-w-[484px]  px-5 py-[17px] text-sm md:text-base font-normal text-[#584F49] placeholder-[#584F49] font-['Manrope'] border border-solid border-[#CFCFCF] rounded-[5px] transition ease-in-out m-0 focus:outline-none h-[165px]"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Message"
                                ></textarea>

                            </div>
                            <div className='mt-5 flex items-center'>
                                <input type="checkbox" name="" id="" />
                                <p className='text-[#584F49] text-xs md:text-[16px] leading-[26px] font-["Manrope"] ml-3'>by clicking here you agree to our <span className='text-[#3734A9]'>terms and policy</span>.</p>
                            </div>
                        </form>
                        <div>
                            <button className='font-["Poppins"] text-sm font-semibold text-white bg-[#006CEC] px-[24px] py-3 lg:py-[16px] shadow-md rounded-[4px] lg:leading-[24px] mt-5'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;