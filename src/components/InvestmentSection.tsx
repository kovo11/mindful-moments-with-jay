
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Heart, Users } from "lucide-react";

interface InvestmentSectionProps {
  openBooking: () => void;
}

const InvestmentSection = ({ openBooking }: InvestmentSectionProps) => {
  const included = [
    "Identity and background verification process",
    "20-minute group preparation call with our team",
    "Professional group recording session with Mel Robbins",
    "Pre-interview preparation and story coaching",
    "Professional audio production and editing",
    "Global distribution to 25M+ followers",
    "Promotional support across social media platforms",
    "Lifetime access to your recorded episode",
    "Certificate of participation"
  ];

  const impact = [
    {
      icon: Users,
      title: "Reach Millions",
      description: "Your story will reach a global audience seeking inspiration and transformation through action."
    },
    {
      icon: Heart,
      title: "Create Change",
      description: "Help others feel empowered to push through fear and take the action they've been avoiding."
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
            Join Our Exclusive 
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent ml-2">
              Community
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We carefully select storytellers through our verification process to ensure authentic, 
            inspiring stories that resonate with our global community of 25M+ followers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-red-200 dark:border-red-800 shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold mb-2">Verified Access</CardTitle>
              <CardDescription className="text-lg">
                Complete Storyteller Experience - No Cost
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
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
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
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold mb-3">Why We Use a Verification Process:</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  To maintain the authenticity and quality our 25M+ followers trust, we carefully verify each 
                  storyteller's identity, location, and business background. This ensures every story shared 
                  is genuine and can truly inspire others to take meaningful action.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Once verified, you'll join a small group session with Mel Robbins herself - completely free. 
                  This intimate setting allows for deeper connection and more impactful storytelling.
                </p>
              </div>
              
              <div className="text-center">
                <Button
                  onClick={handleApplyNow}
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 text-white font-medium px-12 py-4 text-lg"
                >
                  Apply to Share Your Story
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Verification process required - No payment needed
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
