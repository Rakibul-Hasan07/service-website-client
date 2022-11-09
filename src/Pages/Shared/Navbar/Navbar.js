import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="navbar shadow-xl">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        user?.uid ? <><li><Link>My Review</Link></li>
                            <li><Link>Add Service</Link></li></> : ' '
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <Link onClick={handleLogout}> LogOut</Link> : <><Link to='/login' className="">Login</Link>
                        <Link to='/register' className="">Register</Link></>
                }
            </div>
        </div >
    );
};

export default Navbar;