import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-[#d7d7e9] '>
            <footer className="footer flex justify-evenly p-10">
               
                <nav>
                    <h6 className="text-lg opacity-75">Categories</h6>
                    <a className="hover:underline hover:cursor-pointer">Nutrition and diet</a>
                    <a className="hover:underline hover:cursor-pointer">Fitness training</a>
                    <a className="hover:underline hover:cursor-pointer">Mindfulness</a>
                    <a className="hover:underline hover:cursor-pointer">Mental health</a>
                    <a className="hover:underline hover:cursor-pointer">Personal growth</a>
                    <a className="hover:underline hover:cursor-pointer">Social well-being</a>
                </nav>
                <nav>
                    <h6 className="text-lg opacity-75">About</h6>
                    <a className="hover:underline hover:cursor-pointer">About us</a>
                    <a className="hover:underline hover:cursor-pointer">Our partners</a>
                    <a className="hover:underline hover:cursor-pointer">Investors</a>
                    <a className="hover:underline hover:cursor-pointer">Career</a>
                </nav>
                <nav>
                    <h6 className="text-lg opacity-75">Resources</h6>
                    <a className="hover:underline hover:cursor-pointer">FAQ</a>
                    <a className="hover:underline hover:cursor-pointer">Refund policies</a>
                    <a className="hover:underline hover:cursor-pointer">Terms and conditions</a>
                    <a className="hover:underline hover:cursor-pointer">Cookie</a>
                    <a className="hover:underline hover:cursor-pointer">Latest posts</a>
                </nav>
                <nav>
                    <h6 className="text-lg opacity-75">Support</h6>
                    <a className="hover:underline hover:cursor-pointer">Get in touch</a>
                    <a className="hover:underline hover:cursor-pointer">Visit our forum</a>
                </nav>
            </footer>
            <div className='mx-48 pb-16'>
                 <div className=" border-dashed border-b-2 border-gray-400 mb-3"></div>
            <div className='flex items-center justify-between'>
                <h4 className='text-xl font-medium'>Join our official channels</h4>
                <div className='flex items-center justify-center gap-3'>
                    <AiFillInstagram className='text-2xl'/>
                    <FaSquareXTwitter className='text-2xl'/>
                    <FaFacebook className='text-2xl'/>
                    <BsDiscord className='text-2xl'/>
                </div>
            </div>
                <div className=" border-dashed border-b-2 border-gray-400 my-3"></div>
              <p className='opacity-75'>  ©2024 EduPath. All rights reserved</p>
           </div>

        </div>
    );
};

export default Footer;
