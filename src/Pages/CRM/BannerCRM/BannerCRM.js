import React from 'react';
import sideBG from '../../../Assets/background/crmBannerSideBG.png';
import pic1 from '../../../Assets/images/crmBanner/Picture1.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import './BannerCRM.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";

const BannerCRM = () => {

    const bannerIMG = [
        {
            id: 1,
            pic: pic1
        },
        {
            id: 2,
            pic: pic1
        },
        {
            id: 3,
            pic: pic1
        },
    ]

    return (
        <section className='relative'>
            <div className='max-w-[1282px] mx-auto px-5 lg:px-0 pt-5 lg:pt-[100px] flex flex-col lg:flex-row'>
                {/* left side  */}
                <div className='lg:w-1/2'>
                    <p className='font-["Poppins"] font-bold text-xl lg:text-2xl xl:text-[40px] text-[#0C0047] xl:leading-[46px] lg:tracking-[0.02em] text-center lg:text-start'>
                        Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0D6EFD] to-[#6803A6]'>CRM Software</span> is <br />
                        the Best CRM Software <br />
                        with <span className='text-[#F15524]'>Mobile App.</span>
                    </p>

                    <p className='font-["Nunito"] font-normal text-xs md:text-sm lg:text-base text-[#1E1E1E] w-full max-w-[524px] mt-[10px] lg:mt-[30px] md:leading-[22px]'>Lorem ipsum dolor sit amet consectetur. Justo fusce eu vitae ultrices vulputate placerat nisl volutpat. Id at in laoreet nibh leo mauris. At turpis adipiscing risus nec id est eget. Etiam viverra ornare ullamcorper cum.Lorem ipsum dolor sit amet consectetur. Justo fusce eu vitae ultrices vulputate placerat nisl volutpat. Id at in laoreet nibh leo mauris. At turpis adipiscing risus nec id est eget. Etiam viverra ornare ullamcorper cum.</p>

                    <div className='flex items-center justify-center gap-4 mt-5 lg:mt-[30px]'>
                        <button className='flex gap-[10px] items-center justify-center bg-[#006CEC] border hover:border-[#006CEC] hover:bg-white rounded-md text-white hover:text-[#006CEC] font-medium text-sm lg:text-base md:leading-[30px] md:tracking-[-0.02em] py-[10px] px-[17px] lg:px-[37px]'><BsFillPlayCircleFill className='h-6 w-6'></BsFillPlayCircleFill> Watch Demo</button>

                        <button className='border border-[#006CEC] hover:bg-[#006CEC] rounded-md text-[#006CEC] hover:text-white font-medium text-base md:leading-[30px] md:tracking-[-0.02em] py-[10px] px-[47px] lg:px-[67px]'>Buy Now</button>
                    </div>
                </div>

                {/* right side  */}
                <div className='lg:w-1/2 mt-10 lg:mt-0'>
                    <figure>
                        <Swiper
                            className="crmSwiper h-[250px] lg:h-[450px] -mt-4"
                            slidesPerView={1}
                            spaceBetween={30}

                            freeMode={true}

                            pagination={{
                                clickable: true,
                            }}

                            loop={true}
                            // loopFillGroupWithBlank={true}
                            // navigation={true}

                            autoplay={{
                                delay: 3000
                            }}

                            modules={[FreeMode, Pagination, Autoplay, Navigation]}
                        >
                            <>
                                {
                                    bannerIMG.length &&
                                    <>
                                        <div>
                                            {
                                                bannerIMG?.map((img) => (
                                                    <SwiperSlide key={img.id}>
                                                        <img className='scale-105' src={img.pic} alt="" />
                                                    </SwiperSlide>
                                                ))}
                                        </div>
                                    </>

                                }
                            </>

                        </Swiper>
                    </figure>
                </div>
            </div>
            <img className='lg:w-[600px] lg:h-[546px] absolute lg:right-0 top-[-60px] -z-30 hidden lg:block' src={sideBG} alt="" />
        </section>
    );
};

export default BannerCRM;