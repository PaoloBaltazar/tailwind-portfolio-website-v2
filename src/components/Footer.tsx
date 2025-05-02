import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Heart,
  Download,
  FileText,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-secondary/30 border-t py-16">
      <div className="container mx-auto px-4">
        {/* Footer Top Section with Grid Layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Paolo</h3>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Full-stack developer specializing in building responsive,
              user-friendly, and scalable web applications
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/paolo-baltazar-b4733218b/"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/PaoloBaltazar"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.facebook.com/paolo.baltazar.102"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links - Updated order: Home, About, Projects, Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary mr-2"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary mr-2"></span>
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary mr-2"></span>
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary mr-2"></span>
                    Contact
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleDownloadResume}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary mr-2"></span>
                    Download Resume
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Me</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:gpaolobaltazar@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    gpaolobaltazar@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:09605260393"
                    className="hover:text-primary transition-colors"
                  >
                    09605260393
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <span>Lubao, Pampanga, Philippines</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-4">
              Send me a message and I'll get back to you as soon as possible.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-primary rounded-md bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8 bg-primary/20" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Paolo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
