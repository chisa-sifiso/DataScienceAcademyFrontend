import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Brain, Code, BookOpen, Globe, Rocket } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const HeroSection = () => {
  const icons = [
    { Icon: BarChart3, label: "Data Visualization", delay: "18s" },
    { Icon: Brain, label: "Machine Learning", delay: "0.5s" },
    { Icon: Code, label: "Programming", delay: "1s" },
    { Icon: BookOpen, label: "Study Resources", delay: "1.5s" },
    { Icon: Globe, label: "Digital Skills", delay: "2s" },
    { Icon: Rocket, label: "Career Growth", delay: "2.5s" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay
        muted 
       
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://videocdn.pollo.ai/web-cdn/pollo/production/cmdkpsg8o0f5q7en4losa6lx1/ori/1753758951032-24d22dd1-fac3-4b05-b4ef-ef2cf4b5f9f3.mp4" 
          type="video/mp4" 
        />
      </video>

      
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Floating Icons */}
      <TooltipProvider>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {icons.map(({ Icon, label, delay }, index) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <div 
                  className="absolute pointer-events-auto cursor-pointer transform hover:scale-125 transition-all duration-300 hover:drop-shadow-lg animate-bounce"
                  style={{
                    top: `${60 + (index % 3) * -20}%`,
                    left: `${25 + (index % 2) * 40 + Math.sin(index) * 10}%`,
                    animationDelay: delay,
                    animationDuration: '3s'
                  }}
                >
                  <Icon 
                    size={49} 
                    className="text-white/80 hover:text-tech-teal transition-colors duration-300 drop-shadow-md" 
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium">{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
         
          
          <div className="flex justify-center mt-12">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;