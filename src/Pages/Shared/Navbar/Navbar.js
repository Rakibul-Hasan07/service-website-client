import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(true);
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
            <div className={`navbar shadow-xl px-5`}>
                <div className={`navbar flex flex-col md:flex-row justify-between w-full ${open ? 'hidden' : 'block'}`}>
                    <div className="navbar-start">
                        <Link to='/' className="btn btn-ghost normal-case text-2xl">Peak Photography</Link>
                    </div>
                    <div className="">
                        <ul className="flex flex-col justify-center items-center md:flex-row  gap-6 font-bold">
                            {
                                user?.uid ? <><li><Link to='/myreview'>MyReview</Link></li>
                                    <li><Link to='/addservice'>AddService</Link></li></> : ' '
                            }
                            <Link to='/blogs'>Blogs</Link>
                        </ul>
                    </div>
                    <div className="navbar-end font-bold gap-4">
                        {
                            user?.uid ? <Link onClick={handleLogout}> LogOut</Link> : <><Link to='/login' className="">Login</Link>
                                <Link to='/register' className="">Register</Link></>
                        }
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Navbar;