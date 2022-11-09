import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Review = () => {
    const serviceData = useLoaderData();
    const { _id, price, service_name } = serviceData;
    console.log(serviceData);
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: service_name,
            price,
            email,
            message,
            image: user?.photoURL,
            name: user?.displayName
        }


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Added successfully')
                    form.reset();

                }
            })
            .catch(error => console.log(error));


    }

    return (
        <div className='my-10'>
            <form onSubmit={handleReview}>
                <h2 className="text-4xl text-center">Service Name: {service_name}</h2>
                <h4 className="text-3xl text-center my-4">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full my-3" placeholder="Your Message" required></textarea>
                <div className='flex justify-center'>
                    <input className='btn my-2' type="submit" value="Submit Your Review" />
                </div>
            </form>
        </div>
    );
};

export default Review;