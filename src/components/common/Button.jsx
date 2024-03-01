import React, { useEffect, useRef } from 'react';

export const Button = ({ textBtn, iconBtn, btnEffect }) => {
  const refElem = useRef();
  useEffect(() => {
    btnEffect
      ? refElem.current.classList.add('bg-[#dedede3c]', 'border-[#ffffff3d]', 'border-[1px]', 'hover:bg-[#dedede6a]')
      : refElem.current.classList.add('hover:text-white');
  }, []);

  return (
    <div ref={refElem} className=" flex items-center gap-2  justify-center py-[0.4rem] cursor-pointer ">
      <div className="text-[0.55rem]">{iconBtn}</div>
      <div className="text-[0.55rem]">{textBtn}</div>
    </div>
  );
};
