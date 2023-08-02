import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className='h-6 w-6 md:hidden' onClick={() => setOpen(!open)}>
                {
                    open ? <Bars3Icon></Bars3Icon> : <XMarkIcon></XMarkIcon>
                }

            </div>
            <div className={`navbar shadow-xl`}>
                <div className={`navbar flex flex-col md:flex-row w-full ${open ? 'hidden' : 'block'}`}>
                    <div className="navbar-start text-center">
                        <Link to='/' className="btn btn-ghost normal-case text-2xl">Peak Photography</Link>
                    </div>
                    <div className="">
                        <ul className="flex flex-col justify-center items-center md:flex-row  gap-6 font-bold">
                            {
                                user?.uid ? <><li><Link to='/myreview'>MyReview</Link></li>
                                    <li><Link to='/addservice'>AddService</Link></li></> : ' '
                            }
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/contact-us'>ContactUs</Link>
                        </ul>
                    </div>
                    <div className="navbar-end font-bold flex flex-col md:flex-row gap-4">
                        {
                            user?.uid ? <>
                                <Link onClick={handleLogout}> LogOut</Link>
                                <div className="avatar">
                                    <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        {
                                            user?.photoURL ? <img src={user?.photoURL} /> : <img src="https://i.ibb.co/9cry6kN/download-3.jpg" />
                                        }
                                    </div>
                                </div>
                            </> : <><Link to='/login' className="">Login</Link>
                                <Link to='/register' className="">Register</Link></>
                        }
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Navbar;