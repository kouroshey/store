import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
const Rating = ({ rate }) => {
  return (
    <div className="flex  w-min ">
      <div className="flex relative ">
        {[...Array(5)].map((val, index) => {
          return <FaStar key={index} color="#ffffff5a" />;
        })}
      </div>

      <div className="flex absolute ">
        {[...Array(rate)].map((val, index) => {
          return <FaStar key={index} color="yellow" />;
        })}
      </div>
    </div>
  );
};

export default Rating;
