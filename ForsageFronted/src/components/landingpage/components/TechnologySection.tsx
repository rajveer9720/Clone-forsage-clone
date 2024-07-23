import React from 'react';

const TechnologySection: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
 <div className=" text-white p-6 flex flex-col items-center">
    <div className="max-w-4xl w-full">
      <h1 className="text-3xl font-bold text-center mb-6">Technology of smart contracts and non-fungible tokens</h1>
      <p className="text-center mb-12">
        Decentralized marketing is powered by the revolutionary technology of smart contracts and NFTs.
        The Forsage smart contract code is completely open. You can be sure of its safety and long-term performance.
      </p>
      <div className="display-flex">
      <div className="flex flex-col md:flex-row gap-6">
      {/* Block 1 */}
      <div className="bg-gray-900 p-8 rounded-lg flex-1">
      <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
          <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-white">A</span>
          </div>
          <h2 className="mt-4 text-lg font-semibold">Autonomy</h2>
          <p className="mt-2">
            The Forsage autonomous system ensures the technology will work forever and with full autonomy, continuous and stable. No influence of the human factor.
          </p>
        </div>
        </div>

      {/* Block 2 */}
      <div className="grid grid-cols-1  gap-6 flex-1">
        {[
          "Autonomy", "Unchanging conditions", "Transparency", 
          "Full automation", "Decentralization", "100% online"
        ].map((feature) => (
          <div key={feature} className="bg-gray-700 p-4 rounded-lg shadow-lg text-center text-white">
            {feature}
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  </div>

     {/* Office Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center mt-16">
        <h1 className="text-3xl font-bold mb-8">
          Convenient office
        </h1>
        <p className="text-xl mb-8">
          Interactive online interface of a classic office allowing you to sign NFT contracts and manage your Forsage programs.
        </p>
        <div className="flex justify-center space-x-8">
          <img
            src="https://forsage.io/img/cabinet_preview.png"
            alt="Forsage X4 Office"
            className="w-full max-w-lg md:max-w-2xl"
          />
        </div>
      </section>
  </div>
  );
};


export default TechnologySection;
