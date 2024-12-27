import React from 'react';

const VideoPlayer = ({ headline, subheadline, videoUrl }) => (
  <div className="mb-10 text-center">
    <h1 className="text-2xl font-bold mb-2">{headline}</h1>
    {subheadline && <p className="text-lg text-gray-600 mb-4">{subheadline}</p>}
    <iframe
      className="w-full h-64 md:h-80"
      src={videoUrl}
      title="Video Promocional"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoPlayer;
