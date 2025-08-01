import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "programs", "locations"];
      const scrollY = window.scrollY;
      
      // Check if we're in hero section (top of page)
      if (scrollY < 100) {
        setCurrentSection("home");
        return;
      }

      // Check which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSpecialSection = ["about", "programs", "locations"].includes(currentSection);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isSpecialSection ? "glass-nav-enhanced" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
           <Link to="/" className="flex items-center space-x-3 text-white font-inter">
           <img
    src="/DataScienceLogo.png"
    alt="Logo"
    className="h-20 w-20 object-contain filter invert"
  />
  <span className="text-2xl font-bold">Data Science Academy</span>
</Link>

      </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/90 hover:text-white transition-colors font-medium">About</a>
            <a href="#programs" className="text-white/90 hover:text-white transition-colors font-medium">Programs</a>
            <a href="#why-us" className="text-white/90 hover:text-white transition-colors font-medium">Why Us</a>
            <a href="#locations" className="text-white/90 hover:text-white transition-colors font-medium">Locations</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors font-medium">Contact</a>
            <ThemeToggle />
            <Link to="/apply">
              <Button>Apply Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/20 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-white/90 hover:text-white">About</a>
              <a href="#programs" className="block px-3 py-2 text-white/90 hover:text-white">Programs</a>
              <a href="#why-us" className="block px-3 py-2 text-white/90 hover:text-white">Why Us</a>
              <a href="#locations" className="block px-3 py-2 text-white/90 hover:text-white">Locations</a>
              <a href="#contact" className="block px-3 py-2 text-white/90 hover:text-white">Contact</a>
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-white/90">Theme</span>
                <ThemeToggle />
              </div>
              <div className="px-3 py-2">
                <Link to="/apply">
                  <Button className="w-full">Apply Now</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;