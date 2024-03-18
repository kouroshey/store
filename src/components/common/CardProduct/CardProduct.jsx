import React from 'react';
import './CardProduct.css';
import { RiRefreshLine } from 'react-icons/ri';
import { FaRegHeart, FaStar, FaRegStar } from 'react-icons/fa';
import ImageProduct from "../../../../public/assets/img/featured-products/02.png"

import { FaCartShopping } from 'react-icons/fa6';
import { FiZoomIn } from 'react-icons/fi';
import { Button } from '../Button';
const CardProduct = () => {
  return (
    <div className=" w-56 flex flex-col py-2 px-3 gap-2  hover:bg-dark-1 h-[335px] [&>:nth-child(4)]:hover:flex [&>:nth-child(1)>:nth-child(1)]:hover:flex hover:shadow-lg">
      {/* LIKE AND COMPIRE ------------------------------------*/}
      <div className="flex gap-3 justify-end  ">
        <div className="  transition-all items-center text-[0.6rem] gap-1 hidden hover:text-white cursor-pointer  [&>:nth-child(1)]:hover:rotate-90  ">
          <div>
            <RiRefreshLine className="text-[0.8rem]" />
          </div>
          Compare
        </div>
        <div className="bg-[#f9f9f93a] p-1  rounded-2xl w-min ">
          <FaRegHeart className=" transition-all p-[0.1rem] text-slate-400 hover:text-slate-50" />
        </div>
      </div>
      {/* IMAGE PRODUCT------------------------------------**/}
      <div className="">
        <img src={ImageProduct} alt="image-product" />
      </div>
      {/* TEXT AND PRICE  ------------------------------------* */}
      <div className="flex flex-col gap-1">
        <div className="text-[0.7rem]">Category Name</div>
        <div className="text-[0.7rem] font-medium text-white">Product Short Name</div>
        <div className="flex items-center gap-1">
          <div className="flex justify-between w-full">
            <div className="flex gap-1">
              <p className="text-[0.65rem]">
                <s>$99.05</s>
              </p>
              <p className="text-xs font-medium text-white">$44.00</p>
            </div>
            <div className="flex gap-[0.1rem] ">
              <FaStar className="w-3" />
              <FaStar className="w-3" />
              <FaStar className="w-3" />
              <FaRegStar className="w-3" />
              <FaRegStar className="w-3" />
            </div>
          </div>
        </div>
      </div>
      {/* BUTTON  ------------------------------------**/}
      <div className="= flex-col gap-2 hidden transition-all">
        <Button iconBtn={<FaCartShopping />} textBtn={'Add to Cart'} btnEffect={true} />
        <Button iconBtn={<FiZoomIn />} textBtn={'Quick View'} btnEffect={false} />
      </div>
    </div>
  );
};

export default CardProduct;
