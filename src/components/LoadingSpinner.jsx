import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;