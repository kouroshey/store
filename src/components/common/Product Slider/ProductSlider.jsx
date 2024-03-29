import React from 'react';
import { useEffect, useState } from 'react';
import CardProduct from '../../common/CardProduct';
import MainContainer from '../MainContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductSlider = ({ title, titleBtn }) => {
  const [isHover, setIsHover] = useState(false);
  const [curr, setCurr] = useState(0);

  const hoverHandler = () => {
    setIsHover((prev) => !prev);
  };

  const preImag = () => {
    return setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextImag = () => {
    return setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
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
        <div className="grid  items-center h-max lg:grid-cols-5 gap-16  justify-center py-3 lg:gap-0">
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
export default ProductSlider;
