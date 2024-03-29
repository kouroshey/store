import React from 'react';
import Rating from '../../Rating';

const CardComment = () => {
  return (
    <div className="flex space-x-4 px-3 py-5 pb-4 border-b border-[#e9e8e82e] ">
      <div>
        <div className="w-14 h-14 border rounded-full flex justify-center items-center border-[#e9e8e815]">
          <img src={''} alt="" />
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div>
          <Rating rate={2} />
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-base font-bold">James Caviness</h1>
          </div>
          <div>February 16, 2021</div>
        </div>
        <div className="text-sm">
          Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
          synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
        </div>
      </div>
    </div>
  );
};

export default CardComment;
