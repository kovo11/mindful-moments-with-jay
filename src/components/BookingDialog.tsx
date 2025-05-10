
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [dietaryRequirements, setDietaryRequirements] = useState("");
  const [questions, setQuestions] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setAttendees(1);
    setDate(undefined);
    setDietaryRequirements("");
    setQuestions("");
    setMarketingConsent(false);
    setStep(1);
  };
  
  const handleClose = () => {
    onOpenChange(false);
    setTimeout(resetForm, 300);
  };
  
  const handleNextStep = () => {
    setStep(2);
  };
  
  const handlePrevStep = () => {
    setStep(1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      handleClose();
      
      toast({
        title: "Booking Successful!",
        description: "Thank you for booking. You'll receive a confirmation email shortly.",
        duration: 5000,
      });
    }, 1500);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg" onInteractOutside={(e) => e.preventDefault()}>
        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Book Your Spot</DialogTitle>
                <DialogDescription>
                  Fill in your details to reserve your place at a Jay Shetty meet & greet event.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-6 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="required">Full Name</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="required">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="required">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input 
                      id="company" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Optional" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="attendees" className="required">Number of Attendees</Label>
                    <Input 
                      id="attendees" 
                      type="number" 
                      min="1" 
                      max="10" 
                      value={attendees}
                      onChange={(e) => setAttendees(parseInt(e.target.value))}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date" className="required">Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          id="date"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(d) => 
                            d < new Date(new Date().setDate(new Date().getDate() - 1)) || 
                            d > new Date(2026, 0, 1)
                          }
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button 
                  type="button" 
                  onClick={handleNextStep}
                  disabled={!name || !email || !phone || !date}
                >
                  Next Step
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Additional Information</DialogTitle>
                <DialogDescription>
                  Please provide any additional details to help us prepare for your visit.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-6 py-4">
                <div className="space-y-2">
                  <Label htmlFor="dietary">Dietary Requirements</Label>
                  <Input 
                    id="dietary" 
                    value={dietaryRequirements}
                    onChange={(e) => setDietaryRequirements(e.target.value)}
                    placeholder="Vegetarian, vegan, allergies, etc. (Optional)" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="questions">Questions or Special Requests</Label>
                  <Textarea 
                    id="questions" 
                    value={questions}
                    onChange={(e) => setQuestions(e.target.value)}
                    placeholder="Is there anything specific you'd like to discuss with Jay? (Optional)" 
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="marketing" 
                    checked={marketingConsent}
                    onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                  />
                  <Label htmlFor="marketing" className="text-sm leading-tight">
                    I agree to receive marketing emails from Jay Shetty's team about 
                    upcoming events, resources, and offers. I understand I can unsubscribe at any time.
                  </Label>
                </div>
                
                <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-md">
                  <h4 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Booking Process</h4>
                  <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-decimal list-inside">
                    <li>Complete this form with your details</li>
                    <li>Receive a confirmation email with payment link</li>
                    <li>Complete payment to secure your spot</li>
                    <li>Receive final confirmation and event details</li>
                  </ol>
                </div>
              </div>
              
              <DialogFooter className="flex-col gap-2 sm:flex-row sm:justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handlePrevStep}
                >
                  Back
                </Button>
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Complete Booking"}
                </Button>
              </DialogFooter>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
