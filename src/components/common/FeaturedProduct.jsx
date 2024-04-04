import React from 'react';
import { Button } from './Button';
import MainContainer from './MainContainer';
import CardProduct from './CardProduct';

const FeaturedProduct = ({ title, titleBtn, products }) => {
  const slicedProducts = products.slice(0, 8)
  return (
    <MainContainer>
      <div className="w-full">
        <div className="flex justify-between items-center py-4  border-b border-[#ffffff4a]">
          <p>FEATURED PRODUCTS</p>
          <div>
            <Button text={"More Product"} />
          </div>
        </div>
        <div className="grid items-center justify-center max-w-96 md:max-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {slicedProducts?.map(product => (
            <CardProduct key={product.id} {...product} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};
export default FeaturedProduct;
