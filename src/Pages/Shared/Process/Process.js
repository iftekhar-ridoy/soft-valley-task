import React from 'react';
import line from '../../../Assets/background/line2.png';

const Process = () => {
    return (
        <section className='mt-20 lg:mt-[125px] px-5 lg:px-0 mb-20 w-full max-w-7xl mx-auto'>
            <div className='z-30'>
                <h3 className='font-sans font-medium text-xs md:text-sm text-[#F15524] md:mb-[14px]'>POS Operation Across the world</h3>
                <h1 className='font-["Manrope"] font-extrabold text-2xl lg:text-[40px] text-[#0C0047] lg:leading-[48px] tracking-[0.005em] mb-2'>We have the best team <br />
                    and best process</h1>
                <p className='text-[#64607D] text-xs md:text-[15px] font-medium font-["Manrope"] lg:leading-7 max-w-md mb-5'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.</p>


                <button className='flex items-center  font-["Poppins"] font-medium text-base text-white hover:text-[#006CEC] bg-[#006CEC] hover:bg-white border hover:border-[#006CEC] rounded-[7px] py-[7px] md:py-[15px] px-10 md:px-[70px]'>See Demo</button>
            </div>

            <div className='-ml-5 mt-[-50px] md:mt-[-120px] lg:mt-[-180px] xl:mt-[-220px] relative'>

                <div className='border md:border-none border-y-0 border-r-0 border-l-[#F15524] border-l-8 ml-10 md:ml-0 mt-20 md:mt-0'>
                    <img className='hidden md:block' src={line} alt="" />

                    <div className='flex flex-col md:flex-row justify-between w-full gap-5'>

                        {/* process-01  */}
                        <div className='flex items-center gap-5 w-full md:w-40 lg:w-[280px] ml-[0] md:ml-[90px] lg:ml-[100px] xl:ml-[135px]'>

                            {/* round shape  */}
                            <div className='block md:hidden -ml-[19px] mt-4'>
                                <div className='w-[30px] h-[30px]  bg-[#F15524] rounded-full flex items-center justify-center'>
                                    <div className='w-[15px] h-[15px] bg-white rounded-full'></div>
                                </div>
                            </div>

                            {/* content */}
                            <div className='flex lg:p-5 relative -mt-[0] md:-mt-14'>
                                <div>
                                    <h2 className='font-["Manrope"] text-xs lg:text-base font-extrabold lg:leading-[30px] md:tracking-tight mt-[30px]'>Requirement Analysis</h2>

                                    <p className='text-[#64607D] font-["Manrope"] font-medium text-xs lg:text-base lg:leading-[30px] md:tracking-wider md:mt-1'>Party we years to order allow asked of. We so opinion friends me message as delight. </p>
                                </div>
                                <div className='hidden lg:block absolute top-[20px] md:top-[-30px] right-0 lg:right-10 text-[#e0dfe9] font-semibold text-[60px] md:text-[80px] lg:text-[150px] leading-none font-serif -z-10'>1</div>
                            </div>
                        </div>


                        {/* process-02 */}
                        <div className='flex gap-5 w-full md:w-40 lg:w-[280px] ml-[0] md:ml-[30px] lg:ml-[90px] xl:ml-[110px]'>

                            {/* round shape  */}
                            <div className='block md:hidden -ml-[19px] mt-8'>
                                <div className='w-[30px] h-[30px]  bg-[#F15524] rounded-full flex items-center justify-center'>
                                    <div className='w-[15px] h-[15px] bg-white rounded-full'></div>
                                </div>
                            </div>

                            {/* content */}
                            <div className='flex lg:p-5 relative mt-[0] md:mt-[-115px] lg:mt-[-140px] xl:mt-[-190px]'>
                                <div>
                                    <h2 className='font-["Manrope"] text-xs lg:text-base font-extrabold lg:leading-[30px] md:tracking-tight mt-[30px]'>Design & Development</h2>

                                    <p className='text-[#64607D] font-["Manrope"] font-medium text-xs lg:text-base lg:leading-[30px] md:tracking-wider md:mt-1'>His defective nor convinced residence own. Connection has put impossible own apartments boisterous.</p>
                                </div>
                                <div className='hidden lg:block absolute top-[20px] md:top-[-30px] right-0 lg:right-10 text-[#e0dfe9] font-semibold text-[60px] md:text-[80px] lg:text-[150px] leading-none font-serif z-[-1]'>2</div>
                            </div>
                        </div>


                        {/* process-03 */}
                        <div className='w-full md:w-40 lg:w-[280px] ml-[0] md:ml-[0px] lg:ml-[50px] xl:mr-[40px]'>

                            <div className='relative flex gap-5 mb-5'>
                                {/* round shape  */}
                                <div className='block md:hidden -ml-[19px] mt-8'>
                                    <div className='w-[30px] h-[30px]  bg-[#F15524] rounded-full flex items-center justify-center'>
                                        <div className='w-[15px] h-[15px] bg-white rounded-full'></div>
                                    </div>
                                </div>

                                {/* content */}
                                <div className='flex lg:p-5 relative mt-[0] md:mt-[-190px] lg:mt-[-240px] xl:mt-[-320px]'>
                                    <div>
                                        <h2 className='font-["Manrope"] text-xs lg:text-base font-extrabold lg:leading-[30px] md:tracking-tight mt-[30px]'>Deployment & Monitoring</h2>

                                        <p className='text-[#64607D] font-["Manrope"] font-medium text-xs lg:text-base lg:leading-[30px] md:tracking-wider md:mt-1'>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.</p>
                                    </div>
                                    <div className='hidden lg:block absolute top-[20px] md:top-[-30px] right-0 lg:right-10 text-[#e0dfe9] font-semibold text-[60px] md:text-[80px] lg:text-[150px] leading-none font-serif z-[-1]'>3</div>
                                </div>

                                <div className='hidden xl:block absolute xl:w-[400px] xl:h-[400px] bg-[#FAFAFF] rounded-full top-[-450px] left-[-10px] z-[-2]'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Process;