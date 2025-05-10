
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const startVideo = () => {
    setIsPlaying(true);
  };
  
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear from Jay</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get a glimpse of the transformative experience you'll have at Jay's exclusive meet & greet events.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            {!isPlaying ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img 
                  src="/lovable-uploads/165f9bab-606e-4866-989e-47a399208e9c.png" 
                  alt="Jay Shetty - Genius" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <Button
                  onClick={startVideo}
                  size="lg"
                  className="relative z-10 rounded-full w-16 h-16 p-0 bg-white bg-opacity-20 backdrop-blur-sm border border-white/30 hover:bg-white hover:bg-opacity-30 transition-all duration-300"
                >
                  <Play className="h-6 w-6 text-white" fill="white" />
                </Button>
                <p className="relative z-10 text-white font-medium mt-4">
                  Watch Jay's Welcome Message
                </p>
              </div>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/9tMUCGBj8J0?autoplay=1" 
                title="Jay Shetty Video"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
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
