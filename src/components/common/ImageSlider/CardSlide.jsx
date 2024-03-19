/* eslint-disable no-unused-vars */
import { Button } from '../Button';
import useWidth from "../../../hooks/useWidth"

const CardSlide = ({
  title,
  img,
  url,
  desc,
  subtitle,
  buttonStyle,
  btnUrl
}) => {

  const { width, breakpoints } = useWidth()

  return (
    <div className="flex flex-col items-center lg:flex-row w-10/12 justify-center lg:justify-between gap-8">
      <div className="flex py-10 lg:order-2">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col gap-8 lg:order-1 justify-center">
        <div className='flex flex-col gap-2 items-center lg:items-start'>
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
          customStyle={width > breakpoints.lg && "w-max"}
        />
      </div>
    </div>
  );
};

export default CardSlide;
