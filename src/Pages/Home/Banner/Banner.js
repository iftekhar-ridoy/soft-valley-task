import React from 'react';
import bannerBG from '../../../Assets/background/bannerBG.png';
import playBtn from '../../../Assets/icon/playBtn.png';
import homeBannerImage from '../../../Assets/images/homeBannerImage.png';
import greenOK from '../../../Assets/icon/greenOk.png';
import messengerIco from '../../../Assets/icon/messenger.png';
import whatsappIco from '../../../Assets/icon/whatsapp.png';

const Banner = () => {
    return (
        <section
        // style=
        // {{
        //     backgroundImage: `url(${bannerBG})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "contain",
        //     height: 718,
        //     width: "100%",
        //     // position: "relative",
        //     marginBottom: "-80px"
        // }}
        >
            <div className='px-5 xl:px-[80px] pt-5 lg:pt-14 flex'>

                {/* left side  */}
                <div className='lg:w-1/2 lg:pr-10 text-center lg:text-start'>
                    <h3 className='text-[#0D6EFD] font-["Nunito"] font-semibold text-xs lg:text-base'>
                        #Build strong Software to make your business more stronger.
                    </h3>

                    <p className='font-["Poppins"] font-bold text-xl lg:text-2xl xl:text-[35px] text-[#0C0047] xl:leading-[57px] lg:tracking-[0.02em] my-1 '>
                        The Best <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0D6EFD] to-[#6803A6]'>
                            Software Development
                        </span>
                        <br />
                        Firm <span className='font-normal'>
                            To Create the future that
                        </span>
                        <br />
                        <span className='text-[#F15524]'>
                            Everyone wants.
                        </span>
                    </p>

                    <img className='w-full md:w-[350px] mx-auto lg:hidden py-2' src={homeBannerImage} alt="" />

                    <p className='font-["Nunito"] font-normal text-xs md:text-sm lg:text-base text-[#1E1E1E]'>
                        Lorem ipsum dolor sit amet consectetur. Justo fusce eu vitae ultrices vulputate placerat nisl volutpat. Id at in laoreet nibh leo mauris. At turpis adipiscing risus nec id est eget. Etiam viverra ornare ullamcorper cum.Lorem ipsum dolor sit amet consectetur. At turpis adipiscing risus nec id est eget. Etiam viverra ornare ullamcorper cum.
                    </p>

                    <div className='flex items-center justify-center lg:justify-start gap-6 mt-5 md:mt-8'>
                        <button className='bg-[#006CEC] rounded-md text-white font-medium text-base md:leading-[30px] md:tracking-[-0.02em] py-[10px] px-[30px]'>
                            More Details
                        </button>
                        <img className='text-[#F15524] h-[39px] w-[39px]' src={playBtn} alt="" />
                    </div>

                    <div className='flex justify-center lg:justify-start gap-5 md:gap-20 mt-5 md:mt-[30px]'>
                        <span className='flex items-center gap-1'><img className='h-[18px] w-[18px]' src={greenOK} alt="" />Free Demo</span>
                        <span className='flex items-center gap-1'><img className='h-[18px] w-[18px]' src={greenOK} alt="" />Great Service</span>
                    </div>

                </div>


                {/* right side  */}
                <div className='lg:w-1/2 hidden lg:block'>
                    <img className='' src={homeBannerImage} alt="" />
                </div>
            </div>

            <div className='absolute top-[230px] lg:top-[290px] right-2 lg:right-5'>
                <div><img className='w-11 h-11 cursor-pointer hover:scale-110 mb-3' src={whatsappIco} alt="" /></div>
                <div><img className='w-11 h-11 cursor-pointer hover:scale-110' src={messengerIco} alt="" /></div>
            </div>

            {/* backgroundImage  */}
            <div>
                <img className='absolute top-0 z-[-1] h-[711px]' src={bannerBG} alt="" />
            </div>
        </section>
    );
};

export default Banner;