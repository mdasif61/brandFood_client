import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Main = () => {
    return (
        <div className='md:w-[85%] w-full mx-auto md:p-10 p-5'>
            <Header></Header>
            <div className='min-h-[calc(100vh-90px)] w-full'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;