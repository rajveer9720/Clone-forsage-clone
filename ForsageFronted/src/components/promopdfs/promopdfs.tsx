'use client';

import { useState } from 'react';

// Demo links for different categories
const linksByCategory = {
  // maxQore: [
  //   { title: "maxQore presentation English pdf", url: "https://forsage.io/docs/maxcore_en.pdf" },
  //   { title: "maxQore presentation Urdu pdf", url: "https://forsage.io/docs/maxcore_ur.pdf" },
  //   { title: "maxQore presentation Hindi pdf", url: "https://forsage.io/docs/maxcore_hi.pdf" },
  // ],
  // xQore: [
  //   { title: "xQore overview English pdf", url: "https://forsage.io/docs/xqore_en.pdf" },
  //   { title: "xQore overview Urdu pdf", url: "https://forsage.io/docs/xqore_ur.pdf" },
  //   { title: "xQore overview Hindi pdf", url: "https://forsage.io/docs/xqore_hi.pdf" },
  // ],
  Presentations: [
    { title: "Forsage business presentation English pdf", url: "https://forsage.io/docs/presentation_en.pdf" },
    { title: "Forsage business presentation Urdu pdf", url: "https://forsage.io/docs/presentation_ur.pdf" },
  ],
  // Banners: [
  //   { title: "Forsage promotional banner 1", url: "https://forsage.io/docs/banner1.pdf" },
  //   { title: "Forsage promotional banner 2", url: "https://forsage.io/docs/banner2.pdf" },
  // ],
  // 'Forsage one-pager': [
  //   { title: "Forsage one-pager English pdf", url: "https://forsage.io/docs/onepager_en.pdf" },
  //   { title: "Forsage one-pager Urdu pdf", url: "https://forsage.io/docs/onepager_ur.pdf" },
  // ],
};

const categories = Object.keys(linksByCategory);

export default function PromoPDF() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Promo</h1>
        <p className="text-gray-600">Expand your Forsage team and get more partners and results by using ready-made promotional materials</p>
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
              <img src="/path/to/pdf-icon.png" alt={`PDF Icon for ${link.title}`} className="w-20 h-20" />
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
