import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel({ slides }) {
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
      const slideInter = setInterval(nextImag, 5000);
      return () => clearInterval(slideInter);
    }
  }, [isHover]);
  return (
    // ----------------------------JSX-------------------------------
    <div onMouseEnter={hoverHandler} onMouseLeave={hoverHandler} className="overflow-hidden grid grid-cols-[repeat(20,100%)] relative  ">
      {/* START OF SLIDES */}
      {slides.map((item, index) => (
        <div
          key={index}
          className={` flex cursor-pointer justify-center w-full items-center transition-all ease-out duration-700`}
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {item}
        </div>
      ))}
      {/* END OF SLIDES */}
      {/* start of slider navigation buttons */}
      <div className="top-0 absolute flex  w-full justify-between text-2xl  h-full   items-center">
        {/* -----------BUTTON PREV SLIDE--------------------------------- */}
        <button className="h-full w-28 flex justify-center items-center " onClick={preImag}>
          <FaChevronLeft />
        </button>
        {/* -----------BUTTON NEXT SLIDE--------------------------------- */}
        <button className="h-full w-28 flex justify-center items-center " onClick={nextImag}>
          <FaChevronRight />
        </button>
      </div>
      {/* end of slider navigation buttons */}
    </div>
  );
}
