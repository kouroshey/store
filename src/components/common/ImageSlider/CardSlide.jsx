/* eslint-disable no-unused-vars */
import { Button } from '../Button';

const CardSlide = ({
  title,
  img,
  url,
  desc,
  subtitle,
  buttonStyle,
  btnUrl
}) => {
  return (
    <div className="flex flex-col items-center lg:flex-row w-full justify-center gap-32">
      <div className="flex py-10 lg:order-2">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col gap-8 lg:order-1 justify-center">
        <div className='flex flex-col gap-2'>
          <p className="text-xl font-medium  text-white">{title}</p>
          <p className="text-4xl font-semibold text-white">{subtitle}</p>
          <p className="text-xs">{desc}</p>
        </div>
        <Button
          buttonStyle={buttonStyle}
          text={'SHOP NOW'}
          btnUrl={btnUrl}
          isLink={true}
          url={url}
        />
      </div>
    </div>
  );
};

export default CardSlide;
