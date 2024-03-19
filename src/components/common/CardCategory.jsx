import React from 'react';
import imgSample from "../../../../public/assets/img/featured-products/02.png"

const CardCategory = () => {
  return (
    <div>
      <div className="bg-dark-1 w-44 border bottom-0 border-[#cfcfcf3f]">
        <div className=" p-2">
          <img src={imgSample} alt="" />
        </div>
        <div className="flex flex-col justify-center  items-center border bottom-0 border-[#cfcfcf3f]  p-1">
          <div className="text-slate-100 font-semibold">SPORT</div>
          <div className="text-xs font-medium">29 PRODUCT</div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
