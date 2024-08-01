import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTelegram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
// Import next/image if using Next.js
import Image from 'next/image';
import OfficeBot from '@/assets/images/BannerBG.png';

const SupportPage: React.FC = () => {
  return (
    <div className="w-11/12  mx-auto flex flex-col justify-center items-center bg-gray-900 text-white  sm:p-8 relative">
      <div 
        className="relative p-4 sm:p-7 rounded-lg mt-10 mb-8 text-center w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${OfficeBot.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '30vh',  // Adjust the height as needed
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
          <h2 className="text-lg sm:text-2xl font-bold mb-2">Official Notify Bot for busd.RonX.io users</h2>
          <p className="text-xs sm:text-sm">Here you can get notifications about all the events in your account.</p>
        </div>
      </div>
      <div className="mb-8 mt-2 text-center">
        <h2 className="text-lg sm:text-xl font-bold mb-2">Need help with using the platform?</h2>
        <p className="text-xs sm:text-sm">Get qualified support from RonX experts via online chat</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">Contact support</button>
      </div>
      <div className="text-xs text-gray-400 mt-auto">
        &copy; 2024 All Rights Reserved | Documents
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-4">
        <a href="#">
          <FontAwesomeIcon icon={faDiscord} className="text-lg sm:text-xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTelegram} className="text-lg sm:text-xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} className="text-lg sm:text-xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} className="text-lg sm:text-xl" />
        </a>
      </div>
    </div>
  );
};

export default SupportPage;
