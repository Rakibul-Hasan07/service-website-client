import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServicesCart from '../../AllServicesCart/AllServicesCart';

const AllServices = () => {
    const allservices = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
            {
                allservices.map(service => <AllServicesCart service={service} key={service._id}></AllServicesCart>)
            }
        </div>
    );
};

export default AllServices;