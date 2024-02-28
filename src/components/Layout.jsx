// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div className="bg-image bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('./assets/mainBg.png')" }}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
