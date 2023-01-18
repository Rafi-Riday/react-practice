import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my Rest Countries</h1>
            <nav>
                <a href="/Home">Home</a>
                <a href="/More">More</a>
                <a href="/Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;