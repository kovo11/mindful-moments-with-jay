
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Sparkles } from "lucide-react";

interface StoriesSectionProps {
  openBooking: () => void;
}

const StoriesSection = ({ openBooking }: StoriesSectionProps) => {
  const storyTypes = [
    {
      icon: Heart,
      title: "Overcoming Adversity",
      description: "Stories of resilience through life's greatest challenges - loss, illness, financial hardship, or personal struggles.",
      examples: "Mental health recovery, surviving trauma, rebuilding after loss"
    },
    {
      icon: Users,
      title: "Life Transformations", 
      description: "Journeys of profound personal change that led to a more purposeful, fulfilling life.",
      examples: "Career pivots, spiritual awakening, breaking generational patterns"
    },
    {
      icon: Sparkles,
      title: "Acts of Service",
      description: "How everyday people are making extraordinary differences in their communities and beyond.",
      examples: "Community building, mentorship, social impact initiatives"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stories That 
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Matter
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're looking for authentic, heartfelt stories that demonstrate the power of human resilience, 
            transformation, and service. Your experience could be exactly what someone needs to hear.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {storyTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <p className="text-sm text-purple-700 dark:text-purple-300 font-medium mb-1">Examples:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{type.examples}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Share Your Journey?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Every story has the power to heal, inspire, and create connection. 
              Join us in building a community where vulnerability becomes strength and sharing becomes healing.
            </p>
            <Button
              onClick={openBooking}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white font-medium px-8"
            >
              Apply to Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
