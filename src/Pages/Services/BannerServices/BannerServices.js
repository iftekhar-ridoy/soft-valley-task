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
import { Link } from 'react-router-dom';


const BannerServices = () => {
    const cards = [
        {
            id: 1,
            image: pic1,
            title: 'Software Development',
            path: '/'
        },
        {
            id: 2,
            image: pic2,
            title: 'WEB Development',
            path: '/'
        },
        {
            id: 3,
            image: pic3,
            title: 'APP Development',
            path: '/'
        },
        {
            id: 4,
            image: pic4,
            title: 'UI/UX Design',
            path: '/'
        },
        {
            id: 5,
            image: pic5,
            title: 'E-commerce & Corporate Solution',
            path: '/'
        },
        {
            id: 6,
            image: pic6,
            title: 'Digital Marketing',
            path: '/'
        },
        {
            id: 7,
            image: pic7,
            title: 'Cloud Devops',
            path: '/'
        },
        {
            id: 8,
            image: pic8,
            title: 'AI/ML',
            path: '/'
        },
    ]
    return (
        <section>
            <div className='px-5 lg:mx-[40px] 2xl:mx-[158px] md:pt-12 bg-white rounded-b-[20px] shadow-2xl flex items-center justify-center gap-3 py-7 2xl:-mb-[75px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 2xl:px-2 gap-3'>
                    {
                        cards?.map(card =>
                            <Link to={`${card.path}`} key={card.id}>
                                <div className='bg-[#F7F7FB] hover:bg-[#dfdfff] cursor-pointer rounded-[14px] flex items-center m-2 py-3 2xl:py-5 px-3 2xl:px-6 '>
                                    <div className='h-[70px] w-[70px] bg-white rounded-[15px] flex items-center justify-center mr-3'>
                                        <img className='h-10 w-10' src={card.image} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-base md:text-lg font-medium text-[#170F49] leading-[20px]'>{card.title}</h2>
                                        <span className='flex items-center gap-1 text-[#6F6C90] text-base leading-[20px]'>Browse <FaArrowRight className='text-xs'></FaArrowRight></span>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
                <div className='hidden lg:block'>
                    <img className='p-1 lg:w-[410px] 2xl:w-[470px]' src={bannerImage} alt="" />
                </div>
            </div>

            {/* backgroundImage  */}
            <div>
                <img className='absolute top-0 z-[-1] h-[700px] 2xl:h-[788px]  w-full max-w-[1920px]' src={bannerBg} alt="" />
            </div>
        </section>
    );
};

export default BannerServices;