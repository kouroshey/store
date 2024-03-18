/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from '../Button';
import imgSample from '../../../assets/images/02.png';

const CardSlide = () => {
  return (
    <div className="flex  w-full h-full  justify-center gap-32">
      <div className="flex flex-col gap-2  justify-center">
        <div className="text-xl font-medium  text-white">Complete your look with</div>
        <h2 className="text-3xl font-semibold text-white">Huge Summer Collection</h2>
        <p className="text-xs">Hats & Caps, Sunglasses, Bags & much more...</p>
        <div className="w-24 mt-2">
          <Button btnEffect={true} textBtn={'SHOP NOW'} />
        </div>
      </div>
      <div className="flex py-10">
        <img src={imgSample} alt="" />
      </div>
    </div>
  );
};

export default CardSlide;
