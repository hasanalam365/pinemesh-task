import React from 'react';
import Banner from './Banner';
import PopularCourses from './PopularCourses';
import ProvideSection from './ProvideSection';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <ProvideSection></ProvideSection>
        </div>
    );
};

export default Homepage;