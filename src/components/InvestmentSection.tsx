
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, Heart, Users } from "lucide-react";

interface InvestmentSectionProps {
  openBooking: () => void;
}

const InvestmentSection = ({ openBooking }: InvestmentSectionProps) => {
  const included = [
    "Professional recording session with Jay Shetty",
    "Pre-interview preparation and story coaching",
    "Professional audio production and editing",
    "Global distribution to 50M+ listeners",
    "Promotional support across social media platforms",
    "Lifetime access to your recorded episode",
    "Certificate of participation",
    "Ongoing support throughout the process"
  ];

  const impact = [
    {
      icon: Users,
      title: "Reach Millions",
      description: "Your story will reach a global audience of conscious listeners seeking inspiration and connection."
    },
    {
      icon: Heart,
      title: "Create Healing",
      description: "Help others feel less alone in their struggles and more hopeful about their future."
    },
    {
      icon: CheckCircle,
      title: "Build Legacy",
      description: "Leave a lasting impact that can inspire positive change for generations to come."
    }
  ];

  const handleApplyNow = () => {
    window.open("https://forms.gle/FYMu132khWKLLYiw8", "_blank");
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment in Your 
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Story
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            To ensure the highest quality production and honor the significance of your story, 
            we ask for a one-time production support contribution that covers all professional services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold mb-2">$250</CardTitle>
              <CardDescription className="text-lg">
                Complete Professional Production Package
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">What's Included:</h4>
                  <div className="space-y-3">
                    {included.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">The Impact:</h4>
                  <div className="space-y-4">
                    {impact.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold mb-3">Our Commitment to Your Story:</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Our intention has never been to sell stories. This support fee simply ensures our team can 
                  uphold the integrity, quality, and care your story deserves. This is not a payment for 
                  appearance — it's an investment in your voice being heard the way it should.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Most importantly, it allows us to maintain the quality and integrity that our global 
                  audience expects while giving your story the platform it deserves.
                </p>
              </div>
              
              <div className="text-center">
                <Button
                  onClick={handleApplyNow}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white font-medium px-12 py-4 text-lg"
                >
                  Apply to Share Your Story
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Investment is only required if your application is selected
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
