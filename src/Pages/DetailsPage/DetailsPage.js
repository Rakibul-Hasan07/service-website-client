import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const DetailsPage = () => {
    const serviceDetails = useLoaderData();
    const { _id, service_name, rating, price, image_url, description } = serviceDetails;
    console.log(serviceDetails);
    return (
        <div className='flex justify-center my-10'>
            <div className="card card-compact w-[700px] bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={image_url}>
                        <img className='rounded-lg' src={image_url} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <div className='flex justify-evenly'>
                        <p>Price: ${price}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;