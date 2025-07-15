
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Mic, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Bold Action",
      description: "We celebrate stories of courage - those moments when you pushed through fear and took action despite the odds."
    },
    {
      icon: Users,
      title: "Transformation Community",
      description: "Join millions who've used the 5 Second Rule to change their lives and inspire others to do the same."
    },
    {
      icon: Mic,
      title: "Authentic Platform",
      description: "Share your real, unfiltered story on one of the most trusted platforms for personal development."
    },
    {
      icon: Award,
      title: "Lasting Change",
      description: "Your breakthrough story becomes part of a movement that helps others stop overthinking and start living."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About 
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent ml-2">
              "Real Change, Real Stories"
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            This exclusive series with <em>Mel Robbins</em> showcases real people who've used simple tools like 
            the 5 Second Rule to create extraordinary change in their lives. We're looking for stories of transformation, 
            breakthrough moments, and the courage to act when it mattered most. Your story could be the catalyst 
            that helps someone else take that first brave step.
          </p>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 font-medium">
              "You are one decision away from a completely different life. The moment you feel yourself 
              hesitating, count 5-4-3-2-1 and move. Your life is waiting for you to be brave."
            </blockquote>
            <p className="text-red-600 dark:text-red-400 font-semibold mt-4">— Mel Robbins</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
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
            <h3 className="text-2xl font-bold mb-4">Why Your Breakthrough Matters</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Every day, millions of people struggle with self-doubt, fear, and procrastination. Your story of taking action—
              despite being scared, despite the obstacles, despite the voice in your head saying "you can't"—is proof that 
              change is possible. When you share how you pushed through that moment of hesitation, you give others permission 
              to believe in themselves and take that first crucial step toward the life they really want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
