import React, { useState } from 'react';

const Tab = () => {
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
};

export default Tab;
