import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import Contact from '../../Shared/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Info from '../Info/Info';

const ContactPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Info></Info>
            <Contact></Contact>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default ContactPage;