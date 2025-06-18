
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Real People, Real Stories
              </span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              A special mini-series from On Purpose with Jay Shetty, featuring authentic stories 
              of transformation, resilience, and hope.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/jayshetty/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-purple-400 transition-colors">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/JayShettyIW/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-purple-400 transition-colors">
                <Facebook />
              </a>
              <a href="https://twitter.com/jayshetty" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-purple-400 transition-colors">
                <Twitter />
              </a>
              <a href="https://www.youtube.com/c/JayShetty" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="hover:text-purple-400 transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#stories" className="hover:text-purple-400 transition-colors">Stories We're Looking For</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About the Series</a></li>
              <li><a href="#gallery" className="hover:text-purple-400 transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#register" className="hover:text-purple-400 transition-colors">Apply</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact & Partners</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: on-purpose@jayshetty.info</li>
              <li>Phone: +1 (888) 555-0123</li>
              <li className="pt-2">
                <p className="text-sm">Co-produced with:</p>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">Mindvalley Media</a>
              </li>
              <li>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">On Purpose Community</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Real People, Real Stories. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
