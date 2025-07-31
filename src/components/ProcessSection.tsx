
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Headphones, Send, Shield } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Send,
      title: "Submit Your Application",
      description: "Share your story outline and why you want to participate. We review every application personally.",
      timeline: "Takes 5-10 minutes"
    },
    {
      icon: Shield,
      title: "Verification Process",
      description: "We verify your identity, location, and business background to ensure authentic storytelling for our community.",
      timeline: "3-5 business days"
    },
    {
      icon: CheckCircle,
      title: "Group Preparation Call",
      description: "Join a 20-minute group call with our team to prepare your story and meet other verified storytellers.",
      timeline: "20 minutes"
    },
    {
      icon: Headphones,
      title: "Group Session with Mel",
      description: "Record your story with Mel Robbins in an intimate group setting, sharing your experience with fellow storytellers.",
      timeline: "60-90 minutes"
    },
    {
      icon: Clock,
      title: "Episode Release",
      description: "Your story reaches millions of listeners worldwide, creating ripple effects of inspiration and connection.",
      timeline: "4-6 weeks after recording"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The 
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From application to broadcast, we'll support you every step of the way. 
            Our process is designed to honor your story and ensure you feel empowered throughout the experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 relative">
                  <step.icon className="w-6 h-6 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-xs font-bold text-purple-600 border-2 border-purple-200">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {step.timeline}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-center">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Commitment to You</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              We understand that sharing your story requires courage and trust. Through our verification process, we ensure 
              a safe, authentic community of storytellers. You'll have full control over your narrative and connect with 
              Mel Robbins and fellow verified storytellers in an intimate group setting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="font-semibold text-purple-600 dark:text-purple-400">Verified Community</p>
                <p className="text-gray-600 dark:text-gray-300">Connect with authenticated storytellers</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="font-semibold text-purple-600 dark:text-purple-400">No Cost Required</p>
                <p className="text-gray-600 dark:text-gray-300">Completely free after verification</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="font-semibold text-purple-600 dark:text-purple-400">Group Experience</p>
                <p className="text-gray-600 dark:text-gray-300">Intimate setting with Mel and peers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
