/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

export default function Carousel({ slides }) {
  const [curr, setCurr] = useState(0);
  console.log(curr);
  const preImag = () => {
    return setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const nextImag = () => {
    return setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    const slideInter = setInterval(nextImag, 2000);
    return () => clearInterval(slideInter);
  }, []);

  return (
    <div className="overflow-hidden grid grid-cols-[repeat(20,100%)] h-full   relative ">
      {slides.map((item, index) => {
        return (
          <div
            key={index}
            className={` flex justify-center h-full w-full items-center text-6xl font-bold transition-all  ease-out duration-700`}
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {item}
          </div>
        );
      })}
      <div className="top-0 absolute flex  w-full justify-between text-2xl  h-full  items-center">
        <button className="h-full w-28 flex justify-center items-center " onClick={preImag}>
          <FaChevronLeft />
        </button>
        <button className="h-full w-28 flex justify-center items-center " onClick={nextImag}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
