/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import mainBg from "../../public/assets/img/1.png"

const Layout = ({ children }) => {
  const sectionStyle = {
    backgroundImage: `url('${mainBg}')`,
  };
  return (
    <div className="bg-image bg-cover bg-no-repeat bg-center bg-fixed" style={sectionStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
