/* eslint-disable no-unused-vars */
import { Button } from '../Button';

const CardSlide = ({ title, img, url, desc, subtitle }) => {
  return (
    <div className="flex  w-full h-full  justify-center gap-32">
      <div className="flex flex-col gap-2  justify-center">
        <div className="text-xl font-medium  text-white">{title}</div>
        <h2 className="text-3xl font-semibold text-white">{subtitle}</h2>
        <p className="text-xs">{desc}</p>
        <div className="w-24 mt-2">
          <Button btnEffect={true} url={url} textBtn={'SHOP NOW'} />
        </div>
      </div>
      <div className="flex py-10">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CardSlide;
