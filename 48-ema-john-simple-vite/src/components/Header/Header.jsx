import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <img src={Logo} alt="logo" />
            <nav className='nav'>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '', })} to="./shop">Shop</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '', })} to="./orders">Order Review</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '', })} to="./inventory">Manage Inventory</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '', })} to="./about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;