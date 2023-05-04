import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { ReactNotifications } from 'react-notifications-component';
import "react-notifications-component/dist/theme.css";

const Main = () => {
    return (
        <div>
            <ReactNotifications/>
            <Header></Header>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;