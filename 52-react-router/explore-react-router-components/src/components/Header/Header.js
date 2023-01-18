import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div style={{ margin: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', }}>
            <NavLink className={({ isActive }) => isActive ? 'Active' : undefined} to='/home'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Active' : undefined} to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Active' : undefined} to='/countries'>Countries</NavLink>
        </div>
    );
};

export default Header;