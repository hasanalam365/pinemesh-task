'use client';

import Image from 'next/image';
import React from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';

const reviews = [
  {
    profile: "/profile-one.png",
    name: "Emily Johnson",
    description: "I love the interactive elements and the community forums where I can connect with other learners."
  },
  {
    profile: "/profile-one.png",
    name: "Michael Brown",
    description: "The courses are well-structured, and the additional resources are incredibly helpful for mastering the material."
  },
  {
    profile: "/profile-one.png",
    name: "Sophia Williams",
    description: "The personalized routine feature has made my learning journey so much more efficient and enjoyable."
  },
  {
    profile: "/profile-one.png",
    name: "James Davis",
    description: "I appreciate the follow-up sessions after completing the courses. It helps reinforce what I’ve learned."
  },
  {
    profile: "/profile-one.png",
    name: "Olivia Martinez",
    description: "The instructors are knowledgeable and approachable, making complex topics easy to understand."
  },
  {
    profile: "/profile-one.png",
    name: "William Garcia",
    description: "The platform’s user interface is intuitive and makes the learning process seamless and enjoyable."
  },
  {
    profile: "/profile-one.png",
    name: "Ava Rodriguez",
    description: "Access to additional resources has been a game changer for my skill development journey."
  },
  {
    profile: "/profile-one.png",
    name: "Noah Wilson",
    description: "The free community support has been invaluable in helping me solve challenges and stay motivated."
  },
  {
    profile: "/profile-one.png",
    name: "Isabella Anderson",
    description: "I’ve tried several platforms, but this one stands out for its focus on practical skills and community engagement."
  },
  {
    profile: "/profile-one.png",
    name: "Liam Thomas",
    description: "The ability to connect with other learners and share experiences has made the journey much more enriching."
  }
];

const Testimonials = () => {
  return (
    <div className="mt-16 px-4 lg:px-8 mb-10">
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-center mb-10 w-1/2 mx-auto">
       Learners love EduPath. See why they rate us 4.9 out of 5
      </h2>

      {/* Swiper Testimonials */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="w-full shadow-xl p-6 bg-[#d1d0f8] rounded-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between">
                {/* Profile Section */}
                <div>
                  <div className="avatar">
                    <div className="w-[50px] rounded-full">
                      <Image
                        src={review.profile}
                        width={50}
                        height={50}
                        alt={`${review.name}'s profile`}
                      />
                    </div>
                  </div>
                  <h6 className="text-lg font-medium mt-2">{review.name}</h6>
                </div>

                {/* Quote Icon */}
                <BiSolidQuoteLeft className="text-3xl text-[#9290d4]" />
              </div>

              {/* Review Description */}
              <p className="mt-5 text-sm text-gray-700">{review.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
