import React from 'react';
import person1 from '../../../Assets/images/testimonial/Picture1.png';
import person2 from '../../../Assets/images/testimonial/Picture2.png';
import person3 from '../../../Assets/images/testimonial/Picture3.png';
import qoutation from '../../../Assets/images/testimonial/qoutation.png';
import './Testimonial.css';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";


const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            image: person1,
            name: "Masud Rana",
            profession: "UI/UX Designer",
            description: "Lorem ipsum dolor sit amet consectetur. Enim ue feentum ornare sagittis rutrum lectus lorem. Nec lorem netus ullmcorper magna orare neq met maeced tesque. Neque ltus fucibus nec morbi sed. Tincint quis tes libero morb berNe e dictum lorem nulla arcu pretium. Nibh egestas  faucibus vel id. Pellentesque commodo digsim nulla non et. Velit diam orci quis ut egt vulputte odio. Velit diam orci quis ut egt vulputate odio.quis ut egt vulputte odio. Velit diam orci quis ut egt vulputate odio."
        },
        {
            id: 2,
            image: person2,
            name: "Tushar Khan",
            profession: "UI/UX Designer",
            description: "Lorem ipsum dolor sit amet consectetur. Enim ue feentum ornare sagittis rutrum lectus lorem. Nec lorem netus ullmcorper magna orare neq met maeced tesque. Neque ltus fucibus nec morbi sed. Tincint quis tes libero morb berNe e dictum lorem nulla arcu pretium. Nibh egestas  faucibus vel id. Pellentesque commodo digsim nulla non et. Velit diam orci quis ut egt vulputte odio. Velit diam orci quis ut egt vulputate odio.quis ut egt vulputte odio. Velit diam orci quis ut egt vulputate odio."
        },
        {
            id: 3,
            image: person3,
            name: "Zinat Rahman",
            profession: "UI/UX Designer",
            description: "Lorem ipsum dolor sit amet consectetur. Enim ue feentum ornare sagittis rutrum lectus lorem. Nec lorem netus ullmcorper magna orare neq met maeced tesque. Neque ltus fucibus nec morbi sed. Tincint quis tes libero morb berNe e dictum lorem nulla arcu pretium. Nibh egestas  faucibus vel id. Pellentesque commodo digsim nulla non et. Velit diam orci quis ut egt vulputte odio. Velit diam orci quis ut egt vulputate odio.quis ut egt vulputte odio. Velit diam orci quis ut egt vulputate odio."
        },
        {
            id: 4,
            image: person2,
            name: "Tushar khan",
            profession: "UI/UX Designer",
            description: "Lorem ipsum dolor sit amet consectetur. Enim ue feentum ornare sagittis rutrum lectus lorem. Nec lorem netus ullmcorper magna orare neq met maeced tesque. Neque ltus fucibus nec morbi sed. Tincint quis tes libero morb berNe e dictum lorem nulla arcu pretium. Nibh egestas  faucibus vel id. Pellentesque commodo digsim nulla non et. Velit diam orci quis ut egt vulputte odio. Velit diam orci quis ut egt vulputate odio.quis ut egt vulputte odio. Velit diam orci quis ut egt vulputate odio."
        },
    ]

    return (
        <section className='mt-20 xl:mt-[350px] mx-5 xl:mx-[120px]'>
            <div className='text-center font-["Manrope"]'>
                <h2 className='text-[#F15524] font-extrabold text-lg lg:leading-[25px]'>Testimonial</h2>
                <h1 className='text-[#0C0047] text-[20px] lg:text-[40px] lg:leading-[56px] tracking-[-0.03em] font-bold mt-3 -mb-10 lg:-mb-0'>What Our Happy Client Says</h1>
            </div>

            <div className='cardSlider mt-[50px]'>
                <Swiper
                    // style={{
                    //     "--swiper-pagination-color": "#FFFFFF",
                    //     "--swiper-pagination-bullet-inactive-color": "#999999",
                    //     "--swiper-pagination-bullet-inactive-opacity": "1",
                    //     "--swiper-pagination-bullet-size": "10px",
                    //     "--swiper-pagination-bullet-horizontal-gap": "6px"
                    // }}
                    className="mySwiper h-[580px] md:h-[350px] lg:h-[580px]"
                    slidesPerView={3}
                    spaceBetween={30}

                    freeMode={true}

                    pagination={{
                        clickable: true,
                    }}

                    loop={true}
                    loopFillGroupWithBlank={true}
                    // navigation={true}

                    autoplay={{
                        delay: 3000
                    }}

                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }}
                    modules={[FreeMode, Pagination, Autoplay, Navigation]}
                >
                    <>
                        {
                            testimonials.length &&
                            <>
                                <div>
                                    {
                                        testimonials?.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <div className='border border-[#FDBC64] rounded-[20px] p-5 shadow-lg mt-10 lg:mt-20 relative'>
                                                    <img className='qoutation absolute w-[74px] h-[48px] top-[-30px] right-[100px]' src={qoutation} alt="" />
                                                    <div className='flex items-center gap-6'>
                                                        <div>
                                                            <img className='w-[60px] h-[60px]' src={testimonial.image} alt="" />
                                                        </div>
                                                        <div>
                                                            <h2 className='font-["Poppins"] font-medium text-[18px] leading-[27px]'>{testimonial.name}</h2>
                                                            <h3 className='text-sm leading-[23px] text-[#525252]'>{testimonial.profession}</h3>
                                                        </div>
                                                    </div>
                                                    <div className='mt-7'>
                                                        <p className='text-sm md:text-base font-["Poppins"] text-[#525252] leading-[24px]'>{testimonial.description}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                </div>
                            </>

                        }
                    </>

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;