import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-image bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('./assets/mainBg.png')" }}>
      {/* <Header /> */}
      <Footer />
      {children}
    </div>
  );
};

export default Layout;
