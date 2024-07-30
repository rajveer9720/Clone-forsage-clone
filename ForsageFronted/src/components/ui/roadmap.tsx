import { useState } from "react";

interface RoadmapItem {
  title: string;
  icon: string; // Update the type to string for URL
  date: string;
  completed: boolean;
}

const roadmapItems: RoadmapItem[] = [
  {
    title: "Social",
    icon: "https://busd.forsage.io/roadmap/social.png",
    date: "21.08",
    completed: true,
  },
  {
    title: "Achievements",
    icon: "https://busd.forsage.io/roadmap/achievements.png",
    date: "28.08",
    completed: true,
  },
  {
    title: "Cyole Rally Marathon",
    icon: "https://busd.forsage.io/roadmap/bigRefferal%D0%A1ontest.png",
    date: "4.09",
    completed: true,
  },
  {
    title: "Forsage Games",
    icon: "https://busd.forsage.io/roadmap/games.png",
    date: "21.11",
    completed: true,
  },
  {
    title: "Custom Invite page",
    icon: "https://busd.forsage.io/roadmap/customInvitePdf.png",
    date: "12.10",
    completed: true,
  },
  {
    title: "New program",
    icon: "https://busd.forsage.io/roadmap/maxqore.png",
    date: "3.10",
    completed: true,
  },
  {
    title: "Token",
    icon: "https://busd.forsage.io/roadmap/token.png",
    date: "20.12 2023",
    completed: false,
  },
];

const Roadmap = () => {
  const [completedItems, setCompletedItems] = useState<RoadmapItem[]>([]);

  const handleComplete = (item: RoadmapItem) => {
    setCompletedItems([...completedItems, item]);
  };

  return (
    <div className="w-5/6 m-auto my-6 text-white p-8 rounded-lg">
      <h1 className="text-2xl font-bold mb-4 my-4">Roadmap</h1>
      <div className="grid grid-cols-3 gap-12 ">
        {roadmapItems.map((item, index) => (
          <div
            key={index}
            className={`bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-between ${
              item.completed ? "opacity-50" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <img src={item.icon} alt={`${item.title} icon`} width="24" height="24" />
              <h2 className="text-lg font-bold mt-2">{item.title}</h2>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm">{item.date}</p>
              {item.completed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0 1 18 0z" />
                </svg>
              ) : (
                <button
                  onClick={() => handleComplete(item)}
                  className=" hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Mark as Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
