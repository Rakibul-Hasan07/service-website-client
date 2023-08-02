import React from 'react';

const Carousel = () => {
    return (
        // <div className='grid items-center lg:grid-cols-2'>
        //     <div className='col-span-1 flex justify-center items-center my-10'>
        //         <img className='w-[200px] h-[200px] lg:h-[350px] lg:w-[350px] rounded-full shadow-2xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyeFkx6DxvFfpjheX7YmnRtzChv-zYyw7HQ&usqp=CAU' alt="" />
        //     </div>
        //     <div className='col-span-1 flex flex-col justify-center items-center'>
        //         <h1 className='text-5xl font-bold text-center mb-4'>Best <span className='text-green-800'>Service</span></h1>
        //         <p className='text-xl font-bold flex items-center justify-center mb-6'>Photographers capture subjects in commercial-quality photographs. Photographers use their technical expertise, creativity, and composition skills to produce and preserve images that tell a story or record an event.</p>
        //     </div>
        // </div>
        <div>
            <section style={{ backgroundImage: `url('https://i.ibb.co/BCJqVLj/Hero-Section-Background.jpg')` }} className="dark:bg-gray-800 bg-cover dark:text-gray-100">
                <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.ibb.co/Tqtp5sp/commercial-photography-service.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl">Our Best <br></br>
                            <span className="dark:text-violet-400">Photography</span> <br></br>Service
                        </h1>
                        <p className="mt-6 mb-8 text-lg font-semibold sm:mb-12">Photographers capture subjects in commercial-quality photographs. Photographers use their technical expertise, creativity, and composition skills to produce and preserve images that tell a story or record an event.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border border-white dark:bg-violet-400 dark:text-gray-900">Visit</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Choise</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        // <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Kr3wmW9/bg-image.jpg)' }}>
        //     <div className="hero-overlay bg-opacity-60"></div>
        //     <div className="hero-content text-center text-neutral-content">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //             <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Carousel;