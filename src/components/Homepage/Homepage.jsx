import React from 'react';
import Banner from './Banner';
import PopularCourses from './PopularCourses';
import ProvideSection from './ProvideSection';
import Testimonials from './Testimonials';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <ProvideSection></ProvideSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Homepage;