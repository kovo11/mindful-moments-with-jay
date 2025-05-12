
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

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      const yOffset = -80;
      const y = eventsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet 
            <span className="ml-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Jay Shetty
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join an exclusive meet & greet experience with the world-renowned author, former monk, 
            and host of the 'On Purpose' podcast. Transform your mindset and discover profound wisdom 
            in an intimate setting.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={openBooking}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white font-medium px-8"
            >
              Book Your Spot
            </Button>
            
            <Button
              onClick={scrollToEvents}
              variant="outline"
              size="lg"
              className="border-purple-300 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/30"
            >
              View Schedule
            </Button>
          </div>
          
          <div className="inline-block bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-md">
            <p className="text-sm font-medium">
              Next event: <span className="text-purple-600 dark:text-purple-400">June 15, 2025</span> • New York City
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
