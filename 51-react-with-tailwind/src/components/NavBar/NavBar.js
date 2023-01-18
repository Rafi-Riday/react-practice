import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: './Home' },
        { id: 2, name: 'Products', path: './Products' },
        { id: 3, name: 'Contact', path: './Contact' },
        { id: 4, name: 'About', path: './About' },
    ];
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    return (
        <nav className='w-full bg-violet-300 py-3'>
            <button onClick={() => setIsNavBarOpen(!isNavBarOpen)} className='md:hidden'>
                {
                    isNavBarOpen ? <XMarkIcon className='w-6 h-6 ml-3' /> : <Bars3Icon className='w-6 h-6 ml-3' />
                }
            </button>
            <ul className={`w-full bg-violet-300 p-2 md:flex md:justify-center md:gap-4 md:static absolute duration-300 ease-out ${isNavBarOpen ? 'top-12' : 'top-[-200px]'}`}>
                {
                    routes.map(route => <NavLink key={route.id} route={route} />)
                }
            </ul>
        </nav>
    );
};

export default NavBar;