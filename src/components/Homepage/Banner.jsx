import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#F0F1EE]'>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
      src="/banner.png" alt='banner image'
      className="max-w-sm rounded-lg shadow-2xl" width='500' height="500"/>
    <div className='w-2/4 mx-auto'>
      <h1 className="text-5xl font-bold ">#1 Platform Powering Health and Wellness</h1>
      <h5 className="pt-5 pb-2 font-medium">
       We’re restoring home as the primary place of personal well-being
      </h5>
      <p className="">
      Health is not just about what you're eating. It's also about what you're thinking and saying
      </p>
        <div>
          <button className="btn btn-primary mr-4">Browse Courses</button>
            <button className="btn btn-outline text-primary">Get Started</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
