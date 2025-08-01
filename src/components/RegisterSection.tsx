
import { Button } from "@/components/ui/button";

const RegisterSection = () => {
  const handleRegisterClick = () => {
    // Scroll to top of page where booking form is available
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Trigger the booking dialog after a short delay
    setTimeout(() => {
      const heroBookButton = document.querySelector('[data-hero-book-button]') as HTMLButtonElement;
      if (heroBookButton) {
        heroBookButton.click();
      }
    }, 500);
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
        <div className="absolute inset-0 bg-red-900/70 dark:bg-gray-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Register your interest for future events with Mel Robbins and be the first to know
              when new storytelling opportunities become available.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleRegisterClick}
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 text-lg py-3"
            >
              Register Interest
            </Button>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Benefits of Connecting with Mel</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">✓</span>
                Be the first to know about new storytelling opportunities
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">✓</span>
                Receive inspiration and tools for personal transformation
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">✓</span>
                Access to exclusive content and resources
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">✓</span>
                Connect with a community of action-takers
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">✓</span>
                Priority access to future events and programs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
