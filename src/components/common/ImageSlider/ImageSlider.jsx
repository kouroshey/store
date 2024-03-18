/* eslint-disable no-unused-vars */
/* eslint-disable no-sparse-arrays */
/* eslint-disable react/jsx-key */
import React from 'react';
import Carousel from '../Carousel-img';
import CardSlide from './CardSlide';
import { mainSliderDatas } from '../../../data';

const ImageSlider = () => {
  // const slides = [<CardSlide />, <CardSlide />, <CardSlide />, , <CardSlide />, <CardSlide />, <CardSlide />];
  const slides = mainSliderDatas.map(slide => (
    <CardSlide
      key={slide.id}
      title={slide.title}
      subtitle={slide.subTitle}
      desc={slide.desc}
      url={slide.url}
      img={slide.img}
    />
  ))

  return (
    <div className=" h-96 w-full ">
      <Carousel slides={slides} />
    </div>
  );
};

export default ImageSlider;
