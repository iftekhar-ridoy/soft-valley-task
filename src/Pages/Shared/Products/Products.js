import React from 'react';
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
            cardColor: '#E8E4FF'
        },
        {
            id: 2,
            productImag: product2,
            productName: 'EDU CRM',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: '#D9FFE0'
        },
        {
            id: 3,
            productImag: product3,
            productName: 'HRM',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: '#FFF0F1'
        },
        {
            id: 4,
            productImag: product4,
            productName: 'ERP',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: '#DBF5FF'
        },
        {
            id: 5,
            productImag: product5,
            productName: 'E-Commerce',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: '#FFE7D6'
        },
        {
            id: 6,
            productImag: product6,
            productName: 'Accounting Software',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: '#DAECFF'
        },
        {
            id: 7,
            productImag: product7,
            productName: 'Inventory Management(POS)',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: '#E1FCFF'
        },
        {
            id: 8,
            productImag: product8,
            productName: 'Restaurant Management ',
            description: 'Visualize where people are posting using your hashtag made.',
            cardColor: '#FFDAE8'
        },

    ]

    return (
        <section className='px-5 xl:px-[120px] mt-20 lg:mt-[80px]'>
            <div className='text-center mb-10 lg:mb-[70px]'>
                <h2 className='font-["Manrope"] font-extrabold text-2xl lg:text-[40px] text-[#0C0047]'>Our <span className='text-[#F15524]'>Product</span></h2>

                <p className='mt-5 font-sans font-normal text-sm md:text-base text-[#64607D;]'>Don’t waste time on search manual tasks. Let Automation do it for you. <br /> Simplify workflows, reduce errors, and save time.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-12'>
                {
                    products?.map(product =>
                        <div key={product.id}>
                            <div
                                className='flex flex-col items-center justify-center text-center px-[30px] py-[50px] rounded-lg h-[300px] xl:w-[275px]'
                                style={
                                    {
                                        backgroundColor: `${product.cardColor}`
                                    }
                                }>
                                <img className='w-[68px] h-[64px]' src={product.productImag} alt="" />
                                <h2 className='font-["Manrope"] font-bold text-xl text-[#0C0047] my-[15px]'>{product.productName}</h2>
                                <p className='font-["Manrope"] font-normal text-[15px] text-[#64607D]'>{product.description}</p>
                            </div>
                        </div>)
                }
            </div>
            <div className='flex items-center justify-center mt-16'>
                <button className='font-["Poppins"] font-medium text-base text-white bg-[#006CEC] rounded-[7px] py-[15px] px-[70px]'>More Product</button>
            </div>
        </section>
    );
};

export default Products;