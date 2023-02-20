import React from 'react';
import bannerBg from '../../../Assets/background/bannerBG.png';
import bannerImage from '../../../Assets/images/servicesBanner/servicesBannerImage.png';
import pic1 from '../../../Assets/images/servicesBanner/picture1.png';
import pic2 from '../../../Assets/images/servicesBanner/Picture2.png';
import pic3 from '../../../Assets/images/servicesBanner/Picture3.png';
import pic4 from '../../../Assets/images/servicesBanner/Picture4.png';
import pic5 from '../../../Assets/images/servicesBanner/Picture5.png';
import pic6 from '../../../Assets/images/servicesBanner/Picture6.png';
import pic7 from '../../../Assets/images/servicesBanner/Picture7.png';
import pic8 from '../../../Assets/images/servicesBanner/Picture8.png';
import { FaArrowRight } from 'react-icons/fa';
import whatsappIco from '../../../Assets/icon/whatsapp.png';
import messengerIco from '../../../Assets/icon/messenger.png';

const BannerServices = () => {
    const cards = [
        {
            id: 1,
            image: pic1,
            title: 'Software Development'
        },
        {
            id: 2,
            image: pic2,
            title: 'WEB Development'
        },
        {
            id: 3,
            image: pic3,
            title: 'APP Development'
        },
        {
            id: 4,
            image: pic4,
            title: 'UI/UX Design'
        },
        {
            id: 5,
            image: pic5,
            title: 'E-commerce & Corporate Solution'
        },
        {
            id: 6,
            image: pic6,
            title: 'Digital Marketing'
        },
        {
            id: 7,
            image: pic7,
            title: 'Cloud Devops'
        },
        {
            id: 8,
            image: pic8,
            title: 'AI/ML'
        },
    ]
    return (
        <section
        // style=
        // {{
        //     backgroundImage: `url(${bannerBg})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "contain",
        //     height: 718,
        //     width: "100%",
        //     // position: "relative",
        //     marginBottom: "-80px"
        // }}
        >

            <div className='mx-5 xl:mx-[120px] md:pt-12 bg-white rounded-b-[20px] shadow-2xl flex items-center py-7 lg:px-[60px]'>
                <div className='lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:px-2'>
                    {
                        cards?.map(card =>
                            <div key={card.id} className='bg-[#F7F7FB] rounded-[14px] flex items-center m-2 py-3 px-3 lg:px-6 '>
                                <div className='h-[70px] w-[70px] bg-white rounded-[15px] flex items-center justify-center mr-3'>
                                    <img className='h-10 w-10' src={card.image} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-base md:text-lg font-medium text-[#170F49] leading-[20px]'>{card.title}</h2>
                                    <span className='flex items-center gap-1 text-[#6F6C90] text-base leading-[20px]'>Browse <FaArrowRight className='text-xs'></FaArrowRight></span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='hidden lg:block lg:w-1/3'>
                    <img className='p-1' src={bannerImage} alt="" />
                </div>
            </div>

            {/* social btn  */}
            <div className='absolute top-[230px] lg:top-[290px] right-2 lg:right-5'>
                <div><img className='w-11 h-11 cursor-pointer hover:scale-110 mb-3' src={whatsappIco} alt="" /></div>
                <div><img className='w-11 h-11 cursor-pointer hover:scale-110' src={messengerIco} alt="" /></div>
            </div>

            {/* backgroundImage  */}
            <div>
                <img className='absolute top-0 z-[-1] h-[650px]' src={bannerBg} alt="" />
            </div>
        </section>
    );
};

export default BannerServices;