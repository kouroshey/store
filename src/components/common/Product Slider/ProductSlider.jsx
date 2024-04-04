import React from 'react';
import { useEffect, useState } from 'react';
import CardProduct from '../../common/CardProduct';
import MainContainer from '../MainContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { products } from '../../../data';

const ProductSlider = ({ title, titleBtn }) => {
  const [isHover, setIsHover] = useState(false);
  const [curr, setCurr] = useState(0);

  const slicedProducts = products.slice(0, 5)
  const hoverHandler = () => {
    setIsHover((prev) => !prev);
  };

  const preImag = () => {
    setCurr((curr) => (curr === 0 ? slicedProducts.length + 1 : curr - 1));
  };

  const nextImag = () => {
    setCurr((curr) => (curr === slicedProducts.length + 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!isHover) {
      //   const slideInter = setInterval(nextImag, 5000);
      //   return () => clearInterval(slideInter);
    }
  }, [isHover]);
  return (
    <MainContainer>
      <div className="w-full">
        <div className="flex justify-between items-center py-4  border-b border-[#ffffff4a]">
          <p>SIMILAR PRODUCTS</p>
          <div>
            <div className="flex space-x-4">
              <button className="h-full  flex justify-center items-center " onClick={preImag}>
                <FaChevronLeft />
              </button>
              {/* -----------BUTTON NEXT SLIDE--------------------------------- */}
              <button className="h-full flex justify-center items-center " onClick={nextImag}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 grid items-center justify-center max-w-96 md:max-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {slicedProducts?.map(product => (
            <CardProduct key={product.id} {...product} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};
export default ProductSlider;
