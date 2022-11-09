import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCart = ({ service }) => {
    const { _id, service_name, rating, price, image_url, description } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
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
                    <p>{description.length > 100 ? description?.slice(0, 100) + '...' : description + '...'}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;