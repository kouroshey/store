/* eslint-disable react/jsx-key */
import React from 'react';
import Carousel from '../Carousel-img';
import imgSample from '../../../assets/images/02.png';
import CardSlide from './CardSlide';

const ImageSlider = () => {
  const slides = [<CardSlide />, <CardSlide />, <CardSlide />, , <CardSlide />, <CardSlide />, <CardSlide />];

  return (
    <div className=" h-96 w-full ">
      <Carousel slides={slides} />
    </div>
  );
};

export default ImageSlider;
