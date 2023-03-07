import React from "react";
import img from "../../../Assets/images/about/story/img.png";

const OurStory = () => {
  return (
    <section className="max-w-[1282px] mx-auto px-5 lg:px-0 mt-10 lg:mt-[90px]">
      <div className="">
        <div className="lg:flex gap-10 lg:flex-row items-center">
          <img
            src={img}
            className="lg:w-[633px] lg:h-[411px] rounded-lg shadow-2xl "
            alt=""
          />
          <div className="mx-auto ">
            <h1 className="mt-5 lg:mt-0 font-semibold text-[45px] leading-[64px] text-[#0C0047] font-['Poppins']">Our Story</h1>
            <p className="py-6 text-[#64607D] text-base">
              Soft Valley mounts on its decade long industry experience,
              superior technical skills and highest quality of support services
              to provide scalable IT solutions as a leading Software development
              and services company. It has deep infiltration in the Value-Added
              Services, Banking, Corporate, and FinTech industry of Bangladesh.
              Soft Valley mounts on its decade long industry experience,
              superior technical skills and highest quality of support services
              to provide scalable IT solutions as a leading Software development
              and services company. It has deep infiltration in the Value-Added
              Services, Banking, Corporate, and FinTech industry of Bangladesh.
              Value-Added Services, Banking, Corporate, and FinTech industry of
              Bangladesh. development and services company. It has deep
              infiltration in the Value-Added Services, Banking, Corporate, and
              FinTech industry of Bangladesh. Value-Added Services, Banking,
              Corporate, and FinTech industry of Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
