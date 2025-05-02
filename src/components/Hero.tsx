
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setIsVisible(true);
  }, []);

  // Handle smooth scrolling for anchor links
  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth"
      });
    }
  };

  // Handle resume download
  const handleDownloadResume = () => {
    // This is a placeholder URL - replace with actual resume file path
    const resumeUrl = "/resume.pdf";
    
    // Create temporary link and click it
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "paolo-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-full w-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-primary border-opacity-5" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div 
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-sm uppercase tracking-widest font-light mb-2 block text-muted-foreground">
              Welcome to my portfolio
            </span>
            <h1 className="max-w-3xl font-bold leading-tight mb-2">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Paolo</span>
            </h1>
            <p className="max-w-[42rem] text-xl text-muted-foreground sm:text-2xl mt-4 mb-8">
              Front-end developer specializing in creating responsive, user-friendly web experiences
            </p>
          </div>
          
          <div 
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="animate-pulse hover:animate-none hover:transform hover:scale-105 transition-all"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="hover:transform hover:scale-105 transition-all"
            >
              <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>

      {/* Corners decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary opacity-20"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-primary opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-primary opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary opacity-20"></div>
    </section>
  );
};

export default Hero;
