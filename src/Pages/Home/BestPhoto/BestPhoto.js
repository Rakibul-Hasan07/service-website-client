import React, { useEffect, useState } from 'react';

const BestPhoto = () => {
    const [photo, setPhoto] = useState([])
    // console.log(photo[0]);
    useEffect(() => {
        fetch('http://localhost:5000/photo')
            .then(res => res.json())
            .then(data => setPhoto(data));
    }, [])
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>This is my best photo</h1>
            <div className='md:flex flex-row justify-evenly'>
                {
                    photo.map(ph => <div key={ph._id}>
                        <div className="card card-compact lg:w-96 lg:h-96 my-10 bg-base-100 shadow-xl">
                            <img className='rounded-lg lg:h-[250px]' src={ph.photo_url} alt="Shoes" />
                            <div className="card-body">
                                <p>{ph.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BestPhoto;