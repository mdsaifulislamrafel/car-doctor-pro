import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCartPlus, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const navItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ];
    return (
        <div className='bg-base-100 text-slate-900'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <Image alt='logo' src="/assets/logo.svg" width={60} height={100} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center space-x-6'>
                        {
                            navItems.map((item, index) => {
                                return (
                                    <Link className='font-semibold hover:text-primary duration-300' key={index} href={item.path}>
                                        {item.title}
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="navbar-end space-x-5">
                    <FaCartPlus className='w-6 h-6' />
                    <FaSearch className='w-6 h-6' />
                    <button className="btn btn-outline btn-primary px-8">Appointment</button>
                    <Link href={'/login'}><button className="btn btn-primary px-8">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;