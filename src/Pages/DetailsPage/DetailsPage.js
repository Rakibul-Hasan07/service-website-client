import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const DetailsPage = () => {
    const serviceDetails = useLoaderData();
    const { _id, service_name, price, image_url, description } = serviceDetails;
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
                    <div>
                        <p>Price: ${price}</p>
                    </div>
                    <p>{description}</p>
                </div>
                <div className='flex justify-center my-6'>
                    <Link to={`/review/${_id}`}><button className='btn btn-outline'>Review</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;