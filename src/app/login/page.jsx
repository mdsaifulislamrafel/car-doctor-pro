import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';

const page = () => {
    return (
        <div className='container mx-auto py-24'>
            <div className='grid grid-cols-2 gap-12'>
                <div>
                    <Image alt='Login image' src={'/assets/images/login/login.svg'} height='540' width='540' />
                </div>
                <div className='border-2 p-20'>
                    <h6 className='text-3xl font-semibold text-center mb-12 text-primary'>Sign in</h6>
                    <form className='flex flex-col space-y-4' >
                        <label htmlFor="email">Email</label>

                        <input type="email" placeholder="Your email" name='email' className="input input-bordered w-full" />
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Your password" name='password' className="input input-bordered w-full" />

                        <button className='btn btn-primary'>Sign in</button>
                    </form>
                    <div className='text-center mt-5 space-y-3'>
                        <h6>Or Sign In with</h6>
                        <div className='space-x-5'>
                            <button className='btn btn-outline border-2 bg-[#F5F5F8]  w-14 rounded-full h-14'><FaFacebook className='text-[#3B5998] text-2xl' /></button>
                            <button className='btn btn-outline border-2 bg-[#F5F5F8]  w-14 rounded-full h-14'><FaLinkedin className='text-[#0A66C2] text-2xl' /></button>
                            <button className='btn btn-outline border-2 bg-[#F5F5F8] w-14 rounded-full h-14'><FaGoogle className='text-[#0F9D58] text-2xl' /></button>
                        </div>
                        <p>Have an account? Sign up</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;