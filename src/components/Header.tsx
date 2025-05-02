
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events for navbar animation and active section
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolling down
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add smooth scrolling effect
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    setIsOpen(false);
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full border-b backdrop-blur transition-all duration-300",
      scrolled ? "bg-background/95 shadow-sm" : "bg-background/50"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center">
          <a 
            href="#home" 
            className="text-xl font-bold transition-transform hover:scale-105 duration-300"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <span className="text-primary">GPB</span>
          </a>
        </div>

        {/* Desktop Navigation - Updated order: Home, About, Projects, Contact */}
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <li key={item} className="relative">
                  <a
                    href={`#${sectionId}`}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-foreground/80 py-1 px-2 relative",
                      activeSection === sectionId ? "text-primary" : ""
                    )}
                    onClick={(e) => handleLinkClick(e, `#${sectionId}`)}
                  >
                    {item}
                    {activeSection === sectionId && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle className="ml-2" />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle className="mr-2" />
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XIcon className="h-6 w-6 transition-opacity duration-300" />
            ) : (
              <MenuIcon className="h-6 w-6 transition-opacity duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Updated order: Home, About, Projects, Contact */}
        <div
          className={cn(
            "absolute left-0 top-16 w-full bg-background md:hidden transition-all duration-300",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="border-b px-2 pb-3 pt-2">
            <ul className="space-y-1">
              {["Home", "About", "Projects", "Contact"].map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <li key={item} className="overflow-hidden">
                    <a
                      href={`#${sectionId}`}
                      className={cn(
                        "block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground rounded-md", 
                        activeSection === sectionId ? "text-primary bg-accent/50" : "",
                        isOpen ? "translate-x-0" : "translate-x-4"
                      )}
                      onClick={(e) => handleLinkClick(e, `#${sectionId}`)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
