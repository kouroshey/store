import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Desc from './Desc';
import MoreInfo from './MoreInfo';
import Review from './Review';
import Tag from './Tag';

let tabs = [
  { id: 'desc', label: 'DESCRIPTION' },
  { id: 'info', label: 'MORE INFO' },
  { id: 'tag', label: 'TAGS' },
  { id: 'reviews', label: 'REVIEWS' },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handlerTabHeadr = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="py-14">
      <div className="flex border-b space-x-1  ">
        {tabs.map((tab) => {
          return (
            <button key={tab.id} onClick={() => handlerTabHeadr(tab.id)} className={` relative text-xs  flex  px-4 py-3 items-center justify-center`}>
              {activeTab === tab.id && <motion.div layoutId="active-pill" className="bg-[#ffffff53] absolute inset-0 " />}
              <span className="relative"> {tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="w-full h-max  py-2">
        {activeTab === 'desc' ? <Desc /> : null}
        {activeTab === 'info' ? <MoreInfo /> : null}
        {activeTab === 'tag' ? <Tag /> : null}
        {activeTab === 'reviews' ? <Review /> : null}
      </div>
    </div>
  );
};

export default Tab;
