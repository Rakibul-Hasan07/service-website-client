import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Contact = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-4 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold leadi lg:text-3xl">Contact Us!</h2>
                    <div className="dark:text-gray-400">Talk about problem</div>
                </div>
                <img src="https://i.ibb.co/X3L6RJD/contact.png" alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form novalidate="" className="space-y-6">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" defaultValue={user?.displayName} className="w-full p-3 border-2 border-black rounded dark:bg-gray-800" />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" defaultValue={user?.email} className="w-full p-3 rounded  border-2 border-black dark:bg-gray-800" />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3  border-2 border-black rounded dark:bg-gray-800"></textarea>
                </div>
                <button type="submit" className="w-full p-3 btn btn-info text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900" disabled={!user?.uid}>Send Message</button>
            </form>
        </div>
    );
};
export default Contact