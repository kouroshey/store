import React from 'react';
import { Button } from '../Button';
let tagText = ['Cloths', 'Men Wear', 'Laptops'];
const Tag = () => {
  return (
    <div className="flex space-x-1">
      {tagText.map((text, index) => {
        return (
          <div key={index}>
            <button className="border px-3 text-[0.8rem] bg-[#ffffff1d]  border-[#ffffff1d]">{text}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
