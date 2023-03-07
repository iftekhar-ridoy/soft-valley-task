import React from 'react';
import footerBG from '../../../Assets/background/footer.png';
import logo from '../../../Assets/logo/logo.png';
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { CgMail } from 'react-icons/cg';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className='relative'>
            <img className='md:hidden w-full' src={footerBG} alt="" />

            <div className='w-full absolute -mt-5 md:mt-[400px] text-white font-["Manrope"] bg-[#3734A9]'>
                <div className='w-full px-5 xl:px-[120px] flex flex-col md:flex-row justify-between'>

                    {/* left part  */}
                    <div className='-mt-4 lg:-mt-[60px]'>
                        {/* logo */}
                        <div className='bg-white max-w-[229px] px-5 py-[20px] rounded-md mb-4 md:mb-6'>
                            <img className='w-[189px]' src={logo} alt="" />
                        </div>

                        {/* small dercription */}
                        <p className='font-["Manrope"] text-base leading-[28px] tracking-[-0.02em] '>Finance helps companies <br /> manage payments easily.</p>

                        {/* social links */}
                        <div className='flex items-center gap-4 mt-6 md:mt-10'>
                            <a href='https://www.facebook.com/softvalley.net'
                                target='_blank' rel="noopener noreferrer">
                                <FaFacebookF className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-[#F15524]'></FaFacebookF>
                            </a>
                            <a href='https://www.facebook.com/softvalley.net'
                                target='_blank' rel="noopener noreferrer">
                                <FaTwitter className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-[#F15524]'></FaTwitter>
                            </a>
                            <a href='https://www.facebook.com/softvalley.net'
                                target='_blank' rel="noopener noreferrer">
                                <FaInstagramSquare className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-[#F15524]'></FaInstagramSquare>
                            </a>
                            <a href='https://www.facebook.com/softvalley.net'
                                target='_blank' rel="noopener noreferrer">
                                <FaLinkedinIn className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-[#F15524]'></FaLinkedinIn>
                            </a>
                            <a href='https://www.facebook.com/softvalley.net'
                                target='_blank' rel="noopener noreferrer">
                                <FaYoutube className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-[#F15524]'></FaYoutube>
                            </a>
                        </div>
                    </div>

                    {/* middle part  */}
                    <div className='flex flex-col md:flex-row gap-2 lg:gap-20 mt-6 md:mt-0'>
                        {/* <div className='w-full border border-dashed border-b-1 border-white m-0 p-0 md:hidden'></div> */}

                        {/* compnay  */}
                        <div>
                            <h3 className='text-[21px] font-bold leading-[24px] mb-6'>Company</h3>
                            <ul className=''>
                                <li className='text-base leading-[24px] mb-[18px]'>About Us</li>
                                <li className='text-base leading-[24px] mb-[18px]'>Careers</li>
                                <li className='text-base leading-[24px] mb-[18px]'>Blog</li>
                                <li className='text-base leading-[24px]'>Pricing</li>
                            </ul>
                        </div>
                        {/* <div className='w-full border border-dashed border-b-1 border-white m-0 p-0 md:hidden'></div> */}

                        {/* product  */}
                        <div>
                            <h3 className='mt-6 md:mt-0 text-[21px] font-bold leading-[24px] mb-6'>Product</h3>
                            <ul>
                                <li className='text-base leading-[24px] mb-[18px]'>Invoicing</li>
                                <li className='text-base leading-[24px] mb-[18px]'>Contact</li>
                                <li className='text-base leading-[24px] mb-[18px]'>Accounting</li>
                                <li className='text-base leading-[24px]'>Proposal</li>
                            </ul>
                        </div>
                        {/* <div className='w-full border border-dashed border-b-1 border-white m-0 p-0 md:hidden'></div> */}

                        {/* Resources  */}
                        <div>
                            <h3 className='mt-6 md:mt-0 text-[21px] font-bold leading-[24px] mb-6'>Resources</h3>
                            <ul>
                                <li className='text-base leading-[24px] mb-[18px]'>Proposal Template</li>
                                <li className='text-base leading-[24px] mb-[18px]'>Invoice Template</li>
                                <li className='text-base leading-[24px] mb-[18px]'>Tutorial</li>
                                <li className='text-base leading-[24px]'>How to write a contract</li>
                            </ul>
                        </div>
                        {/* <div className='w-full border border-dashed border-b-1 border-white m-0 mb-2 p-0 md:hidden'></div> */}
                    </div>

                    {/* right part  */}
                    <div className='flex flex-col'>
                        <h1 className='mt-6 md:mt-0 text-[21px] font-bold leading-[24px] mb-6'>Contact Us</h1>
                        <p className='text-base leading-[24px] mb-[18px] flex items-center gap-1'>
                            <CgMail className='w-[22px] h-[22px]'></CgMail>
                            <span>info@softvalley.net</span>
                        </p>
                        <p className='text-base leading-[24px] mb-[18px] flex items-center gap-1'>
                            <MdOutlineWifiCalling3 className='w-[22px] h-[22px]'></MdOutlineWifiCalling3>
                            <span>+8801718-78-3541</span>
                        </p>
                        <p className='text-base leading-[24px] mb-[18px] flex items-center gap-1'>
                            <HiOutlineLocationMarker className='w-[22px] h-[22px]'></HiOutlineLocationMarker>
                            <span>House#45(level-5), Road#27, <br /> Block #A, Banani, Dhaka 1213.</span>
                        </p>
                    </div>
                </div>
                <div className='md:mt-[60px]'>
                    <div className='w-full border border-b-[0px] border-slate-500 absolute '></div>
                    <div className='text-center py-3 lg:py-[22px] text-base'><span>Copyright © 2023 Soft Valley.</span></div>
                </div>
            </div>
            <img className='absolute md:h-[727px] z-[-1] w-full hidden md:block' src={footerBG} alt="" />
        </footer>
    );
};

export default Footer;