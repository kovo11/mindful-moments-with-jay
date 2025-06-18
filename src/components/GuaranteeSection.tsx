
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Clock, Heart } from "lucide-react";

const GuaranteeSection = () => {
  const guaranteePoints = [
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied with your experience, we'll provide a full refund within 30 days of your recording session."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "We guarantee professional-grade production quality that meets the standards of the On Purpose podcast."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Your episode will be produced and delivered within our promised timeframe, or we'll extend additional support at no cost."
    },
    {
      icon: Heart,
      title: "Respectful Treatment",
      description: "We commit to treating your story with the utmost respect and care throughout the entire process."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our 
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Guarantee
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We stand behind our commitment to honor your story with the highest level of professionalism and care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-green-200 dark:border-green-800 shadow-lg mb-8">
            <CardHeader className="text-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold mb-2">30-Day Money-Back Guarantee</CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Your investment is protected. If for any reason you're not satisfied with our service, 
                we'll provide a full refund within 30 days of your recording session.
              </p>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {guaranteePoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 text-center">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>How to Request a Refund:</strong> Simply email us at{" "}
              <a href="mailto:on-purpose@jayshetty.info" className="text-purple-600 dark:text-purple-400 hover:underline">
                on-purpose@jayshetty.info
              </a>{" "}
              within 30 days of your recording session. We'll process your refund within 5-7 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
