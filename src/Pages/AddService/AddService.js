import React, { useState } from 'react';
import useTitle from '../../useTitle/useTitle';

const AddService = () => {
    useTitle('AddService')
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const service_name = form.service.value;
        const price = form.price.value;
        const url = form.url.value;
        const description = form.description.value;

        const serviceData = {
            service_name: service_name,
            price: price,
            image_url: url,
            description: description
        }
        fetch('https://service-website-server-one.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service Added successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div>
            <form className='lg:w-[500px] mx-auto' onSubmit={handleAddService}>
                <h2 className="text-4xl text-center my-10">Add Your New Service</h2>
                <div className='grid grid-cols-1 gap-4'>
                    <label htmlFor="">Service Name</label>
                    <input name="service" type="text" placeholder="serviceName" className="input input-ghost w-full  input-bordered" required />
                    <label htmlFor="">Price</label>
                    <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" required />
                    <label htmlFor="">Image URL</label>
                    <input name="url" type="text" placeholder="image-url" className="input input-ghost w-full  input-bordered" required />
                    <label htmlFor="">Write Something About This</label>
                    <textarea name="description" className="textarea textarea-bordered h-24 w-full my-6" placeholder="description" required></textarea>
                </div>

                <div className='text-center mb-5'>
                    <input className='btn btn-outline' type="submit" value="Submit Your Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;