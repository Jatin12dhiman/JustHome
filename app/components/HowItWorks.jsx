// components/HowItWorks.jsx

import React from 'react';
import { FaHome, FaUsers, FaKey } from 'react-icons/fa';

const steps = [
  {
    icon: <FaHome size={30} className="text-[#E7C873]" />,
    title: 'Find Real Estate',
    description: 'Sumo petentium ut per, at his wisiim utinam adipiscing. Est ei graeco',
  },
  {
    icon: <FaUsers size={30} className="text-[#E7C873]" />,
    title: 'Meet Relator',
    description: 'Sumo petentium ut per, at his wisiim utinam adipiscing. Est ei graeco',
  },
  {
    icon: <FaKey size={30} className="text-[#E7C873]" />,
    title: 'Take The Keys',
    description: 'Sumo petentium ut per, at his wisiim utinam adipiscing. Est ei graeco',
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#FFF8F6] py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          How it works? Find a perfect home
        </h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="w-20 h-20 bg-[#F0E6D3] rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;