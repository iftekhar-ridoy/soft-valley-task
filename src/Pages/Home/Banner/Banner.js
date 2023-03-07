import React from 'react';
import bannerBG from '../../../Assets/background/bannerBG.png';
import playBtn from '../../../Assets/icon/playBtn.png';
import greenOK from '../../../Assets/icon/greenOk.png';
import bigLayer from '../../../Assets/images/homeBanner/Background.png';
import layer1 from '../../../Assets/images/homeBanner/Layer 1.png';
import layer2 from '../../../Assets/images/homeBanner/Layer 2.png';
import layer3 from '../../../Assets/images/homeBanner/Layer 3.png';
import ReadMoreReadLess from '../../Shared/ReadMoreReadLess/ReadMoreReadLess';

const Banner = () => {
    return (
        <section>
            <div className='px-5 lg:px-10 2xl:px-[161px] pt-5 lg:pt-20 flex gap-20'>

                {/* left side  */}
                <div className='lg:w-1/2  text-center lg:text-start'>
                    <h3 className='text-[#0D6EFD] font-["Nunito"] font-semibold text-xs lg:text-base'>
                        #Build strong Software to make your business more stronger.
                    </h3>

                    <p className='font-["Poppins"] font-bold text-xl lg:text-2xl xl:text-[40px] text-[#0C0047] xl:leading-[57px] lg:tracking-[0.02em] my-1 '>
                        The Best <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0D6EFD] to-[#6803A6] '>
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

                    {/* for mobile only  */}
                    <div className='relative md:hidden mt-6'>
                        <figure>
                            <div className='flex justify-center'>
                                <img className='absolute rounded-[4px] drop-shadow-2xl w-[300px] md:w-full' src={bigLayer} alt="" />
                            </div>
                            <img className='absolute rounded-[4px] drop-shadow-2xl top-[70px] w-[70px]' src={layer2} alt="" />
                            <img className='absolute rounded-[4px] drop-shadow-2xl top-[135px] w-[100px] ' src={layer1} alt="" />
                            <img className='absolute rounded-[4px] drop-shadow-2xl top-[100px] right-0 w-[90px] ' src={layer3} alt="" />
                        </figure>
                    </div>


                    <p className='font-["Nunito"] font-normal text-xs md:text-sm lg:text-base text-[#1E1E1E] w-full max-w-[640px] mt-[240px] md:mt-[18px] md:leading-[22px] hidden lg:block'>
                        Our software development firm is dedicated to building a better future for everyone by creating innovative and reliable software solutions We believe in staying ahead of the curve by constantly learning and implementing new technologies to ensure that our clients receive the best possible products. With a strong focus on user experience and functionality, we aim to provide software that meets the needs and desires of our clients and their customers alike.
                    </p>
                    <ReadMoreReadLess limit={120} readClass={'lg:hidden font-["Nunito"] font-normal text-sm mt-[240px]'} readBtn={'text-[#006CEC]'}>
                        Our software development firm is dedicated to building a better future for everyone by creating innovative and reliable software solutions. We believe in staying ahead of the curve by constantly learning and implementing new technologies to ensure that our clients receive the best possible products. With a strong focus on user experience and functionality, we aim to provide software that meets the needs and desires of our clients and their customers alike.
                    </ReadMoreReadLess>

                    <div className='flex items-center justify-center lg:justify-start gap-6 mt-5 md:mt-[44px]'>
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
                <div className='lg:w-1/2 lg:max-w-lg 2xl:max-w-4xl hidden lg:block relative'>
                    <figure>
                        <img className='absolute rounded-2xl drop-shadow-2xl' src={bigLayer} alt="" />
                        <img className='absolute rounded-2xl drop-shadow-2xl lg:-left-10 2xl:-left-20 lg:top-[100px] 2xl:top-[135px] lg:w-[150px] 2xl:w-[200px]' src={layer2} alt="" />
                        <img className='absolute rounded-2xl drop-shadow-2xl lg:-left-10 2xl:-left-20 lg:top-[230px] 2xl:top-[335px] lg:w-40 2xl:w-60' src={layer1} alt="" />
                        <img className='absolute rounded-2xl drop-shadow-2xl lg:-right-10 2xl:-right-10 lg:top-40 2xl:top-56 lg:w-36 2xl:w-52 ' src={layer3} alt="" />
                    </figure>
                </div>
            </div>

            {/* backgroundImage  */}
            <div>
                <img className='absolute top-0 z-[-1] h-[650px] 2xl:h-[788px] w-full max-w-[1920px]' src={bannerBG} alt="" />
            </div>
        </section>
    );
};

export default Banner;