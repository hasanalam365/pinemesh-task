'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { PiShieldCheckFill } from "react-icons/pi";

const ProvideSection = () => {
   
    const [isOpenService, setIsOpenService] = useState(0);
    
    const allServices=[
                    { id: 1, title: "Personalized routine", content: "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively." },
                    { id: 2, title: "Follow-up after completing courses", content: "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively." },
                    { id: 3, title: "Access to additional resources", content: "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively." },
                    { id: 4, title: "Free community support", content: "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively." }
                ]

    return (
        <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-8 mx-8 mt-16">
            {/* Left Section */}
            <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-8">We provide....</h2>
 <div className="">
                  
                        </div>
                {/* Accordion Items */}
                {allServices.map((service, index) => (
                    <div key={service.id} className={`collapse bg-base-200 ${index > 0 ? 'mt-3' : ''} `}
                    onClick={()=>setIsOpenService(index)}>
                        <input
                            type="radio"
                            name="my-accordion-1"
                            defaultChecked={index === 0}
                        />
                        <div className="collapse-title text-xl font-medium flex items-center gap-4">
                            <FaCircleCheck className={`${isOpenService=== index? 'text-[#9998E1]' : ''}`} />
                            <h4>{service.title}</h4>
                        </div>
                        <div className="collapse-content">
                            <p>{service.content}</p>
                        </div>
                    </div>
                ))}

                {/* Learn More Button */}
                <button className="btn btn-outline text-primary mt-5 rounded-full">
                    Learn more about our services
                </button>
            </div>

            {/* Right Section */}
            <div className='relative  '>
                <Image src="/provide.png" alt="Provide Image" width={450} height={350}  className="w-full object-cover"/>
                <div className='absolute top-20 -left-8 bg-[#287279] p-2 rounded-full border-8 border-white'>
                    <PiShieldCheckFill className='text-xl text-white'/>
                </div>
            </div>
        </div>
    );
};

export default ProvideSection;
