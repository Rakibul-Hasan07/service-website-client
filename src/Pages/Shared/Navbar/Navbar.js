import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar shadow-xl">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link>Item 1</Link></li>
                    <li><Link>Item 2</Link></li>
                    <li><Link>Item 3</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="">LogOut</Link>
                <Link className="">LogIn</Link>
            </div>
        </div>
    );
};

export default Navbar;