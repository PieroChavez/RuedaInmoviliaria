import React from 'react';
import './VideoTutoriales.css';

const videos = [
  {
    id: 1,
    category: 'Skills',
    color: '#ff007f',
    title: "Don't Waste My Time - Usher Ft. Ella Mai",
    author: 'DAVID SLANEY',
    url: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
  },
  {
    id: 2,
    category: 'Step',
    color: '#ff5722',
    title: "Don't Waste My Time - Usher Ft. Ella Mai",
    author: 'DAVID SLANEY',
    url: 'https://www.youtube.com/embed/JGwWNGJdvx8',
  },
  {
    id: 3,
    category: 'Exercise stress',
    color: '#007bff',
    title: "Don't Waste My Time - Usher Ft. Ella Mai",
    author: 'DAVID SLANEY',
    url: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
  },

];

const VideoTutorials = () => {
  return (
    <div className="video-tutorials-container">
      <h2 className="section-title">Post Video Tutorials</h2>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              className="video-frame"
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-info">
              <span
                className="video-category"
                style={{ backgroundColor: video.color }}
              >
                {video.category}
              </span>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-author">{video.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTutorials;
