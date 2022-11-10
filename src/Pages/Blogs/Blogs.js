import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../useTitle/useTitle';

const Blogs = () => {
    const blogs = useLoaderData();
    useTitle('Blogs')
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                {
                    blogs.map(blog => <div className='border p-6 rounded-md shadow-lg' key={blog._id}>
                        <h1 className='font-bold text-2xl my-3'>{blog.question}</h1>
                        <p>{blog.answer}</p>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Blogs;