
import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          See How We <span className="text-adrig-blue">Transform</span> Business with AI
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/50">
                <img 
                  src="/lovable-uploads/21bf65a7-c7b5-4ade-b6a1-44d40c25aa50.png" 
                  alt="Video thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/50">
                  <button 
                    onClick={handlePlayVideo}
                    className="transform transition-transform duration-300 hover:scale-110"
                    aria-label="Play video"
                  >
                    <PlayCircle size={80} className="text-white hover:text-adrig-blue" />
                  </button>
                  <p className="text-white text-xl mt-4 font-semibold">Watch our company introduction</p>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Replace with your actual video URL
                title="Company Introduction Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
