'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

type Link = {
  title: string;
  url: string;
};

type LinksByCategory = {
  [key: string]: Link[];
};

const linksByCategory: LinksByCategory = {

  X3: [
    { title: "RonX X3 presentation English pdf", url: "https://RonX.io/docs/x3_presentation_en.pdf" },
    { title: "RonX X3 presentation Urdu pdf", url: "https://RonX.io/docs/x3_presentation_ur.pdf" },
  ],
  X4: [
    { title: "RonX X4 presentation English pdf", url: "https://RonX.io/docs/x4_presentation_en.pdf" },
    { title: "RonX X4 presentation Urdu pdf", url: "https://RonX.io/docs/x4_presentation_ur.pdf" },
  ],
  Presentations: [
    { title: "RonX business presentation English pdf", url: "https://RonX.io/docs/presentation_en.pdf" },
    { title: "RonX business presentation Urdu pdf", url: "https://RonX.io/docs/presentation_ur.pdf" },
  ],
};

const categories = Object.keys(linksByCategory);

export default function PromoPDF() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Promo</h1>
        <p className="text-white">Expand your RonX team and get more partners and results by using ready-made promotional materials</p>
      </header>

      <nav className="flex space-x-4 mb-4 border-b pb-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`text-blue-500 hover:text-blue-700 ${activeCategory === category ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {linksByCategory[activeCategory].map((link, index) => (
          <div key={index} className="flex flex-col items-center p-6 rounded-lg bg-gray-100 shadow-md dark:bg-light-dark">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faFilePdf} className="text-red-400 w-20 h-20" />
            </div>
            <p className="text-center mb-4">{link.title}</p>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="block text-center text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
