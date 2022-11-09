import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);

    console.log(reviews);
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = (id) => {
        const agree = window.confirm('Are you sure delete this')
        if (agree) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                    console.log(data);
                })
        }

    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                reviews.map(review =>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>{review.message}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline">Update</button>
                                <button onClick={() => handleDelete(review._id)} className="btn btn-outline">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyReview;