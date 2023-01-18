import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <NavLink className={({ isActive }) => isActive ? 'Active' : undefined} to='/home'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Active' : undefined} to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Active' : undefined} to='/products'>Products</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Active' : undefined} to='/friends'>Friends</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Active' : undefined} to='/posts'>Posts</NavLink>
        </div>
    );
};

export default Header;