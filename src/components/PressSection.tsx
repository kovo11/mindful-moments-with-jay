
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const PressSection = () => {
  const pressItems = [
    {
      outlet: "Forbes",
      title: "The Power of Authentic Storytelling in Modern Media",
      date: "March 2024",
      url: "https://forbes.com/authentic-storytelling-media"
    },
    {
      outlet: "Entrepreneur",
      title: "How Real Stories Are Changing Lives Through Podcasting",
      date: "February 2024",
      url: "https://entrepreneur.com/real-stories-podcasting"
    },
    {
      outlet: "Inc. Magazine",
      title: "The Science Behind Story-Driven Healing",
      date: "January 2024",
      url: "https://inc.com/story-driven-healing"
    },
    {
      outlet: "Psychology Today",
      title: "Why Sharing Personal Stories Matters for Mental Health",
      date: "December 2023",
      url: "https://psychologytoday.com/sharing-stories-mental-health"
    }
  ];

  const asSeenOn = [
    { name: "CNN", logo: "CNN" },
    { name: "BBC", logo: "BBC" },
    { name: "The Today Show", logo: "TODAY" },
    { name: "Good Morning America", logo: "GMA" },
    { name: "The Ellen Show", logo: "ELLEN" },
    { name: "Oprah Daily", logo: "OPRAH" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* As Seen On Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8">As Seen On</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {asSeenOn.map((outlet, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-600 hover:text-purple-500 transition-colors">
                  {outlet.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Press & Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Press & 
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Features
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our mission to amplify authentic voices has been recognized by leading publications and media outlets worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pressItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {item.outlet}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 leading-tight">
                  {item.title}
                </h4>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  Read Article <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
