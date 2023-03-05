import React from "react";
import img1 from '../../../Assets/images/about/itSolution/img1.png';
import img2 from '../../../Assets/images/about/itSolution/img2.png';
import img3 from '../../../Assets/images/about/itSolution/img3.png';
import './ItSolution.css';

const ItSolution = () => {
  return (
    <section>
      <div className="relative lg:mt-[400px] ">

        <div className="lg:w-[1293px]  lg:h-[2453px] bg-[#FDF3FF] opacity-[0.8] flex justify-end z-[-1] top-[-300px] lg:absolute pb-10">
          <h1 className="max-w-[950px] font-semibold text-[24px] lg:text-[45px] lg:leading-[54px] tracking-tight text-black mt-20 mr-6">
            -Assembling the team of talented people to enhance your experience of
            IT solutions at Soft Valley.
          </h1>
        </div>

        {/* first  */}
        <div className="lg:w-[1282px] w-full mx-auto">
          <div className="card lg:h-[641px] lg:card-side shadow-xl">
            <img className="lg:w-1/2" src={img1} alt="Album" />

            <div className="card-body lg:w-1/2 bg-[#3734A9] text-white">
              <div className="flex justify-between">

                <h2 className="mt-28 text-[45px] font-semibold leading-[60px] font-['Manrope']">Quality <br /> is Number One</h2>
                <h1 className="hidden lg:block font-['Poppins'] font-[800] text-[250px] ppp -mt-14">
                  1
                </h1>
              </div>

              <p className="-mt-10">
                With the CRM module, you can boost your sales. To build up a
                long-term business CRM can play a vital role. Sales ERP software
                has an enhanced CRM system to communicate with customers and keep
                track of every single purchase of a customer. With the CRM module,
                you can boost your sales. To build up a long-term business CRM can
                play a vital role. Sales ERP software has an enhanced CRM system
                to communicate with customers and keep track of every single
                purchase of a customer. These features include the following
                section:
              </p>
            </div>
          </div>

          {/* second  */}
          <div className="card flex flex-col-reverse lg:h-[641px] lg:card-side shadow-xl">
            <div className="card-body lg:w-1/2 bg-[#3734A9] text-white">
              <div className="flex justify-between">

                <h2 className="mt-28 text-[45px] font-semibold leading-[60px] font-['Manrope']">Create <br /> Customer Value</h2>
                <h1 className="hidden lg:block  font-['Poppins'] font-[800] text-[250px] ppp -mt-14">
                  2
                </h1>
              </div>

              <p className="-mt-10">
                With the CRM module, you can boost your sales. To build up a
                long-term business CRM can play a vital role. Sales ERP software
                has an enhanced CRM system to communicate with customers and keep
                track of every single purchase of a customer. With the CRM module,
                you can boost your sales. To build up a long-term business CRM can
                play a vital role. Sales ERP software has an enhanced CRM system
                to communicate with customers and keep track of every single
                purchase of a customer. These features include the following
                section:
              </p>
            </div>
            <img className="lg:w-1/2" src={img2} alt="Album" />
          </div>

          {/* third */}
          <div className="card lg:h-[641px] lg:card-side shadow-xl">
            <img className="lg:w-1/2" src={img3} alt="Album" />

            <div className="card-body lg:w-1/2 bg-[#3734A9] text-white">
              <div className="flex justify-between">

                <h2 className="mt-28 text-[45px] font-semibold leading-[60px] font-['Manrope']">Create <br /> Stakeholder Value</h2>
                <h1 className="hidden lg:block font-['Poppins'] font-[800] text-[250px] ppp -mt-14">
                  3
                </h1>
              </div>

              <p className="-mt-10">
                With the CRM module, you can boost your sales. To build up a
                long-term business CRM can play a vital role. Sales ERP software
                has an enhanced CRM system to communicate with customers and keep
                track of every single purchase of a customer. With the CRM module,
                you can boost your sales. To build up a long-term business CRM can
                play a vital role. Sales ERP software has an enhanced CRM system
                to communicate with customers and keep track of every single
                purchase of a customer. These features include the following
                section:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItSolution;
