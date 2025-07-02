import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', color = 'red' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    red: 'border-red-600',
    blue: 'border-blue-600',
    green: 'border-green-600',
    gray: 'border-gray-600'
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;