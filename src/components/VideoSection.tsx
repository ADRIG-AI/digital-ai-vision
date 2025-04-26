
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useState,useEffect } from "react";
type LandingContent = {
  title: string;
  subtitle: string; 
  videotitle: string;
  time:string;
  firstcardtitle:string;
  firstcardsubtitle:string;
  secondcardtitle:string;
  secondcardsubtitle:string;
  thirdcardtitle:string;
  thirdcardsubtitle:string;
};
const VideoSection = () => {
   const [content, setContent] = useState<LandingContent | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/content/landingpage/VideoSection.json")
          .then((res) => res.json())
          .then((data) => {
            setContent(data);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Failed to load landing page content:", err);
            setLoading(false);
          });
      }, []);
  const [isPlaying, setIsPlaying] = useState(false);
  if (loading || !content) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Loading...</p>
      </section>
    );
  }
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {content.subtitle}
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
                <h3 className="text-2xl font-bold">{content.videotitle}</h3>
                <p className="text-sm mt-2">{content.time}</p>
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
            <h3 className="text-xl font-semibold mb-2">{content.firstcardtitle}</h3>
            <p className="text-gray-600">{content.firstcardsubtitle}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500"
              alt="Expert Team" 
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{content.secondcardtitle}</h3>
            <p className="text-gray-600">{content.secondcardsubtitle}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=500"
              alt="Business Results" 
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{content.thirdcardtitle}</h3>
            <p className="text-gray-600">{content.thirdcardsubtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
