import React from 'react';
import { FaCode } from 'react-icons/fa';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <FaCode className="h-8 w-8 text-blue-500" />
      <span className="text-white font-bold text-xl tracking-tight">CODE CRAFTERS</span>
    </div>
  );
};