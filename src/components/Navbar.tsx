
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isScrolled: boolean;
  openBooking: () => void;
}

const Navbar = ({ isScrolled, openBooking }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Jay Shetty</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection("events")} className="text-sm font-medium hover:text-purple-500 transition-colors">Events</button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-purple-500 transition-colors">About</button>
          <button onClick={() => scrollToSection("gallery")} className="text-sm font-medium hover:text-purple-500 transition-colors">Gallery</button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-purple-500 transition-colors">FAQ</button>
          
          <div className="flex items-center space-x-2">
            <a href="https://www.instagram.com/jayshetty/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4 text-gray-600 hover:text-purple-500 transition-colors" />
            </a>
            <a href="https://www.facebook.com/JayShettyIW/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-4 w-4 text-gray-600 hover:text-purple-500 transition-colors" />
            </a>
            <a href="https://twitter.com/jayshetty" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-4 w-4 text-gray-600 hover:text-purple-500 transition-colors" />
            </a>
          </div>
          
          <Button 
            onClick={openBooking} 
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90"
          >
            Book Now
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex flex-col space-y-4">
          <button onClick={() => scrollToSection("events")} className="text-left py-2 hover:text-purple-500 transition-colors">Events</button>
          <button onClick={() => scrollToSection("about")} className="text-left py-2 hover:text-purple-500 transition-colors">About</button>
          <button onClick={() => scrollToSection("gallery")} className="text-left py-2 hover:text-purple-500 transition-colors">Gallery</button>
          <button onClick={() => scrollToSection("faq")} className="text-left py-2 hover:text-purple-500 transition-colors">FAQ</button>
          
          <div className="flex items-center space-x-4 py-2">
            <a href="https://www.instagram.com/jayshetty/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-purple-500 transition-colors" />
            </a>
            <a href="https://www.facebook.com/JayShettyIW/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-purple-500 transition-colors" />
            </a>
            <a href="https://twitter.com/jayshetty" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-purple-500 transition-colors" />
            </a>
          </div>
          
          <Button 
            onClick={() => {
              openBooking();
              setIsMenuOpen(false);
            }} 
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 w-full"
          >
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
