import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BannerCRM from '../BannerCRM/BannerCRM';
import BenifitsOfOurCrmSoft from '../BenifitsOfOurCrmSoft/BenifitsOfOurCrmSoft';
import WhyYouShouldGetOurCrm from '../WhyYouShouldGetOurCrm/WhyYouShouldGetOurCrm';


const CRM = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BannerCRM></BannerCRM>
            <BenifitsOfOurCrmSoft></BenifitsOfOurCrmSoft>
            <WhyYouShouldGetOurCrm></WhyYouShouldGetOurCrm>
        </div>
    );
};

export default CRM;