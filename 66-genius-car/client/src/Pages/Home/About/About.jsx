import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row items-stretch">
                <div className='relative w-1/2 hidden lg:block'>
                    <img src={person} className="absolute top-0 left-0 h-5/6 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute bottom-0 right-0 h-4/6 rounded-lg shadow-2xl border-8 border-white" />
                </div>
                <div className='w-1/2'>
                    <p className='font-semibold text-red-500'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br />
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn bg-red-500 hover:bg-red-500 text-white border-0 rounded">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;