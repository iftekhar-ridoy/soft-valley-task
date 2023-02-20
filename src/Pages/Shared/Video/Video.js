import React from 'react';
import videoPicture from '../../../Assets/images/VideoPicture.png';
import playbtn from '../../../Assets/images/playbtn.png';

const Video = () => {
    return (
        <section className='mt-20 lg:mt-[150px] relative'>
            <div className='bg-[#3734A9] h-[550px] text-white text-center pt-[80px] lg:pt-[111px] '>
                <h3 className='text-sm md:text-lg lg:text-2xl leading-[49px] font-medium tracking-tight'># TECHNOLOGY INDEX</h3>
                <h1 className='text-2xl px-1 lg:text-[45px] md:leading-[49px] font-semibold font-["Poppins"]'>Get Ready for Your Success, We Offer the <br /> best IT solutions.</h1>
            </div>
            <div className='absolute top-[50%] md:top-[40%] lg:top-[50%]'>
                <figure className='flex items-center justify-center relative'>
                    <img className='w-[90%] lg:w-3/4' src={videoPicture} alt="" />
                </figure>
                <img className='h-[80px] w-[80px] lg:h-[140px] lg:w-[140px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' src={playbtn} alt="" />
            </div>
        </section>
    );
};

export default Video;
