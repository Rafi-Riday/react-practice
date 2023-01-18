import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-6'>
            <NavLink className={({ isActive }) => isActive ? 'btn btn-info btn-sm rounded-md' : 'btn btn-info btn-sm btn-outline rounded-md'} to='/home'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'btn btn-info btn-sm rounded-md' : 'btn btn-info btn-sm btn-outline rounded-md'} to='/orders'>Orders</NavLink>
        </div>
    );
};

export default Header;