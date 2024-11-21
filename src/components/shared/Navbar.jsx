import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 w-full h-[68px] z-50 px-4">
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
                        <li><a>Item 9</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Pinemesh</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Courses</summary>
                            <ul className="p-2">
                                <li><a>Frontend Developer</a></li>
                                <li><a>Backend Developer</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Instructors</summary>
                            <ul className="p-2">
                                <li><a>Elon Mask</a></li>
                                <li><a>Mark</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Blogs</summary>
                            <ul className="p-2">
                                <li><a>Blog 1</a></li>
                                <li><a>Blog 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className='text-3xl text-primary mr-4'>
                    <HiOutlineShoppingBag />
                </a>
                <a className="btn btn-primary">Login</a>
            </div>
        </div>
    );
};

export default Navbar;
