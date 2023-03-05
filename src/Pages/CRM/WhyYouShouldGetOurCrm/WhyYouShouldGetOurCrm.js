import React from 'react';
import bg from '../../../Assets/background/Picture10.png';
import img from '../../../Assets/images/crmBanner/Picture9.png';

const WhyYouShouldGetOurCrm = () => {
    return (
        <section className='relative'>
            <div className='flex w-full max-w-[1282px] mx-auto mt-14 lg:mt-[76px] px-5 lg:px-0'>
                <div>
                    <h1>Why you should get our</h1>
                    <h2>CRM software?</h2>
                    <p>With the CRM module, you can boost your sales. To build up a long-term business CRM can play a vital role. Sales ERP software has an enhanced CRM system to communicate with customers and keep track of every single purchase of a customer. These features include the following section:</p>
                    <div>
                        <li>Simplified Order Process</li>
                        <li>Use Just One Platform</li>
                        <li>Investment Report Every Month</li>
                        <li>Multiple Payment Method</li>
                        <li>Online Transection</li>
                        <li>Investment Report Every Month</li>
                        <li>Complete Solution</li>
                        <li>Use Just One Platform</li>
                        <li>Investment Report Every Month</li>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            <img className='w-[642px] absolute right-0 top-0' src={bg} alt="" />
        </section>
    );
};

export default WhyYouShouldGetOurCrm;