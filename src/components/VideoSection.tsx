
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Solutions in Action</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover how our cutting-edge AI technologies transform businesses and drive growth.
          </p>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400" 
                alt="Company Introduction Video Thumbnail" 
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Button 
                  onClick={() => setIsPlaying(true)}
                  variant="secondary"
                  size="lg"
                  className="rounded-full w-20 h-20 flex items-center justify-center bg-white/80 hover:bg-white text-adrig-blue"
                >
                  <Play size={36} className="ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-2xl font-bold">Digital AI Vision: Transforming Business Through Intelligence</h3>
                <p className="text-sm mt-2">3:24 min</p>
              </div>
            </div>
          ) : (
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Digital AI Vision Introduction" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="aspect-video"
              ></iframe>
            </div>
          )}
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500"
              alt="AI Technology" 
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
            <p className="text-gray-600">Our solutions leverage the latest advancements in AI and machine learning.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500"
              alt="Expert Team" 
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Expert Teams</h3>
            <p className="text-gray-600">Our specialists bring decades of combined experience in AI implementation.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=500"
              alt="Business Results" 
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Measurable Results</h3>
            <p className="text-gray-600">Our clients see tangible improvements in efficiency and revenue.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
