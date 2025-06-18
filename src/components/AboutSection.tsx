
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Mic, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Storytelling",
      description: "We believe in the power of raw, honest narratives that connect us to our shared humanity."
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Your story joins a worldwide network of voices creating positive change and healing."
    },
    {
      icon: Mic,
      title: "Professional Platform",
      description: "Share your message through one of the world's most trusted and respected podcast platforms."
    },
    {
      icon: Award,
      title: "Lasting Impact",
      description: "Be part of a legacy that inspires others to find courage, hope, and purpose in their own journeys."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About 
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-2">
              "Real People, Real Stories"
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            This special mini-series on <em>On Purpose with Jay Shetty</em> is dedicated to amplifying the voices 
            of everyday heroes whose stories of resilience, transformation, and service deserve to be heard. 
            We believe that in sharing our struggles and triumphs, we create bridges of understanding and hope 
            that can heal both the storyteller and the listener.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 font-medium">
              "The stories that we tell ourselves and others have the power to shape our reality. 
              When we share our truth with courage and vulnerability, we give others permission to do the same."
            </blockquote>
            <p className="text-purple-600 dark:text-purple-400 font-semibold mt-4">— Jay Shetty</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Your Story Matters</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              In a world that often feels divided, stories have the unique power to remind us of our shared humanity. 
              Your journey—with all its ups and downs—contains wisdom that could be the key to someone else's breakthrough. 
              By sharing your story, you're not just telling your truth; you're offering hope, healing, and connection to 
              millions of listeners around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
