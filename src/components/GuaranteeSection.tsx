
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Clock, Heart } from "lucide-react";

const GuaranteeSection = () => {
  const guaranteePoints = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "We guarantee professional-grade production quality that meets Mel Robbins' high standards for authenticity and impact."
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
    },
    {
      icon: Shield,
      title: "Professional Standards",
      description: "We maintain the highest level of professionalism and integrity throughout your entire storytelling journey."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our 
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent ml-2">
              Commitment
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We stand behind our commitment to honor your breakthrough story with the highest level of professionalism and care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {guaranteePoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
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

          <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 text-center">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Questions or Concerns:</strong> If you have any questions about our process or need support, 
              please email us at{" "}
              <a href="mailto:stories@melrobbins.com" className="text-red-600 dark:text-red-400 hover:underline">
                stories@melrobbins.com
              </a>{" "}
              and we'll be happy to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
