import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <header>
            <NavBar />
            <h1 className='text-3xl text-center mt-2'>This is New Tailwind + React</h1>
        </header>
    );
};

export default Header;