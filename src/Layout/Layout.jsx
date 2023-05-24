import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../sheared/Header/Header';
import Footer from '../sheared/Footer/Footer';

const Layout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;