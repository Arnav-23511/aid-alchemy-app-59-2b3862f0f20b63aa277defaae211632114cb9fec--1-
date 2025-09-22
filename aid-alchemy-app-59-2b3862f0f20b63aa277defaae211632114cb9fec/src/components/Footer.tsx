import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary-glow mb-4">CareTaker Pro</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting property owners with trusted, verified caretakers. 
              Your property's security and maintenance is our priority.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary-glow">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary-glow">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary-glow">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary-glow">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-primary-glow transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary-glow transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-glow transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-primary-glow transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-primary-glow transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="text-lg font-semibold mb-6">For Users</h4>
            <ul className="space-y-3">
              <li><a href="#hire" className="text-gray-300 hover:text-primary-glow transition-colors">Hire Caretaker</a></li>
              <li><a href="#become" className="text-gray-300 hover:text-primary-glow transition-colors">Become Caretaker</a></li>
              <li><a href="#dashboard" className="text-gray-300 hover:text-primary-glow transition-colors">User Dashboard</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-primary-glow transition-colors">Reviews & Ratings</a></li>
              <li><a href="#support" className="text-gray-300 hover:text-primary-glow transition-colors">Help & Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-gray-300">support@caretakerpro.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow mt-1" />
                <span className="text-gray-300">
                  123 Business District,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CareTaker Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-primary-glow transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-primary-glow transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-gray-400 hover:text-primary-glow transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="action" 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;