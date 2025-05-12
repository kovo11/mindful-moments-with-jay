
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { initEmailJS, sendBookingEmails } from "@/utils/emailUtils";
import { z } from "zod";

// Email validation schema
const registerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  isAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to receive email updates",
  }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

const RegisterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterFormData, string>>>({});
  
  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);
  
  const validateForm = (): boolean => {
    const formData = { name, email, isAgreed };
    const result = registerFormSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RegisterFormData, string>> = {};
      
      result.error.errors.forEach(error => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof RegisterFormData] = error.message;
        }
      });
      
      setErrors(fieldErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const registrationDetails = `
        Name: ${name}
        Email: ${email}
        Marketing Consent: ${isAgreed ? 'Yes' : 'No'}
        Registration Type: Interest List
        Date Submitted: ${new Date().toLocaleString()}
      `.trim();
      
      // Send interest registration emails
      await sendBookingEmails(
        email,
        name,
        "Global Events",
        "interest_registration",
        registrationDetails
      );
      
      toast({
        title: "Registration Successful",
        description: "Thank you for your interest! We'll notify you about upcoming events.",
        duration: 5000,
      });
      
      setEmail("");
      setName("");
      setIsAgreed(false);
    } catch (error) {
      console.error("Error submitting registration:", error);
      
      toast({
        title: "Registration Failed",
        description: "We couldn't process your registration. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
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
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="agree" 
                checked={isAgreed}
                onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
                required 
                className={errors.isAgreed ? "border-red-500" : ""}
              />
              <Label htmlFor="agree" className="text-sm leading-tight">
                I agree to receive email updates about Jay Shetty's events and can unsubscribe at any time.
              </Label>
            </div>
            {errors.isAgreed && <p className="text-sm text-red-500">{errors.isAgreed}</p>}
            
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
