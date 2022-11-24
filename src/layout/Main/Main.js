import React from 'react';
import Navbar from '../../Shered/Navbar/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from '../../Shered/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;