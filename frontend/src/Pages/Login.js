
import React from 'react'

const Login = () => {
    return (
        <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
            <div className='w-[350px] text-[#d0d2d6] p-2'>
                <div className='bg-[#283046] p-4 rounded-md'>
                    <div className='h-[70px] flex justify-center items-center'>
                        <div className='w-[180px] h-[50px]'>
                            <img className='w-full h-full' src='' alt='logo' />
                        </div>
                    </div>
                    <form>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' name='email' placeholder='email' id='email' required />
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-5'>
                            <label htmlFor='password'>Password</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='password' name='password' placeholder='password' id='password' required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
