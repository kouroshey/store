/* eslint-disable no-unused-vars */
/* eslint-disable no-sparse-arrays */
/* eslint-disable react/jsx-key */
import React from 'react';
import Carousel from '../Carousel-img';
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
