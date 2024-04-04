import React from 'react';
import { Button } from './Button';
import MainContainer from './MainContainer';
import CardProduct from './CardProduct';

const NewProduct = ({ products }) => {
  const slicedProducts = products.slice(0, 5)
  return (
    <MainContainer>
      <div className="w-full">
        <div className="flex justify-between items-center py-4  border-b border-[#ffffff4a]">
          <p>NEW ARRIVALS</p>
          <div>
            <Button text={'View All'} />
          </div>
        </div>
        <div className="pb-10 grid items-center justify-center max-w-96 md:max-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-b border-b-border-1">
          {slicedProducts?.map(product => (
            <CardProduct key={product.id} {...product} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};
export default NewProduct;
