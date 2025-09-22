import { Button } from "@/components/ui/button";
import { Menu, X, Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SettingsSidebar from "./SettingsSidebar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="text-2xl font-bold text-primary">CareTaker Pro</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => navigate("/")} className="text-foreground hover:text-primary transition-colors">Home</button>
            <button onClick={() => navigate("/about")} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => navigate("/services")} className="text-foreground hover:text-primary transition-colors">Services</button>
            <button onClick={() => navigate("/job-forum")} className="text-foreground hover:text-primary transition-colors">Job Forum</button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setIsSettingsOpen(true)}>
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" onClick={() => navigate("/signin")}>Sign In</Button>
            <Button variant="professional" onClick={() => navigate("/post-requirement")}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <button onClick={() => navigate("/")} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">Home</button>
              <button onClick={() => navigate("/about")} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">About</button>
              <button onClick={() => navigate("/services")} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">Services</button>
              <button onClick={() => navigate("/job-forum")} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">Job Forum</button>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="icon" className="flex-shrink-0" onClick={() => setIsSettingsOpen(true)}>
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="flex-1 justify-center" onClick={() => navigate("/signin")}>Sign In</Button>
                  <Button variant="professional" className="flex-1 justify-center" onClick={() => navigate("/post-requirement")}>Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <SettingsSidebar 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </header>
  );
};

export default Header;