// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CardProduct from './common/CardProduct/CardProduct';
import CardCategory from './common/CardCategory/CardCategory';
import ProductCardList from './common/ProductCardList/ProductCardList';
import ImageSlider from './common/ImageSlider/ImageSlider';
import CardSlide from './common/ImageSlider/CardSlide';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="bg-image bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('./assets/mainBg.png')" }}>
      <Header />
      <ImageSlider />
      <div className="flex w-full justify-around">
        {<CardCategory />}
        {<CardCategory />}
        {<CardCategory />}
        {<CardCategory />}
        {<CardCategory />}
        {<CardCategory />}
        {<CardCategory />}
        {<CardCategory />}
        {<CardCategory />}
      </div>

      <div className="flex  mt-1 w-full justify-around mb-1">
        <ProductCardList />
        <ProductCardList />
        <ProductCardList />
        <ProductCardList />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
