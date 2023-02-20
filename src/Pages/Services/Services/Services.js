import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import Companies from '../../Shared/Companies/Companies';
import Contact from '../../Shared/Contact/Contact';
import Faq from '../../Shared/Faq/Faq';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Process from '../../Shared/Process/Process';
import Products from '../../Shared/Products/Products';
import Testimonial from '../../Shared/Testimonial/Testimonial';
import Video from '../../Shared/Video/Video';
import WhyChooseUs from '../../Shared/WhyChooseUs/WhyChooseUs';
import BannerServices from '../BannerServices/BannerServices';
import ManageYourBusinessService from '../ManageYourBusinessService/ManageYourBusinessService';

const Services = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BannerServices></BannerServices>
            <Companies></Companies>
            <Products></Products>
            <Process></Process>
            <ManageYourBusinessService></ManageYourBusinessService>
            <WhyChooseUs></WhyChooseUs>
            <Video></Video>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Contact></Contact>
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default Services;