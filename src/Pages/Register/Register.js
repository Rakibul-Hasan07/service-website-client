import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [userInfo, setUserInfo] = useState({});
    useTitle('Register')
    const handleRegister = (event) => {
        event.preventDefault();
        // console.log(userInfo);
        createUser(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUser(userInfo.name, userInfo.url)
                    .then(() => { })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                if (err) {
                    setRegisterError(err)
                }
                else {
                    setRegisterError('')
                }
                console.log(err)
            })
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
        <div className='flex justify-center my-10'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border border-gray-900 shadow-xl shadow-black dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onClick={handleRegister} novalidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <p className='text-red-600'>{registerError?.message}</p>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Name</label>
                        <input onChange={handleInput} type="text" name='name' placeholder="name" className="w-full px-4 py-3 border border-black rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Image</label>
                        <input onChange={handleInput} type="url" name='url' placeholder="image-url" className="w-full px-4 py-3  border border-black rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Email</label>
                        <input onChange={handleInput} type="email" name='email' placeholder="email" className="w-full px-4 py-3  border border-black rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input onChange={handleInput} type="password" name='password' placeholder="password" className="w-full px-4 py-3  border border-black rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <button type='submit' className="btn btn-info block w-full p-3 text-center rounded-lg dark:text-gray-900 dark:bg-violet-400">Register</button>
                </form>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                    <Link to="/login" className='underline'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;