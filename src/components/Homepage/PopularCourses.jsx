import Image from 'next/image';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PopularCourses = () => {
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
                {[...Array(5)].map((_, index) => (
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
                            <h2 className="card-title">Course {index + 1}</h2>
                            <p>If a dog chews shoes, whose shoes does he choose?</p>
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
