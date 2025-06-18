
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

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 z-0"></div>
      
      {/* Subtle patterns */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 z-0">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-purple-200 dark:bg-purple-900 blur-3xl"></div>
        <div className="absolute bottom-10 left-[5%] w-72 h-72 rounded-full bg-blue-200 dark:bg-blue-900 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
              Co-produced with <a href="#" className="underline hover:text-purple-700">Mindvalley Media</a> • 
              Supported by <a href="#" className="underline hover:text-purple-700">On Purpose Community</a>
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Story Deserves to Be
            <span className="ml-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Heard
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Join the upcoming <strong>"Real People, Real Stories"</strong> mini-series on <em>On Purpose with Jay Shetty</em>. 
            Share your journey of resilience, transformation, and hope with millions of listeners worldwide. 
            Your voice has the power to heal, inspire, and create lasting change.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={openBooking}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white font-medium px-8"
            >
              Share Your Story
            </Button>
            
            <Button
              onClick={scrollToStories}
              variant="outline"
              size="lg"
              className="border-purple-300 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/30"
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Reach</p>
              <p className="text-lg font-bold">50M+ listeners</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Impact</p>
              <p className="text-lg font-bold">Global audience</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Legacy</p>
              <p className="text-lg font-bold">Lasting change</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
