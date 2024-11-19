import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[#F0F1EE] border border-2 border-black">
            <div className="p-8">
                <div className="flex gap-10">
                    <div>
                        <h1 className="text-5xl font-bold">#1 Platform Powering Health and Wellness</h1>
                        <h5 className="pt-5 pb-2 font-medium">
                            We’re restoring home as the primary place of personal well-being
                        </h5>
                        <p>
                            Health is not just about what you're eating. It's also about what you're thinking and saying
                        </p>
                        <div>
                            <button className="btn btn-primary mr-4">Browse Courses</button>
                            <button className="btn btn-outline text-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="relative" style={{ width: "650px" }}>
                        
                        <Image
                            src="/banner.png"
                            alt="banner image"
                            width={650}
                            height={600}
                            className=""
                        />
                        <div
                            className="absolute bottom-0 left-0 m-1 flex flex-col  bg-[#EED9C9] rounded-lg"
                        >
                            {/* Use w-full to match the image width */}
                            <div className="flex gap-3 px-8 py-4 ">
                                <h3 className="text-4xl font-bold">12,000+</h3>
                                <div className="divider divider-horizontal"></div>
                                <p className="w-1/2">Happy learners rely on us regularly</p>
                            </div>
                            <div className="flex flex-row gap-8 bg-white px-8 py-4 rounded-lg">
                                <h5>Find your wellbeing</h5>
                                <p>
                                    By prioritizing self-care and making informed choices, one can enhance their overall
                                    quality of life
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
