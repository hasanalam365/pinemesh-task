"use client";
import Image from 'next/image';
import React from 'react';
// import { Rating } from '@smastrom/react-rating';

// import '@smastrom/react-rating/style.css';
import { ImLeaf } from "react-icons/im";

const Banner = () => {
    return (
        <div className="bg-[#F0F1EE] py-8 sm:py-12">
            <div className="px-4 sm:px-8">
                <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10">
                 
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center gap-2 mb-5">
                            {/* <Rating style={{ maxWidth: 130 }} value={4.52} readOnly /> */}
                            <p className="font-medium">4.9 (560)</p>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold w-full md:w-3/4">
                            #1 Platform Powering Health and Wellness
                        </h1>
                        <h5 className="pt-5 pb-2 font-medium w-full md:w-3/4">
                            We are restoring home as the primary place of personal well-being
                        </h5>
                        <p className="w-full md:w-3/4">
                            Health is not just about what you are eating. It is also about what you are thinking and saying.
                        </p>
                        <div className="mt-4 flex justify-center md:justify-start gap-4">
                            <button className="btn btn-primary">Browse Courses</button>
                            <button className="btn btn-outline text-primary">Get Started</button>
                        </div>
                    </div>

                
                    <div className="relative">
                  
                        <Image
                            src="/banner.png"
                            alt="banner image"
                            width={500}
                            height={500}
                            className="w-full object-cover"
                        />

                     
                        <div className="absolute bottom-0 left-0 m-2 flex flex-col mr-3 bg-[#EED9C9] rounded-lg shadow-lg">
                            <div className="flex gap-3 px-4 py-3 sm:px-8 sm:py-4">
                                <h3 className="text-2xl sm:text-3xl font-bold">12,000+</h3>
                                <div className="divider divider-horizontal"></div>
                                <p className="text-sm sm:text-base">Happy learners rely on us regularly</p>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row sm:gap-8 bg-white px-4 py-3 sm:px-8 sm:py-4 rounded-lg">
                                <h5 className="text-sm sm:text-base">Find your wellbeing</h5>
                                <p className="text-xs sm:text-sm">
                                    By prioritizing self-care and making informed choices, one can enhance their overall
                                    quality of life.
                                </p>
                            </div>
                        </div>

                      
                        <div className="absolute top-10 sm:top-20 sm:left-0 md:-left-6  bg-[#287279] p-[10px] rounded-full border-8 border-white">
                            <ImLeaf className="text-xl sm:text-2xl text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
