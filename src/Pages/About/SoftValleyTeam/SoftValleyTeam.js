import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Pagination, Thumbs } from "swiper";

import img1 from '../../../Assets/images/about/team/img1.png';
import img2 from '../../../Assets/images/about/team/img2.png';
import img3 from '../../../Assets/images/about/team/img3.png';
import img4 from '../../../Assets/images/about/team/img4.png';
import img5 from '../../../Assets/images/about/team/img5.png';



const SoftValleyTeam = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const teams = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
  ];

  return (
    <div className="lg:w-[1282px] w-full mx-auto mt-10 lg:mt-[300px]">
      < div className="text-center" >
        <h1 className="text-[32px] font-semibold leading-[54px] text-[#0C0047] font-['Poppins']">Soft Valley Team</h1>
        <p className="max-w-[1000px] text-center mx-auto text-[#64607D] leading-[30px] font-['Nunito']">
          Soft Valley Team offers a dynamic of talented and skilled. With the
          aim of making quality education accessible to all, Eso Education is a
          group of young dreamers with faith in various national and
          multinational institutions.
        </p>
      </div >

      <div className="mt-5">
        <Swiper
          spaceBetween={10}
          //   navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          centeredSlides={true}
          autoplay={{
            // delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Thumbs, FreeMode]}
          className="w-full mx-auto lg:h-[600px]"
        >
          <div className="">
            {teams.map((team) => (
              <SwiperSlide className="">
                <img className="w-[1282px]" src={team.img} alt="" />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          slidesPerView={4}
          autoplay={{
            // delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Thumbs]}
          className=""
        >
          <div>
            {teams.map((team) => (
              <SwiperSlide>
                <img src={team.img} alt="" />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div >
  );
};

export default SoftValleyTeam;
