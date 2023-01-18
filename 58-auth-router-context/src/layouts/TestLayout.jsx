import React from 'react';
import { Outlet } from 'react-router-dom';

const TestLayout = () => {
    return (
        <div>
            <div>123</div>
            <Outlet />
            <div>456</div>
        </div>
    );
};

export default TestLayout;