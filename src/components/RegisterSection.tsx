
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const RegisterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Successful",
        description: "Thank you for your interest! We'll notify you about upcoming events.",
        duration: 5000,
      });
      setEmail("");
      setName("");
      setIsAgreed(false);
    }, 1000);
  };
  
  return (
    <section id="register" className="py-16 md:py-24 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/70 dark:bg-gray-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Register your interest for future events with Jay Shetty and be the first to know
              when new meet & greet opportunities become available.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="agree" 
                checked={isAgreed}
                onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
                required 
              />
              <Label htmlFor="agree" className="text-sm leading-tight">
                I agree to receive email updates about Jay Shetty's events and can unsubscribe at any time.
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register Interest"}
            </Button>
          </form>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Benefits of Attending Jay's Events</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>Personalized guidance and insights from Jay</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>Practical wisdom you can apply immediately</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>Connect with like-minded community members</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>Exclusive content not available elsewhere</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>Photo opportunities and signed merchandise</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
