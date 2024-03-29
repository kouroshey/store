import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pTag } from '../../../data';
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
<<<<<<< HEAD
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
=======
    const [activeTab, setActiveTab] = useState(1);
    const handlerTabHeadr = (index) => {
        setActiveTab(index);
    };
    return (
        <div>
            <div className="flex ">
                <div className={` flex w-8 ${activeTab == 1 ? 'bg-green-400' : 'bg-slate-400'} px-12 py-2 items-center justify-center`} onClick={() => handlerTabHeadr(1)}>
                    Tab1
                </div>
                <div className={`flex w-8 ${activeTab == 2 ? 'bg-green-400' : 'bg-slate-400'} px-12 py-2 items-center justify-center `} onClick={() => handlerTabHeadr(2)}>
                    Tab2
                </div>
                <div className={`flex w-8 ${activeTab == 3 ? 'bg-green-400' : 'bg-slate-400'} px-12 py-2 items-center justify-center `} onClick={() => handlerTabHeadr(3)}>
                    Tab3
                </div>
                <div className={`flex w-8 ${activeTab == 4 ? 'bg-green-400' : 'bg-slate-400'} px-12 py-2 items-center justify-center `} onClick={() => handlerTabHeadr(4)}>
                    Tab4
                </div>
            </div>
            <div className="w-full h-80 bg-slate-900">
                div
            </div>
        </div>
    );
>>>>>>> 6c553b91a6d3ccf686e753ffdfbf2594aa1bd466
};

export default Tab;
