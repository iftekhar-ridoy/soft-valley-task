import React from "react";
import "./BannerAbout.css";
import projects from '../../../Assets/images/about/projects.png'
import clients from '../../../Assets/images/about/clients.png'
import specialist from '../../../Assets/images/about/specialist.png'

const BannerAbout = () => {
  const products = [
    {
      id: 1,
      img: projects,
      title: "-Complete Projects",
      number: "248+",
    },
    {
      id: 2,
      img: clients,
      title: "-Happy Clients",
      number: "74+",
    },
    {
      id: 3,
      img: specialist,
      title: "-IT Specialist",
      number: "15+",
    },
  ];

  return (
    <section>
      <div className="lg:h-[824px] w-full banner-container">
        {/* <div className="bg-gradient-to-r from-[#0055BA] to-[#F15524]"></div> */}
        <div className="text-start max-w-[1282px] mx-auto pt-10 pb-10 lg:pt-[100px]">
          <div className="font['Poppins'] px-5 lg:px-0">
            <h1 className="mb-9 font-medium lg:text-white text-2xl lg:text-[45px] lg:leading-[68px] max-w-[1200px]">
              Soft Valley is recognized for its rapid development and efficient project execution by working with industry-standard technologies.
            </h1>
            <p className="mb-9 max-w-[750px] lg:text-white text-xs lg:text-base">
              Soft Valley mounts on its decade long industry experience, superior technical skills and highest quality of support services to provide scalable IT solutions as a leading Software development and services company. It has deep infiltration in the Value-Added Services, Banking, Corporate, and FinTech industry of Bangladesh.
            </p>

            <div className="flex justify-between flex-col lg:flex-row gap-8 mx-auto mt-16">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border-[2px] border-solid border-b-[#F15524] rounded-[7px] h-[200px] w-full lg:w-96 px-12 pt-14 bg-white"
                >
                  <div className="">
                    <div className="flex justify-between">
                      <h2 className="font-['Poppins'] font-extrabold text-[40px] text-[#F15524] leading-[67px">
                        {product.number}
                      </h2>
                      <img
                        className="w-14 h-14 lg:w-[68px] lg:h-[68px] -mt-10"
                        src={product.img}
                        alt=""
                      />
                    </div>
                    <div className="font-sans font-[700] text-lg lg:text-[28px] text-[#202020] lg:leading-[47px]">
                      <h1>{product.title}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAbout;
