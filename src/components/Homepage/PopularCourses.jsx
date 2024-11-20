import Image from 'next/image';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { MdMenuBook } from "react-icons/md";
import { CiStopwatch } from "react-icons/ci";

const courses = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; 
    const res = await fetch(`${baseUrl}/courses.json`);
  
    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    const data = await res.json();
    return data;
};


const PopularCourses = async() => {

    const allCourses = await courses()
    console.log(allCourses.rating)

    return (
        <div className="mt-8 px-8 space-y-4">
            {/* Section Heading */}
            <h3 className="text-3xl font-semibold">Our Popular Courses</h3>

            {/* Section Description and Navigation */}
            <div className="flex items-center justify-between">
                <p className="w-[65%]">
                    By taking proactive steps to nurture mental health, we can enhance our quality of life, 
                    build resilience, and foster a sense of inner peace and balance.
                </p>
                <div className="flex items-center gap-5">
                    <IoIosArrowBack className="text-3xl cursor-pointer" />
                    <IoIosArrowForward className="text-3xl cursor-pointer" />
                </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                { allCourses.map((course, index) => (
                    <div key={index} className="card card-compact bg-base-100 shadow-xl">
                        {/* Card Image */}
                        <figure>
                            <Image
                                src="/one.png"
                                alt="Course card"
                                width={350}
                                height={300}
                                className="object-cover"
                            />
                        </figure>

                        {/* Card Body */}
                        <div className="card-body">
                          <div className='flex  gap-3 '>
    {
        course.coursesType.map((courseType, idx) => (
            <button key={idx} className={`${idx==0? "bg-[#FFF5E6]": "bg-[#F5FAD6]"} py-1 px-2 rounded-lg `}>
                {courseType}
            </button>
        ))
    }
</div>

                           
                            <h2 className="card-title">{course.title}</h2>
                             <div className='flex items-center  gap-2 mb-5'>
                 <Rating
      style={{ maxWidth: 110 }}
      value={course.rating}
      readOnly
                                />
                            <p className='font-medium'>{course.rating} <span>({course.review})</span></p>  
   
             </div>
                            <div>
                                <CiStopwatch />
                                <MdMenuBook />
                           </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;
