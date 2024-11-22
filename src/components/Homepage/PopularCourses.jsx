'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { Rating } from '@smastrom/react-rating';
// import '@smastrom/react-rating/style.css';
import { MdMenuBook } from "react-icons/md";
import { CiStopwatch } from "react-icons/ci";
import { TbCircleCheckFilled } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";

const PopularCourses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [visibleIndex, setVisibleIndex] = useState(0); 
    const visibleCount = 4; 
    
    
    useEffect(() => {
        const fetchCourses = async () => {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
            try {
                const res = await fetch(`${baseUrl}/courses.json`);
                if (!res.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await res.json();
                setAllCourses(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCourses();
    }, []);

    
    const handleNext = () => {
        if (visibleIndex + visibleCount < allCourses.length) {
            setVisibleIndex(visibleIndex + 1); 
        }
    };

    const handlePrev = () => {
        if (visibleIndex > 0) {
            setVisibleIndex(visibleIndex - 1); 
        }
    };

    return (
        <div className="mt-8 px-8 space-y-4">
          
            <h3 className="text-3xl font-semibold">Our Popular Courses</h3>

          
            <div className="flex items-center justify-between">
                <p className="w-[65%]">
                    By taking proactive steps to nurture mental health, we can enhance our quality of life, 
                    build resilience, and foster a sense of inner peace and balance.
                </p>
                <div className="flex items-center gap-5">
                    <IoIosArrowBack 
                        className={`text-3xl cursor-pointer ${visibleIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                        onClick={handlePrev} 
                    />
                    <IoIosArrowForward 
                        className={`text-3xl cursor-pointer ${
                            visibleIndex + visibleCount >= allCourses.length ? 'opacity-50 cursor-not-allowed' : ''
                        }`} 
                        onClick={handleNext} 
                    />
                </div>
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {allCourses
                    .slice(visibleIndex, visibleIndex + visibleCount)
                    .map((course, index) => (
                        <div
                            key={index}
                            className="card card-compact bg-base-100 shadow-xl group relative hover:bg-[#dbdbf186] hover:border-2 hover:border-[#a1a1d4]"
                        >
                       
                            <figure className="relative">
                                <Image
                                    src="/one.png"
                                    alt="Course card"
                                    width={350}
                                    height={300}
                                    className="object-cover"
                                />
                           
                                <div className="absolute top-3 right-3 flex justify-end gap-4 opacity-0 group-hover:opacity-100 bg-opacity-30 transition-opacity">
                                    <button className="p-2 bg-white rounded-full shadow-md">
                                        <PiShoppingCartSimple className="text-xl text-gray-700" />
                                    </button>
                                    <button className="p-2 bg-white rounded-full shadow-md">
                                        <FiHeart className="text-xl text-red-500" />
                                    </button>
                                </div>
                            </figure>

                        
                            <div className="card-body">
                       
                                <div className="flex gap-3">
                                    {course.coursesType.map((courseType, idx) => (
                                        <button
                                            key={idx}
                                            className={`${
                                                idx === 0 ? "bg-[#FFF5E6]" : "bg-[#F5FAD6]"
                                            } py-1 px-2 rounded-lg`}
                                        >
                                            {courseType}
                                        </button>
                                    ))}
                                </div>

                         
                                <h2 className="card-title">{course.title}</h2>

                           
                                <div className="flex items-center gap-2 mb-5">
                                    {/* <Rating style={{ maxWidth: 110 }} value={course.rating} readOnly /> */}
                                    <p className="font-medium">
                                        {course.rating} <span>({course.review})</span>
                                    </p>
                                </div>

                             
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-2">
                                        <CiStopwatch className="text-xl text-[#9998E1]" />
                                        <p>{course.courseDuration}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <MdMenuBook className="text-xl text-[#9998E1]" />
                                        <p>{course.totalLessons}</p>
                                    </div>
                                </div>

                                <div className="divider"></div>

                            
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="avatar">
                                            <div className="w-[40px] rounded-full">
                                                <Image
                                                    src="/one.png"
                                                    width={40}
                                                    height={40}
                                                    alt="Author profile"
                                                />
                                            </div>
                                        </div>
                                        <h5 className="text-lg font-medium">{course.author.name}</h5>
                                    </div>
                                    {course.author.cost === "enrolled" ? (
                                        <div className="flex items-center justify-center gap-1 bg-[#F2F2F2] border-2 border-gray-400 border-opacity-75 p-1 rounded-lg">
                                            <TbCircleCheckFilled className="inline-block text-gray-500" />
                                            <h5 className="text-lg font-medium">{course.author.cost}</h5>
                                        </div>
                                    ) : (
                                        <h5 className="text-lg font-medium">{course.author.cost}</h5>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default PopularCourses;
