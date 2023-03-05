import React from 'react';
import { Link } from 'react-router-dom';
import product1 from '../../../Assets/images/products/product1.png';
import product2 from '../../../Assets/images/products/product2.png';
import product3 from '../../../Assets/images/products/product3.png';
import product4 from '../../../Assets/images/products/product4.png';
import product5 from '../../../Assets/images/products/product5.png';
import product6 from '../../../Assets/images/products/product6.png';
import product7 from '../../../Assets/images/products/product7.png';
import product8 from '../../../Assets/images/products/product8.png';

const Products = () => {
    const products = [
        {
            id: 1,
            productImag: product1,
            productName: 'CRM',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: 'bg-[#E8E4FF]',
            hoverCardColor: 'hover:bg-[#A798FF]',
            path: '/crm'
        },
        {
            id: 2,
            productImag: product2,
            productName: 'EDU CRM',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: 'bg-[#D9FFE0]',
            hoverCardColor: 'hover:bg-[#7EAF87]',
            path: '/'
        },
        {
            id: 3,
            productImag: product3,
            productName: 'HRM',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: 'bg-[#FFF0F1]',
            hoverCardColor: 'hover:bg-[#FFA4AA]',
            path: '/'
        },
        {
            id: 4,
            productImag: product4,
            productName: 'ERP',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: 'bg-[#DBF5FF]',
            hoverCardColor: 'hover:bg-[#43CBFF]',
            path: '/'
        },
        {
            id: 5,
            productImag: product5,
            productName: 'E-Commerce',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: 'bg-[#FFE7D6]',
            hoverCardColor: 'hover:bg-[#FF8D3E]',
            path: '/'
        },
        {
            id: 6,
            productImag: product6,
            productName: 'Accounting Software',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: 'bg-[#DAECFF]',
            hoverCardColor: 'hover:bg-[#8EC5FF]',
            path: '/'
        },
        {
            id: 7,
            productImag: product7,
            productName: 'Inventory Management(POS)',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: 'bg-[#E1FCFF]',
            hoverCardColor: 'hover:bg-[#49ECFF]',
            path: '/'
        },
        {
            id: 8,
            productImag: product8,
            productName: 'Restaurant Management ',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: 'bg-[#FFDAE8]',
            hoverCardColor: 'hover:bg-[#FF4288]',
            path: '/'
        },
    ]

    return (
        <section className='w-full max-w-[1282px] mx-auto mt-14 lg:mt-[76px] px-5 lg:px-0'>
            <div className='text-center mb-10 lg:mb-[76px]'>
                <h2 className='font-["Manrope"] font-extrabold text-2xl lg:text-[40px] text-[#0C0047]'>Our <span className='text-[#F15524]'>Product</span></h2>

                <p className='mt-2 md:mt-5 font-sans font-normal text-sm md:text-base text-[#64607D] md:leading-[32px]'>Don’t waste time on search manual tasks. Let Automation do it for you. <br /> Simplify workflows, reduce errors, and save time.</p>
            </div>
            <div className=' grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[60px]'>
                {
                    products?.map(product =>
                        <Link to={`${product.path}`} key={product.id}>
                            <div >
                                <div
                                    className={`ease-in duration-300 flex flex-col items-center justify-center text-center px-3 py-3 md:px-[30px] md:py-[50px] rounded-lg h-full md:h-[300px] xl:w-[275px] ${product.cardColor} ${product.hoverCardColor} group`}
                                >
                                    <img className='w-[68px] h-[64px] ease-in duration-300' src={product.productImag} alt="" />
                                    <h2 className='font-["Manrope"] font-bold text-base md:text-xl text-[#0C0047] my-[15px] group-hover:text-white'>{product.productName}</h2>
                                    <p className='font-["Manrope"] font-normal text-xs md:text-[15px] text-[#64607D] group-hover:text-white'>{product.description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            <div className='flex items-center justify-center mt-10 md:mt-16'>
                <button className='font-["Poppins"] font-medium text-base text-white hover:text-[#006CEC] bg-[#006CEC] hover:bg-white border hover:border-[#006CEC] rounded-[7px] py-[7px] md:py-[15px] px-10 md:px-[70px]'>More Product</button>
            </div>
        </section>
    );
};

export default Products;