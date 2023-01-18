import React from 'react';
import RightArrow from '../../../assets/icons/arrow-right.svg';

const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-red-500 font-semibold text-lg'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary btn-outline btn-circle btn-sm"></button> */}
                    <img className="w-5 text-res-500 cursor-pointer" src={RightArrow} alt="arrow right" />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;