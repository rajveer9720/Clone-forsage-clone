import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  increase: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, increase }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 text-white flex flex-col">
      <p className="text-lg font-medium">{title}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
      <p className="text-sm text-green-500">{increase}</p>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full max-w-screen-lg mx-auto text-center items-center ">
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <StatCard title="Partners" value="16" increase="↑ 0" />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <StatCard title="Team" value="21" increase="↑ 0" />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <StatCard title="Ratio" value="209%" increase="↑ 0%" />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <StatCard title="Profits" value="3,891 BUSD\n0.2625 BNB" increase="↑ 0\n↑ 0" />
      </div>
    </div>
  );
};

export default Dashboard;
