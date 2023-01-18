import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Main = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-6 my-8'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;