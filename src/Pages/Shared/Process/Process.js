import React from 'react';
import line from '../../../Assets/background/line.png';

const Process = () => {
    return (
        <section className='mt-20 lg:mt-[100px] mx-5 xl:mx-[120px] relative mb-20 xl:mb-[500px]'>
            <div>
                <h3 className='font-sans font-medium text-sm text-[#F15524] md:mb-[14px]'>POS Operation Across the world</h3>
                <h1 className='font-["Manrope"] font-extrabold text-2xl lg:text-[40px] text-[#0C0047] lg:leading-10 tracking-[0.005em] mb-2'>We have the best team <br />
                    and best process</h1>
                <p className='text-[#64607D] text-[15px] font-medium font-["Manrope"] lg:leading-7 max-w-xs mb-5'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.</p>
                <button className='bg-[#006CEC] text-white text-base font-medium font-["Poppins"] rounded-[7px] py-[8px] px-[40px]'>See Demo</button>
            </div>

            <div className='gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:absolute xl:top-[120px] mt-10 lg:mt-0'>
                <img className='hidden xl:block' src={line} alt="" />

                {/* process-01  */}
                <div className='xl:absolute xl:top-[300px] xl:left-[110px] xl:w-[280px]'>

                    {/* round shape  */}
                    <div className='hidden xl:block'>
                        <div className='w-[60px] h-[60px] bg-white rounded-[20px] flex items-center justify-center'>
                            <div className='w-[23px] h-[23px] bg-[#3734A9] rounded-[10px]'></div>
                        </div>
                    </div>

                    {/* content */}
                    <div className='flex flex-col-reverse p-5 shadow-lg xl:shadow-none border border-[#c1c0c7] lg:border-none rounded-xl'>
                        <div>
                            <h2 className='font-["Manrope"] text-base font-extrabold leading-[30px] tracking-tight mt-[30px]'>Requirement Analysis</h2>

                            <p className='text-[#64607D] font-["Manrope"] font-medium text-base leading-[30px] tracking-wider mt-1'>Party we years to order allow asked of. We so opinion friends me message as delight. </p>
                        </div>
                        <div className='xl:absolute xl:top-[20px] xl:right-10 text-[#e0dfe9] font-semibold text-[150px] leading-none font-serif -z-10'>1</div>
                    </div>
                </div>


                {/* process-02 */}
                <div className='xl:absolute xl:top-[210px] xl:left-[450px] xl:w-[280px] my-5 lg:my-0'>

                    {/* round shape  */}
                    <div className='hidden xl:block'>
                        <div className='w-[60px] h-[60px] bg-white rounded-[20px] flex items-center justify-center'>
                            <div className='w-[23px] h-[23px] bg-[#3734A9] rounded-[10px]'></div>
                        </div>
                    </div>

                    {/* content */}
                    <div className='flex flex-col-reverse p-5 shadow-lg xl:shadow-none rounded-xl border border-[#c1c0c7] lg:border-none'>
                        <div>
                            <h2 className='font-["Manrope"] text-base font-extrabold leading-[30px] tracking-tight mt-[30px]'>Design & Development</h2>

                            <p className='text-[#64607D] font-["Manrope"] font-medium text-base leading-[30px] tracking-wider mt-1'>His defective nor convinced residence own. Connection has put impossible own apartments boisterous.</p>
                        </div>
                        <div className='xl:absolute xl:top-[20px] xl:right-10 text-[#e0dfe9] font-semibold text-[150px] leading-none font-serif z-[-1]'>2</div>
                    </div>
                </div>


                {/* process-03 */}
                <div className='xl:absolute xl:top-[100px] xl:left-[880px] xl:w-[280px]'>

                    <div className='relative'>
                        {/* round shape  */}
                        <div className='hidden xl:block'>
                            <div className='w-[60px] h-[60px] bg-white rounded-[20px] flex items-center justify-center'>
                                <div className='w-[23px] h-[23px] bg-[#3734A9] rounded-[10px]'></div>
                            </div>
                        </div>

                        {/* content */}
                        <div className='flex flex-col-reverse p-5 shadow-lg xl:shadow-none rounded-xl border border-[#c1c0c7] lg:border-none'>
                            <div>
                                <h2 className='font-["Manrope"] text-base font-extrabold leading-[30px] tracking-tight mt-[30px]'>Deployment & Monitoring</h2>

                                <p className='text-[#64607D] font-["Manrope"] font-medium text-base leading-[30px] tracking-wider mt-1'>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.</p>
                            </div>
                            <div className='xl:absolute xl:top-[20px] xl:right-10 text-[#e0dfe9] font-semibold text-[150px] leading-none font-serif z-[-1]'>3</div>
                        </div>

                        <div className='hidden xl:block absolute w-[400px] h-[400px] bg-[#FAFAFF] rounded-full top-[-80px] left-[-20px] z-[-2]'>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;