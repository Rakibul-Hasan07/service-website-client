import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='font-semibold text-2xl my-4'>My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    services.map(service => <ServiceCart service={service} key={service._id}></ServiceCart>)
                }
            </div>
            <div className='text-center my-8'>
                <Link to='/services'><button className='btn btn-primary btn-outline'>Show All</button></Link>
            </div>
        </div>
    );
};

export default Services;