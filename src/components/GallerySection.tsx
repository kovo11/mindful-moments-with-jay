
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image?: string;
  social?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "I was stuck in analysis paralysis for months about starting my business. After sharing my 5-4-3-2-1 breakthrough moment with Mel, I finally took action. The response has been incredible - so many people messaged saying my story gave them the push they needed too!",
    author: "Sarah Chen",
    role: "Entrepreneur & Mom",
    image: "https://i.pravatar.cc/150?img=32",
    social: "@sarahbuilds"
  },
  {
    content: "Mel helped me realize that my fear of public speaking was just my brain trying to 'protect' me. Counting down 5-4-3-2-1 before taking the stage changed everything. Now I help others do the same through my story on the series.",
    author: "Marcus Johnson",
    role: "Teacher & Speaker",
    image: "https://i.pravatar.cc/150?img=69",
    social: "@marcusspeaks"
  },
  {
    content: "The recording process was so supportive. Mel really listened and helped me find the core of my transformation story. When my episode aired, the messages I got from listeners who related to my journey made it all worth it. We're creating real change together! 🚀",
    author: "Emily Rodriguez",
    role: "Life Coach",
    image: "https://i.pravatar.cc/150?img=47",
    social: "@emilycoaches"
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-red-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery & Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See highlights from recent recording sessions and hear from guests who've shared their breakthrough stories.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/b4ee70a0-f33f-4aa6-84ee-8b12f1bcd39b.png" 
              alt="Mel Robbins speaking at event with audience" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/d2497e17-07a8-4c1f-bb94-28c483005175.png" 
              alt="Mel Robbins podcast recording session" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/47667ddd-6b60-4538-9597-8472b4b433a6.png" 
              alt="Mel Robbins with Oprah Winfrey" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/3219ad76-6fef-41ef-a263-165e04075657.png" 
              alt="Mel Robbins in podcast studio" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    {testimonial.social && (
                      <p className="text-xs text-red-600 dark:text-red-400">{testimonial.social}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
