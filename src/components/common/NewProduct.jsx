import React from 'react';
import { Button } from './Button';
import MainContainer from './MainContainer';
import CardProduct from './CardProduct';

const NewProduct = () => {
  return (
    <MainContainer>
      <div className="w-full">
        <div className="flex justify-between items-center py-4  border-b border-[#ffffff4a]">
          <p>NEW ARRIVALS</p>
          <div>
            <Button text={'View All'} />
          </div>
        </div>
        <div className="grid  items-center h-max lg:grid-cols-5 gap-16 items-center justify-center py-3 lg:gap-0">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </MainContainer>
  );
};
export default NewProduct;
