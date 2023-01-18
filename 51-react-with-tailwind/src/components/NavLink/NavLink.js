import React from 'react';

const NavLink = ({ route }) => {
    return (
        <li className='text-center p-2'><a href={route.path} alt={route.name}>{route.name}</a></li>
    );
};

export default NavLink;