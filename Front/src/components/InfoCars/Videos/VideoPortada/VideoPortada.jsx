import React from 'react';
import './VideoPortada.css';
import { assets } from '../../../../assets/assets';

const VideoPortada = () => {
  return (
    <div className="video-portada-container">
      <div className="video-section">
        <iframe
          src=""
          title="Sample Video"
          className="history-video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  );
};

export default VideoPortada;
