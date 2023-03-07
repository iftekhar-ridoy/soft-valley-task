import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.png';
import { MdPhoneCallback } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);


    let activeStyle = {
        // textDecoration: "underline",
        color: "#F15524",
        fontWeight: 600,
    };


    const menuItems =
        <ul className='flex flex-col md:flex-row gap-5 lg:gap-[35px] text-xs lg:text-base font-medium md:leading-[24px] text-[#0C0047]'>

            {/* home  */}
            <li>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Home
                </NavLink>
            </li>


            {/* products */}
            <li className="rounded inline-flex items-center">
                <NavLink
                    to="messages"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Products
                </NavLink>
                <svg className="fill-current h-5 w-5 ml-1 text-[#BDBDBD]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
            </li>


            {/* services */}
            <div className='dropdown'>
                <li className="rounded inline-flex items-center">
                    <NavLink
                        to="/services"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Services
                    </NavLink>
                    <svg className="fill-current h-5 w-5 ml-1 text-[#BDBDBD]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </li>
            </div>


            {/* about  */}
            <li>
                <NavLink
                    to="/about"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    About
                </NavLink>
            </li>


            {/* contact  */}
            <li>
                <NavLink
                    to="/contact"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Contact
                </NavLink>
            </li>
        </ul >

    return (
        <nav className="sticky top-0 z-30 w-full bg-[#FFFAFA] px-5 lg:px-10 2xl:px-[158px] border-b-[0.07px] border-[#EAEAEA] font-['Poppins'] py-5" >
            <div className="justify-between mx-auto  items-center md:flex">
                <div>
                    <div className="flex items-center justify-between md:block">
                        <div>
                            <Link to='/'><img className='w-[180px] md:w-[226px]' src={logo} alt="" /></Link>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {
                                    navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {menuItems}
                            <button className='flex gap-[5px] items-center border border-[#006CEC] text-[#006CEC] text-xs lg:text-sm font-medium px-5 py-2 rounded-md hover:bg-[#006CEC] hover:text-white md:hidden'><MdPhoneCallback className='w-6 h-6'></MdPhoneCallback> Make a call</button>
                        </ul>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <button className='flex gap-[5px] items-center border border-[#006CEC] text-[#006CEC] text-xs lg:text-sm font-medium px-5 py-2 rounded-md hover:bg-[#006CEC] hover:text-white'><MdPhoneCallback className='w-6 h-6'></MdPhoneCallback> Make a call</button>
                </div>
            </div>
        </nav >
    );

};

export default Navbar;