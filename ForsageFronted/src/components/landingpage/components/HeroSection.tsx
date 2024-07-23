import React from 'react';

const HeroSection: React.FC = () => {

  const handleRegisterBUSD = () => {
    window.location.href = 'https://criptic-kzgz-git-main-somil-merugawars-projects.vercel.app/authentication/sign-up'; // Replace with your desired URL
  };
  return (
    <section className="bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 text-white p-16 text-center">
      <h1 className="text-6xl font-bold mb-4">Forsage BUSD</h1>
      <p className="mb-8">A decentralized networking platform based on smart contracts, together with NFT technology, whichbrings people together from all over the world andopens up endless possibilitiesnew economic financial systems</p>
      <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full" onClick={handleRegisterBUSD}>
        Registration
      </button>
    </section>
  );
};

export default HeroSection;
