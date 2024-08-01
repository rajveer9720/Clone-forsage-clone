'use client';

import React, { useState } from 'react';

const programs = [
  { name: 'x3', partners: 0, perCycle: '0 BUSD', color: 'bg-main-blue' },
  { name: 'x4', partners: 0, perCycle: '0 BUSD', color: 'bg-purple-500' },
  // { name: 'xXx', partners: 14, perCycle: '580%', color: 'bg-pink-500' },
  // { name: 'xGold', partners: 30, perCycle: '1020%', color: 'bg-orange-500' },
  // { name: 'xQore', partners: 12, perCycle: '500%', color: 'bg-teal-500' },
  // { name: 'maxQore', partners: 39, perCycle: '860%', color: 'bg-green-500' },
];

const Program = () => {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setActiveProgram(name);
  };

  const renderGridItems = () => {
    const items = Array.from({ length: 12 }, (_, i) => i + 1);
    return items.map(item => (
      <div key={item} className="w-full flex mb-4 items-center justify-center bg-slate-100 dark:bg-gray-800 m-1 rounded-md py-2 px-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
        {item}
      </div>
    ));
  };

  return (
    <div className='flex flex-col mt-5 items-center rounded-lg bg-gray-100 dark:bg-gray-900 p-3 sm:p-5'>
      <div className="container mx-auto p-3 bg-slate-600 rounded-lg dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((program, index) => (
            <a
              key={index}
              href={`/dashboard/${program.name.toLowerCase()}?user=54758`}
              className={`border relative flex flex-col p-4 sm:p-6 w-full rounded z-10 overflow-hidden justify-between min-h-programDashboard sm:min-h-programDashboardMobile ${activeProgram === program.name ? 'border-white' : 'border-transparent'}`}
              onClick={() => handleClick(program.name)}
            >
              <svg className="absolute top-2 right-2 sm:top-1 sm:right-1" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.52 5.48a.5.5 0 0 1 0 .707L6.187 14.52a.5.5 0 0 1-.707-.707l8.333-8.333a.5.5 0 0 1 .707 0Z" fill="#fff"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.167 5.833a.5.5 0 0 1 .5-.5h7.5a.5.5 0 0 1 .5.5v7.5a.5.5 0 1 1-1 0v-7h-7a.5.5 0 0 1-.5-.5Z" fill="#fff"></path>
              </svg>
              <div className="flex justify-between w-full z-10">
                <div className="flex items-center">
                  <span className="text-white text-xl sm:text-2xl notranslate font-bold">{program.name}</span>
                </div>
                <span className="text-white text-xl sm:text-2xl font-bold text-right notranslate">{program.perCycle}</span>
              </div>
              <div className="flex justify-between h-full w-full">
                <div className="flex justify-between w-full z-10 sm:flex-col mt-5">
                  <div className="grid grid-cols-5 -m-1">
                    {renderGridItems()}
                  </div>
                  <div className="flex flex-col h-full relative justify-end sm:w-full sm:items-center mt-5">
                    <div className="flex sm:w-full">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded sm:text-sm outline-none px-4 py-2 sm:px-5 sm:py-3 bg-blue-500 hover:bg-hover-main-blue active:bg-active-main-blue z-0 sm:w-full">
                        <div className="flex flex-col space-y-1 items-start">
                          <div className="flex items-center">
                            Preview
                            <svg className="ml-3 fill-current" width="16" height="16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-4.646-2.854A.5.5 0 0 1 11 5.5v5a.5.5 0 0 1-1 0V6.707l-4.146 4.147a.5.5 0 0 1-.708-.708L9.293 6H5.5a.5.5 0 0 1 0-1h5c.138 0 .263.056.354.146Z"></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col mt-8 bg-black text-white p-4 rounded-lg sm:flex-row sm:justify-between sm:items-center">
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded sm:mt-0">Go to Program</button>
          <h2 className="flex items-center justify-center text-center text-xl mt-4 sm:mt-0 sm:ml-4">AMBASSADOR PROGRAM</h2>
        </div>
      </div>
    </div>
  );
};

export default Program;
