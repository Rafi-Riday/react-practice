import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavLink onClick={() => navigate(-1)}>Back</NavLink>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '1rem', }}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/phones'>Phones</NavLink>
            </div>
        </div>
    );
};

export default Header;