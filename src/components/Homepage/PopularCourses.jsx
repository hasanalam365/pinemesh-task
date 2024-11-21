import Image from 'next/image';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { MdMenuBook } from "react-icons/md";
import { CiStopwatch } from "react-icons/ci";
import { TbCircleCheckFilled } from "react-icons/tb";

const courses = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/courses.json`);

    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    const data = await res.json();
    return data;
};

const PopularCourses = async () => {
    const allCourses = await courses();

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
                {allCourses.map((course, index) => (
                    <div key={index} className="card card-compact bg-base-100 shadow-xl hover:bg-[#dbdbf186]">
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
                            {/* Course Type Badges */}
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

                            {/* Course Title */}
                            <h2 className="card-title">{course.title}</h2>

                            {/* Rating and Reviews */}
                            <div className="flex items-center gap-2 mb-5">
                                <Rating style={{ maxWidth: 110 }} value={course.rating} readOnly />
                                <p className="font-medium">
                                    {course.rating} <span>({course.review})</span>
                                </p>
                            </div>

                            {/* Course Duration and Lessons */}
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

                            {/* Author and Cost */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="w-[50px] rounded-full">
                                            <Image
                                                src="/one.png"
                                                width={50}
                                                height={50}
                                                alt="Author profile"
                                            />
                                        </div>
                                    </div>
                                    <h5 className="text-lg font-medium">{course.author.name}</h5>
                                </div>
                               
                                {
  course.author.cost === "enrolled" ? (
                                        <div className='flex items-center justify-center gap-1 bg-[#F2F2F2] border-2  border-gray-400 border-opacity-75 p-1 rounded-lg '>
                                             <TbCircleCheckFilled className="inline-block text-gray-500" />
                                            <h5 className="text-lg font-medium">
                                                 {course.author.cost}
                                            </h5>
                                            
   </div>
  ) : (
    <h5 className="text-lg font-medium">{course.author.cost}</h5>
  )
}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;
