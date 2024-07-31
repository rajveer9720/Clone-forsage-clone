import React, { useState } from 'react';

import Image from '@/components/ui/image';

import darkLogo from '@/assets/images/logo-white.svg';
interface HeaderProps {
  onRegistrationClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegistrationClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
      <div className="flex justify-between items-center w-full lg:w-auto">
      <Image src={darkLogo} alt="Criptic" height={45} priority />
        <button className="text-white lg:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav className={`flex-col lg:flex-row flex lg:flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <a href="#documentation" className="hover:text-gray-400">Documentation</a>
        <a href="#login" className="hover:text-gray-400">Login</a>
        <a href="#register" className="hover:text-gray-400" onClick={(e) => { e.preventDefault(); onRegistrationClick(); }}>
          Registration
        </a>
      </nav>
      <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 text-center lg:text-left">
        <span className="block">Maximum</span>
        <span className="block">Accrual 5.12%</span>
        <span className="block">Annual Rate 5.05%</span>
      </div>
    </header>
  );
};

export default Header;
