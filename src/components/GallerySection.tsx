
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Meeting Jay in person was truly life-changing. His wisdom and presence radiate in a way that can't be captured through videos or podcasts. Worth every penny!",
    author: "Sarah Johnson",
    role: "CEO, Mindful Living Co.",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    content: "The intimate setting of Jay's event allowed for meaningful connections not just with him but with other attendees. I left with new perspectives and lifelong friends.",
    author: "Michael Chen",
    role: "Author & Entrepreneur",
    image: "https://i.pravatar.cc/150?img=69"
  },
  {
    content: "Jay has a remarkable ability to make complex wisdom accessible and practical. I've been implementing his advice for months now and seeing real changes in my life.",
    author: "Priya Patel",
    role: "Wellness Coach",
    image: "https://i.pravatar.cc/150?img=47"
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-purple-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery & Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See highlights from past events and hear what attendees have to say about their experience with Jay.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/8ab62c60-56db-42f0-92da-5f70de8eb564.png" 
              alt="Jay Shetty Event" 
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
              alt="Jay Shetty Speaking" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/99ab6ae0-9b81-4c92-b077-83ecd1b587e8.png" 
              alt="Jay Shetty with Guests" 
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
                  </div>
                </div>
                <p className="italic text-gray-700 dark:text-gray-300">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
