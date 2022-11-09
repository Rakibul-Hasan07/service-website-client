import React, { useState } from 'react';

const AddService = () => {
    // const [addService, setAddService] = useState({});
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const service_name = form.service.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const url = form.url.value;
        const description = form.description.value;

        const serviceData = {
            service_name: service_name,
            rating: rating,
            price: price,
            image_url: url,
            description: description
        }
        fetch('http://localhost:5000/services', {
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
            <form onSubmit={handleAddService}>
                <h2 className="text-4xl text-center my-10">Add Your New Service</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="service" type="text" placeholder="serviceName" className="input input-ghost w-full  input-bordered" required />
                    <input name="rating" type="text" placeholder="rating" className="input input-ghost w-full  input-bordered" required />
                    <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" required />
                    <input name="url" type="text" placeholder="image-url" className="input input-ghost w-full  input-bordered" required />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full my-6" placeholder="description" required></textarea>
                <div className='text-center mb-5'>
                    <input className='btn btn-outline' type="submit" value="Submit Your Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;