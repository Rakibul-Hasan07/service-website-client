import React from 'react';

const Carousel = () => {
    return (
        <div className='grid items-center lg:grid-cols-2'>
            <div className='col-span-1 flex justify-center items-center my-10'>
                <img className='w-[200px] h-[200px] lg:h-[350px] lg:w-[350px] rounded-full shadow-2xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyeFkx6DxvFfpjheX7YmnRtzChv-zYyw7HQ&usqp=CAU' alt="" />
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold text-center mb-4'>Best <span className='text-green-800'>Service</span></h1>
                <p className='text-xl font-bold flex items-center justify-center mb-6'>Photographers capture subjects in commercial-quality photographs. Photographers use their technical expertise, creativity, and composition skills to produce and preserve images that tell a story or record an event.</p>
            </div>
        </div>
    );
};

export default Carousel;