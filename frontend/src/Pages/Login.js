
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/auth.reducers'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(loginUser(credentials));

        if (loginUser.fulfilled.match(result)) {
            navigate('/dashboard')
        }
    };

    return (
        <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
            <div className='w-[350px] text-[#d0d2d6] p-2'>
                <div className='bg-[#283046] p-4 rounded-md'>
                    <div className='h-[70px] flex justify-center items-center'>
                        <div className='w-[180px] h-[50px]'>
                            <img className='w-full h-full' src='' alt='logo' />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input
                                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
                                type='text'
                                name='email'
                                placeholder='email'
                                id='email'
                                value={credentials.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-5'>
                            <label htmlFor='password'>Password</label>
                            <input
                                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
                                type='password'
                                name='password'
                                placeholder='password'
                                id='password'
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <p className='text-red-500 text-sm mb-3'>{error}</p>}
                        <button
                            type='submit'
                            className='w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200'
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
