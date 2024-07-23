'use client';

import React, { useState } from 'react';

interface Stage {
  name: string;
  costMultiplier: number;
  resultMultiplier: number;
}

const stages: Stage[] = [
  { name: 'x3', costMultiplier: 1, resultMultiplier: 3 },
  { name: 'x4', costMultiplier: 1, resultMultiplier: 4 },
  { name: 'xXx', costMultiplier: 2, resultMultiplier: 3 },
  { name: 'xGold', costMultiplier: 2, resultMultiplier: 4 },
  { name: 'xQore', costMultiplier: 3, resultMultiplier: 4 },
];

const slotPrices = [5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240];

export default function Calculator() {
  const [selectedStage, setSelectedStage] = useState<Stage>(stages[0]);
  const [selectedSlots, setSelectedSlots] = useState<number[]>([1]);

  const handleStageSelect = (stage: Stage) => {
    setSelectedStage(stage);
    setSelectedSlots([1]);  // Reset slots selection when stage changes
  };

  const handleSlotSelect = (slot: number) => {
    setSelectedSlots(prev => {
      if (slot === 12) {
        return [12];
      }
      return prev.includes(slot) ? prev.filter(s => s !== slot) : [...prev, slot];
    });
  };

  const cost = selectedSlots.reduce((total, slot) => total + slotPrices[slot - 1] * selectedStage.costMultiplier, 0);
  const result = cost * selectedStage.resultMultiplier;

  return (
    <div className="w-full p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Forsage Participant
      </h1>
      <h3 className="text-3xl font-bold mb-4 text-center">Calculator</h3>
      <p className="w-2/3 mb-4 mx-12 text-lg text-center py-6">
        Calculate your potential result from participating in FORSAGE by selecting levels to activate below. The results are calculated for 1 cycle of all selected levels. All calculations are for informational purposes only, and are not a public offer.
      </p>

      <div className="flex space-x-4 mb-4 px-8">
        {stages.map(stage => (
          <button
            key={stage.name}
            className={`px-4 py-2 rounded ${selectedStage.name === stage.name ? 'bg-blue-500' : 'bg-gray-800'}`}
            onClick={() => handleStageSelect(stage)}
          >
            {stage.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {[...Array(12)].map((_, index) => (
          <button
            key={index}
            className={`px-8 py-4 rounded ${selectedSlots.includes(index + 1) ? 'bg-blue-500' : 'bg-gray-700'}`}
            onClick={() => handleSlotSelect(index + 1)}
            disabled={selectedSlots.includes(12) && index !== 11}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 p-4 rounded w-full max-w-md">
        <p>Cost of all selected slots: <span className="font-bold">{cost} BUSD</span></p>
        <p>Results in 1 cycle: <span className="font-bold">{result} BUSD</span></p>
      </div>
    </div>
  );
}
