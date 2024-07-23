import React, { useState } from 'react';

const faqData = [
  {
    question: 'Why is Forsage the best alternative for trading?',
    answer: 'Forsage provides a decentralized system with smart contracts, ensuring transparency and automation.',
  },
  {
    question: 'Is Forsage safe?',
    answer: 'Yes, Forsage is built on immutable smart contracts, making it secure and reliable.',
  },
  {
    question: 'How much does it cost to participate in Forsage?',
    answer: 'The cost to get started varies. You can start with minimal investment depending on the program.',
  },
  {
    question: 'What do I need to get started on Forsage?',
    answer: 'You need a digital wallet and some cryptocurrency to begin participating in Forsage.',
  },
  {
    question: 'How do I start?',
    answer: 'Visit the Forsage website and follow the instructions to sign up and start investing.',
  },
  {
    question: 'Where will my profit come from?',
    answer: 'Profits are generated through network growth and smart contract-driven transactions.',
  },
  {
    question: 'What role do NFTs (non-fungible tokens) play at Forsage?',
    answer: 'NFTs at Forsage provide unique, verifiable ownership of digital assets within the platform.',
  },
];

const socialLinks = [
  { name: 'Telegram', url: 'https://telegram.org/', icon: '🌐' }, // Replace '🌐' with actual icons
  { name: 'Twitter', url: 'https://twitter.com/', icon: '🐦' },
  { name: 'Instagram', url: 'https://instagram.com/', icon: '📸' },
  { name: 'YouTube', url: 'https://youtube.com/', icon: '🎥' },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
      {/* FAQ Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center space-y-8">
        <h1 className="text-3xl font-bold">
          Frequently asked Questions
        </h1>
        <div className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggleOpen(index)}
                className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-purple-500">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-left">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Official Channels Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center mt-16 space-y-8">
        <h1 className="text-3xl font-bold mb-4">
          Official channels
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </section>

   
    </div>
  );
};

export default FAQSection;
