import React from 'react';

const VideoPlayer = ({ headline, subheadline, videoUrl }) => (
  <div className="mb-12 text-center px-4">
    <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
      {headline}
    </h1>
    {subheadline && (
      <p className="text-lg text-gray-600 mb-8">
        {subheadline}
      </p>
    )}
    <div className="w-full h-80 md:h-96">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src={videoUrl}
        title="Video Promocional"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default VideoPlayer;
