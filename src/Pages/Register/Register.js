import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({});

    const handleRegister = (event) => {
        event.preventDefault();
        // console.log(userInfo);
        createUser(userInfo.email, userInfo.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUser(userInfo.name, userInfo.url)
            .then(()=>{})
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
    const handleInput = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...userInfo }
        newUser[field] = value;
        setUserInfo(newUser)
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Here!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onClick={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input onChange={handleInput} type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input onChange={handleInput} type="url" name='url' placeholder="image-url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handleInput} type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handleInput} type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;