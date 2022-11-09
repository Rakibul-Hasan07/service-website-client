import React from 'react';

const Carousel = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='col-span-1 flex justify-center items-center my-10'>
                <img className='h-[350px] w-[350px] rounded-full shadow-2xl' src='https://www.thebangladeshikitchen.com/wp-content/uploads/2014/10/KushaMurgi-800x475.png' alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center'>
                <div>
                    <h1 className='text-5xl font-bold mb-4'>Spicy Dry <span className='text-green-800'>Chicken</span></h1>
                    <p className='text-xl font-bold mr-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, a praesentium ab veritatis corporis libero quasi soluta natus. Magni deleniti dicta quis commodi eum illo mollitia laborum veniam nihil ipsum!</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;