import React from 'react';
import pic1 from '../../../Assets/images/crmBenifits/Picture1.png';
import pic2 from '../../../Assets/images/crmBenifits/Picture2.png';
import pic3 from '../../../Assets/images/crmBenifits/Picture3.png';
import pic4 from '../../../Assets/images/crmBenifits/Picture4.png';
import pic5 from '../../../Assets/images/crmBenifits/Picture5.png';
import pic6 from '../../../Assets/images/crmBenifits/Picture6.png';
import pic7 from '../../../Assets/images/crmBenifits/Picture7.png';
import pic8 from '../../../Assets/images/crmBenifits/Picture8.png';
import './BenifitsOfOurCrmSoft.css';
import { FiArrowRight } from 'react-icons/fi';

const BenifitsOfOurCrmSoft = () => {
    const benifits = [
        {
            id: 1,
            pic: pic1,
            title: 'Lead Monitoring',
            description: 'It has a fully-integrated Lead Management system. Fully illustrated Lead information, lead status, Lead information. You will also get a notification before running out any Lead.',
            cardColor: 'bg-[#E8E4FF]',
            hoverCardColor: 'hover:bg-[#A798FF]',
        },
        {
            id: 2,
            pic: pic2,
            title: 'Make Better Decision',
            description: 'Get a complete Graphical view of your business—from lead, Purchase, expense and Customer Service with reliable reports. You can make a better decision about the future of your business.',
            cardColor: 'bg-[#D9FFE0]',
            hoverCardColor: 'hover:bg-[#7EAF87]',
        },
        {
            id: 3,
            pic: pic3,
            title: 'Remote Access',
            description: 'You can control your business from anywhere in the world with an internet connection. To get remote access you can use our android app or you can directly access your sales ERP software from a browser.',
            cardColor: 'bg-[#FFF0F1]',
            hoverCardColor: 'hover:bg-[#FFA4AA]',
        },
        {
            id: 4,
            pic: pic4,
            title: 'Comfortable System',
            description: 'It has a fully-integrated Lead Management system. Fully illustrated Lead information, lead status, Lead information. You will also get a notification before running out any Lead.',
            cardColor: 'bg-[#DBF5FF]',
            hoverCardColor: 'hover:bg-[#43CBFF]',
        },
        {
            id: 5,
            pic: pic5,
            title: 'Bulk Data insert',
            description: 'It has a fully-integrated Lead Management system. Fully illustrated Lead information, lead status, Lead information. You will also get a notification before running out any Lead.',
            cardColor: 'bg-[#FFE7D6]',
            hoverCardColor: 'hover:bg-[#FF8D3E]',
        },
        {
            id: 6,
            pic: pic6,
            title: 'Spectacular Dashboard',
            description: 'It has a fully-integrated Lead Management system. Fully illustrated Lead information, lead status, Lead information. You will also get a notification before running out any Lead.',
            cardColor: 'bg-[#DAECFF]',
            hoverCardColor: 'hover:bg-[#8EC5FF]',
        },
        {
            id: 7,
            pic: pic7,
            title: 'Data backup',
            description: 'It has a fully-integrated Lead Management system. Fully illustrated Lead information, lead status, Lead information. You will also get a notification before running out any Lead.',
            cardColor: 'bg-[#E1FCFF]',
            hoverCardColor: 'hover:bg-[#49ECFF]',
        },
        {
            id: 8,
            pic: pic8,
            title: '100% Data Security',
            description: 'It has a fully-integrated Lead Management system. Fully illustrated Lead information, lead status, Lead information. You will also get a notification before running out any Lead.',
            cardColor: 'bg-[#FFDAE8]',
            hoverCardColor: 'hover:bg-[#FF4288]',
        },
    ]

    return (
        <section className='max-w-[1282px] mx-auto px-5 lg:px-0 mt-10 lg:mt-[90px]'>
            <h1 className='font-["Manrope"] font-extrabold text-2xl lg:text-[40px] text-[#0C0047] lg:leading-[55px] tracking-[0.005em] text-center'>Benifits Of Our <span className='text-[#F15524]'>CRM Software</span></h1>
            <h3 className='font-["Manrope"] text-xs md:text-base md:leading-8 tracking-[0.5px] text-[#584F49] text-center mt-5 max-w-[1038px] mx-auto'>There are a lot of interesting features that will boost your business up. We are the best CRM software company. Those features are going to make your work so easy and give you ultimate control over your business. Maintain your small or local business by using SoftValley sales ERP.</h3>

            <div className=' grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[40px] mt-10'>
                {
                    benifits?.map(data =>
                        <div key={data.id}>
                            <div className='h-full'>
                                <div
                                    className={`cursor-pointer ease-in duration-300 flex flex-col items-center justify-center text-center px-3 py-3 md:px-[20px] md:py-[50px] rounded-lg h-full md:h-[300px] xl:w-[275px] ${data.cardColor} group hvr-sweep-to-right `}
                                >
                                    <img className='w-[68px] h-[64px] ease-in duration-300' src={data.pic} alt="" />
                                    <h2 className='font-["Manrope"] font-bold text-base md:text-xl text-[#0C0047] my-[15px] md:leading-[27px]'>{data.title}</h2>
                                    <p className='font-["Manrope"] font-normal text-xs  text-[#64607D] md:leading-[15px] '>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='flex items-center justify-center mt-10 md:mt-16'>
                <button className='flex items-center  font-["Poppins"] font-medium text-base text-white hover:text-[#006CEC] bg-[#006CEC] hover:bg-white border hover:border-[#006CEC] rounded-[7px] py-[10px] md:py-[13px] px-10 md:px-[70px]'>More Feature <FiArrowRight className='h-6 w-6 ml-2'></FiArrowRight></button>
            </div>
        </section>
    );
};

export default BenifitsOfOurCrmSoft;