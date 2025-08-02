
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { initEmailJS } from "@/utils/emailUtils";

interface HeroProps {
  openBooking: () => void;
}

const Hero = ({ openBooking }: HeroProps) => {
  useEffect(() => {
    // Initialize EmailJS when the component mounts
    initEmailJS();
  }, []);

  const scrollToStories = () => {
    const storiesSection = document.getElementById("stories");
    if (storiesSection) {
      const yOffset = -80;
      const y = storiesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleApplyNow = () => {
    window.open("https://forms.gle/FYMu132khWKLLYiw8", "_blank");
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 z-0"></div>
      
      {/* Subtle patterns */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 z-0">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-red-200 dark:bg-red-900 blur-3xl"></div>
        <div className="absolute bottom-10 left-[5%] w-72 h-72 rounded-full bg-orange-200 dark:bg-orange-900 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">
              Produced by <a href="#" className="underline hover:text-red-700">Mel Robbins Media</a> • 
              Powered by <a href="#" className="underline hover:text-red-700">The 5 Second Rule Community</a>
            </p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stop Waiting. Start
            <span className="block sm:inline sm:ml-3 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
              Living
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4 sm:px-0">
            Join Mel Robbins' exclusive <strong>"Real Change, Real Stories"</strong> series. 
            Share your breakthrough moment, your transformation, and inspire millions to take action. 
            Your story could be the push someone needs to change their life forever.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={handleApplyNow}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 text-white font-medium px-8"
              data-hero-book-button
            >
              Share Your Breakthrough
            </Button>
            
            <Button
              onClick={scrollToStories}
              variant="outline"
              size="lg"
              className="border-red-300 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/30"
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <p className="text-sm font-medium text-red-600 dark:text-red-400">Reach</p>
              <p className="text-lg font-bold">25M+ followers</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <p className="text-sm font-medium text-red-600 dark:text-red-400">Impact</p>
              <p className="text-lg font-bold">Life-changing</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <p className="text-sm font-medium text-red-600 dark:text-red-400">Action</p>
              <p className="text-lg font-bold">5 seconds to start</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
