import React from 'react';
import { FaRegHeart, FaStar, FaRegStar } from 'react-icons/fa';
import imgSample from '../../../public/assets/img/featured-products/02.png';

const ProductCardList = () => {
  return (
    <div>
      <div className="flex flex-row h-28 py-2   ">
        <div>
          <img className="h-24" src={imgSample} alt="" />
        </div>
        <div className="flex  flex-col gap-1">
          <div className="font-medium text-slate-100">Product Short Name</div>
          <div className="flex text-slate-100">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="font-semibold text-slate-100">$59.00</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardList;
