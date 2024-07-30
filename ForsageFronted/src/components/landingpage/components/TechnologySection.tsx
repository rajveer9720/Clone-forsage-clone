import React, { useState } from 'react';
import '../../../assets/css/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCheckCircle, faEye, faCogs, faProjectDiagram, faGlobe } from '@fortawesome/free-solid-svg-icons';

const TechnologySection: React.FC = () => {
  const [selected, setSelected] = useState<string>('Autonomy');

  const content = {
    'Autonomy': {
      description: 'The Forsage autonomous system ensures the technology will work forever and with full autonomy, continuous and stable. No influence of the human factor.',
      icon: faRobot
    },
    'Unchanging conditions': {
      description: 'Unchanging conditions content...',
      icon: faCheckCircle
    },
    'Transparency': {
      description: 'Transparency content...',
      icon: faEye
    },
    'Full automation': {
      description: 'Full automation content...',
      icon: faCogs
    },
    'Decentralization': {
      description: 'Decentralization content...',
      icon: faProjectDiagram
    },
    '100% online': {
      description: '100% online content...',
      icon: faGlobe
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Technology of Smart Contracts and Non-Fungible Tokens</h1>
        {/* i want bottom paragraph with with 100 */}
    
        <p className="mt-4 w-6/12 m-auto text-lg">
          Decentralized marketing is powered by the revolutionary technology of smart contracts and NFTs. The Forsage smart contract code is completely open. You can be sure of its safety and long-term performance.
        </p>
      </div>
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 p-4 bg-gray-800 rounded-lg flex flex-col items-center">
          <FontAwesomeIcon icon={content[selected].icon} size="3x" className="mb-4" />
          <h2 className="text-xl font-bold mb-4">{selected}</h2>
          <p className="text-center">{content[selected].description}</p>
        </div>
        <div className="flex flex-col space-y-2">
          {Object.keys(content).map(key => (
            <button
              key={key}
              className={`p-4 rounded-lg ${selected === key ? 'bg-pink-600' : 'bg-gray-700'} hover:bg-pink-500`}
              onClick={() => setSelected(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
