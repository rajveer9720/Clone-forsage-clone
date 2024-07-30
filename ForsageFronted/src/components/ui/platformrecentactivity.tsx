import React from 'react';

const PlatformRecentActivity: React.FC = () => {
  const activities = [
    { id: '1423735', action: '+10 BUSD in x4', time: '1 hour' },
    { id: '1745488', action: '+5 BUSD in x3', time: '1 hour' },
    { id: 'new', action: 'New user joined', userId: '1768044', time: '1 hour' },
    { id: '1744074', action: '+5 BUSD in x4', time: '1 hour' },
    { id: '1648601', action: '+5 BUSD in x4', time: '1 hour' },
    { id: '1195996', action: '+10 BUSD in x4', time: '1 hour' },
    { id: 'new', action: 'New user joined', userId: '1768043', time: '1 hour' },
    { id: '1715046', action: '+5 BUSD in x4', time: '1 hour' },
    { id: '1647340', action: '+20 BUSD in x3', time: '1 hour' },
    { id: '1709744', action: '+5 BUSD in x4', time: '1 hour' },
    { id: 'new', action: 'New user joined', userId: '1768041', time: '1 hour' },
  ];
  const handleRegisterBUSD = () => {
    window.location.href = 'https://criptic-kzgz-git-main-somil-merugawars-projects.vercel.app/retro'; // Replace with your desired URL
  };
  return (
    <div className="text-white p-8 rounded-md w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
      <div className="col-span-2 h-full flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Platform Recent Activity</h2>
        <div className="bg-gray-800 rounded-lg p-4 mb-4 flex-1 flex flex-col">
          {activities.map((activity, index) => (
            <div key={index} className="flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark justify-between mb-2">
              <div className="flex items-center">
                <div className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">ID</span>
                </div>
                <div className="ml-4">
                  {activity.id !== 'new' ? (
                    <div>
                     <a onClick={handleRegisterBUSD}> <span className="text-blue-500">{`ID ${activity.id}`}</span></a> {activity.action}
                    </div>
                  ) : (
                    <div>
                      <span className="text-gray-400">{activity.action}</span> <span className="text-blue-500">{`ID ${activity.userId}`}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-gray-500">{activity.time}</div>
            </div>
          ))}
          <div className="mt-auto">
            <button className="w-full p-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 focus:outline-none">
              See more
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        {/* <div className="bg-gray-800 rounded-lg p-4 mb-4 mt-10 flex-1">
          <h3 className="text-lg font-semibold mb-2">Members Total</h3>
          <p className="text-1xl font-bold">1,758,057 <span className="text-green-500">+930</span></p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 mb-4 flex-1">
          <h3 className="text-lg font-semibold mb-2">Members Received</h3>
          <p className="text-1xl font-bold">149,408,617.11 BUSD <span className="text-green-500">+19,845.6 BUSD</span></p>
          <p className="text-1xl font-bold">22,632.2012 BNB <span className="text-green-500">+1.6728 BNB</span></p>
        </div> */}
        <div className="bg-gray-800 rounded-lg p-4 mb-4 flex-1">
          <h3 className="text-lg font-semibold mb-2 ">Forsage BUSD Contracts</h3>
          <p className="text-sm flex mt-3 items-center rounded-lg  bg-gray-100 p-2  dark:bg-light-dark justify-between mb-1">x3/x4: <span className="text-blue-500">0x5ac...b97</span></p>
          {/* <p className="text-sm flex mt-3 items-center rounded-lg  bg-gray-100 p-2  dark:bg-light-dark justify-between mb-1">xXx: <span className="text-blue-500">0x2ca...c52</span></p>
          <p className="text-sm flex mt-3 items-center rounded-lg  bg-gray-100 p-2  dark:bg-light-dark justify-between mb-1">xGold: <span className="text-blue-500">0x9e8...705</span></p>
          <p className="text-sm flex mt-3 items-center rounded-lg  bg-gray-100 p-2  dark:bg-light-dark justify-between mb-1">x3Qore: <span className="text-blue-500">0x6ee...799</span></p>
          <p className="text-sm flex mt-3 items-center rounded-lg  bg-gray-100 p-2  dark:bg-light-dark justify-between mb-1">maxQore: <span className="text-blue-500">0x27d...260</span></p> */}
        </div>
        {/* <div className="bg-gray-800 rounded-lg p-4 mb-4 flex-1">
          <h3 className="text-lg font-semibold mb-2">Transactions Made</h3>
          <p className="text-1xl font-bold">6,001,983 <span className="text-green-500">+1,592</span></p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 mb-4 flex-1">
          <h3 className="text-lg font-semibold mb-2">Turnover, BUSD</h3>
          <p className="text-1xl font-bold">298,817,234.22 <span className="text-green-500">+37,891.2</span></p>
        </div> */}
      </div>
    </div>
  );
};

export default PlatformRecentActivity;
