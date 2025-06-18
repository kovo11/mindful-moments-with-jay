
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
    content: "Honestly wasn't sure about this at first but the whole process was so supportive. My story aired last month and I've had strangers message me saying it helped them through their own struggles. Worth it 100%",
    author: "Maya Rodriguez",
    role: "Teacher & Mom",
    image: "https://i.pravatar.cc/150?img=32",
    social: "@maya_teaches"
  },
  {
    content: "The prep call really helped me get clear on what I wanted to share. Jay asked questions I hadn't even thought of. Still get chills listening back to my episode.",
    author: "David Kim",
    role: "Small Business Owner",
    image: "https://i.pravatar.cc/150?img=69",
    social: "@davidbuilds"
  },
  {
    content: "I was nervous about being so vulnerable on such a big platform, but the team made it feel safe. My episode just went live and the response has been incredible. People are sharing their own stories now too ❤️",
    author: "Priya Patel",
    role: "Wellness Coach",
    image: "https://i.pravatar.cc/150?img=47",
    social: "@priyawellness"
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-purple-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery & Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See highlights from recent recording sessions and hear from guests who've shared their stories.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/8ab62c60-56db-42f0-92da-5f70de8eb564.png" 
              alt="Recording Session" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/23629d4e-57cb-4704-bc8c-1cf3f9c8519f.png" 
              alt="Jay Shetty Portrait" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/ee47be30-7138-4562-bcc7-070fc2713f63.png" 
              alt="Interview Setup" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/99ab6ae0-9b81-4c92-b077-83ecd1b587e8.png" 
              alt="Jay with Guest" 
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
                      <p className="text-xs text-purple-600 dark:text-purple-400">{testimonial.social}</p>
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
