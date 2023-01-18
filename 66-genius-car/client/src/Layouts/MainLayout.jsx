import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='grow'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;