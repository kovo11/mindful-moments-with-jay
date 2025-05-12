
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-purple-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 lg:w-2/5">
            <div className="relative mx-auto max-w-md md:max-w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden aspect-square w-full border-2 border-white dark:border-gray-800">
                <img 
                  src="/lovable-uploads/2f1e5000-de2c-49b0-88a1-42d7275be74c.png" 
                  alt="Jay Shetty" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-3/5 mt-12 md:mt-0 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Jay Shetty</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Jay Shetty is a #1 New York Times bestselling author, award-winning podcast host, 
              former monk, and purpose coach dedicated to helping people experience profound personal transformation.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              After spending three years as a monk in India, Jay has dedicated his life to sharing the timeless wisdom 
              he learned with the world. His mission is to make wisdom go viral and help people find their purpose 
              and create a life of meaning and impact.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">11M+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Social Followers</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">7B+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Video Views</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">400M+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Podcast Downloads</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Why Meet Jay in Person?</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>Experience personal connection with Jay in an intimate setting</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>Ask your questions directly and receive personalized insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>Connect with like-minded individuals on similar journeys</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>Take home exclusive resources and materials</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
