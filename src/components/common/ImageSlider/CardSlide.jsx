/* eslint-disable no-unused-vars */
import { Button } from '../Button';
import useWidth from '../../../hooks/useWidth';

const CardSlide = ({ title, img, url, desc, subtitle, buttonStyle, btnUrl }) => {
  const { width, breakpoints } = useWidth();

  return (
    <div className="w-full h-[30rem] flex flex-col items-center lg:flex-row  lg:justify-around">
      <div className="flex  h-full flex-col gap-8  hidden justify-center lg:flex">
        <div className="flex flex-col gap-2 items-center lg:items-start">
          <p className="text-xl font-medium  text-white text-center lg:text-start">{title}</p>
          <p className="text-4xl font-semibold text-white text-center lg:text-start leading-10">{subtitle}</p>
          <p className="text-xs text-center lg:text-start">{desc}</p>
        </div>
        <Button
          buttonStyle={buttonStyle}
          text={'SHOP NOW'}
          btnUrl={btnUrl}
          isLink={true}
          url={url}
          customStyle={width > breakpoints.lg && 'w-max'}
        />
      </div>{' '}
      <div className=" h-full py-8 lg:p-0">
        <img src={img} alt="" className="h-full" />
      </div>
    </div>
  );
};

export default CardSlide;
