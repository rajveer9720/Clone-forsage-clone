import React from 'react';
import Image from '@/components/ui/image';
import BannerFirst from '@/assets/images/first.png';
import Logo from '@/assets/images/logo-white.svg';

const HeroSection: React.FC = () => {
  const handleRegisterBUSD = () => {
    window.location.href = 'https://criptic-kzgz-git-main-somil-merugawars-projects.vercel.app/authentication/sign-up'; // Replace with your desired URL
  };

  return (
    <section
      className="relative bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 text-white text-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${BannerFirst.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative p-8 md:p-16 z-10">
        <div className="flex flex-col items-center mb-4">
          <div className="mb-2">
            <Image src={Logo} alt="Criptic" height={45} priority />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Forsage BUSD</h1>
        </div>
        <p className="mb-8 w-5/6 md:w-3/4 mx-auto">
          A decentralized networking platform based on smart contracts, together with NFT technology, which
          brings people together from all over the world and opens up endless possibilities new economic financial systems
        </p>
        <button
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleRegisterBUSD}
        >
          Registration
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
