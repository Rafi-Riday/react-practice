import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='p-4 sm:p-8 lg:p-10'>
            <div className='flex flex-col gap-4'>
                <Banner />
                <About />
                <Services />
            </div>
        </div>
    );
};

export default Home;