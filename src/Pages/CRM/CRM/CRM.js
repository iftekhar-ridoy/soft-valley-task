import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import ManageYourBusiness from '../../Home/ManageYourBusiness/ManageYourBusiness';
import Contact from '../../Shared/Contact/Contact';
import Faq from '../../Shared/Faq/Faq';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Testimonial from '../../Shared/Testimonial/Testimonial';
import Video from '../../Shared/Video/Video';
import WhyChooseUs from '../../Shared/WhyChooseUs/WhyChooseUs';
import BannerCRM from '../BannerCRM/BannerCRM';
import BenifitsOfOurCrmSoft from '../BenifitsOfOurCrmSoft/BenifitsOfOurCrmSoft';
import WhoCanBenifit from '../WhoCanBenifit/WhoCanBenifit';
import WhyYouShouldGetOurCrm from '../WhyYouShouldGetOurCrm/WhyYouShouldGetOurCrm';


const CRM = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BannerCRM></BannerCRM>
            <BenifitsOfOurCrmSoft></BenifitsOfOurCrmSoft>
            <WhyYouShouldGetOurCrm></WhyYouShouldGetOurCrm>
            <WhoCanBenifit></WhoCanBenifit>
            <ManageYourBusiness></ManageYourBusiness>
            <WhyChooseUs></WhyChooseUs>
            <Video></Video>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Contact></Contact>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default CRM;