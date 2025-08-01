import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/footer-bg.png)' }}
      ></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative z-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/DataScienceLogo.png"
                alt="Data Science Academy Logo"
                className="h-12 w-12 object-contain filter invert"
              />
              <h3 className="text-2xl font-bold">Data Science Academy</h3>
            </div>
            <p className="text-white/80 mb-4">
              Empowering the next generation of tech leaders through cutting-edge data science education.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 rounded-full btn-gradient hover:scale-110 transition-transform cursor-pointer">
                <Facebook size={16} className="text-white" />
              </div>
              <div className="p-2 rounded-full btn-gradient hover:scale-110 transition-transform cursor-pointer">
                <Twitter size={16} className="text-white" />
              </div>
              <div className="p-2 rounded-full btn-gradient hover:scale-110 transition-transform cursor-pointer">
                <Linkedin size={16} className="text-white" />
              </div>
              <div className="p-2 rounded-full btn-gradient hover:scale-110 transition-transform cursor-pointer">
                <Instagram size={16} className="text-white" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><Link to="/apply" className="hover:text-white transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-white/80">
              <li><span className="hover:text-white transition-colors cursor-pointer">Artificial Intelligence</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Machine Learning</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Cloud Computing</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Cybersecurity</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="text-white/80 space-y-2">
              <p>+27 (0)11 234 5678</p>
              <p>info@datascienceacademy.co.za</p>
              <p>Midrand & Polokwane</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Data Science Academy. All rights reserved. | MICT-SETA Accredited | QCTO Recognized</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;