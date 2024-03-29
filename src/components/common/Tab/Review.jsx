import React from 'react';
import FormComment from './Comment/FormComment';
import CardComment from './Comment/CardComment';

const Review = () => {
  return (
    <div className="flex py-3 px-3 space-x-5 h-full">
      <div className="flex flex-[2] flex-col">
        <div>3 Reviews For The Product</div>
        <div>
          <CardComment /> <CardComment /> <CardComment />
        </div>
      </div>
      <div className="flex flex-1 ] ">
        <FormComment />
      </div>
    </div>
  );
};

export default Review;
