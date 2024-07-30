import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTelegram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SupportPage = () => {
  return (
    <div className="w-5/6 m-auto flex flex-col justify-center items-center bg-grey-900 text-white p-8 relative ">
      <div className="bg-blue-900 rounded-lg mt-10 p-4 mb-8 text-center w-full">
        <h2 className="text-2xl font-bold mb-2">Official Notify Bot for busd.forsage.io users</h2>
        <p className="text-sm">Here you can get notifications about all the events in your account.</p>
      </div>
      <div className="mb-8 mt-10 text-center">
        <h2 className="text-1xl font-bold mb-2">Need help with using the platform?</h2>
        <p className="text-sm">Get qualified support from Forsage experts via online chat</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">Contact support</button>
      </div>
      <div className="text-xs text-gray-400 mt-auto">
        &copy; 2024 All Rights Reserved | Documents
      </div>
      <div className="absolute bottom-4 right-4 flex">
        <a href="#" className="mr-4">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a href="#" className="mr-4">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="#" className="mr-4">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#" className="mr-4">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default SupportPage;
