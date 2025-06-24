import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import {
  Code,
  FileText,
  Layout,
  FileJson,
  MonitorSmartphone,
  Database,
  Terminal,
  Coffee,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Skills data with icons - using available Lucide icons as alternatives
  const skills = [
    { name: "HTML", icon: <FileText className="mr-2" /> },
    { name: "CSS", icon: <Layout className="mr-2" /> },
    { name: "JavaScript", icon: <FileJson className="mr-2" /> },
    { name: "React", icon: <MonitorSmartphone className="mr-2" /> },
    { name: "Node.js", icon: <Terminal className="mr-2" /> },
    { name: "MongoDB", icon: <Database className="mr-2" /> },
    { name: "Python", icon: <Code className="mr-2" /> },
    { name: "Java", icon: <Coffee className="mr-2" /> },
  ];

  useEffect(() => {
    // Set visibility after component mount to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="section container mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-3xl"></div>
      </div>

      <div
        className={`mb-12 text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="mb-2 font-bold">About Me</h2>
        <p className="mx-auto max-w-[800px] text-muted-foreground">
          Learn more about my background, skills, and experience
        </p>
      </div>

      {/* Profile and Background Card - Combined */}
      <Card
        className={`mb-8 overflow-hidden transform transition-all duration-1000 ease-out border-t-4 border-t-primary shadow-md hover:shadow-xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Profile Image - Now using Avatar for circular image */}
            <div className="flex flex-col justify-center items-center">
              <div className="mb-6 w-60 h-60">
                <Avatar className="w-full h-full border-4 border-primary/20 shadow-lg">
                  <AvatarImage
                    src="/lovable-uploads/3c96818c-cc3a-4f9d-8901-0082ecda8772.png"
                    alt="Profile Photo"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl">P</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-semibold text-center">
                Gabriel Paolo Baltazar
              </h3>
              <p className="text-center text-muted-foreground">
                Full-Stack Developer
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <Badge variant="secondary" className="px-3 py-1">
                  CS Graduate
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-1 border-primary/30"
                >
                  Web Developer
                </Badge>
              </div>
            </div>

            {/* Background Section */}
            <div className="flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 -mb-8 -ml-8 bg-primary/10 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-semibold inline-flex items-center">
                  <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  Background
                </h3>
                <p className="mb-4 leading-relaxed">
                  Hi, I'm Paolo—a passionate Full-stack developer dedicated to
                  building clean, responsive, and user-focused digital
                  solutions. I enjoy working across both frontend and backend to
                  create seamless, reliable experiences, and I'm driven by a
                  love for solving problems with efficient, creative thinking.
                </p>
                <p className="text-muted-foreground border-l-2 border-primary/50 pl-4 italic">
                  When I'm not coding, you can find me reading books, learning
                  about cars, or watching movies.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Card - Separate */}
      <Card
        className={`overflow-hidden transform transition-all duration-1000 ease-out border-t-4 border-t-primary shadow-md hover:shadow-xl ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <CardContent className="p-6 relative z-10">
          <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-secondary/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 -mb-8 -ml-8 bg-primary/10 rounded-full blur-xl"></div>

          {/* Skills Section */}
          <div>
            <h3 className="mb-4 text-xl font-semibold inline-flex items-center">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </span>
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className={`flex items-center justify-center p-2 text-sm font-medium transition-all duration-500 delay-${
                    index * 100
                  } hover:scale-105 hover:bg-primary hover:text-primary-foreground ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } shadow-sm`}
                >
                  {skill.icon}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Decorative dots */}
      <div className="hidden md:block absolute top-1/4 left-0 -ml-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/40 mb-2"
            style={{ opacity: 0.7 - i * 0.2 }}
          ></div>
        ))}
      </div>
      <div className="hidden md:block absolute bottom-1/4 right-0 -mr-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/40 mb-2"
            style={{ opacity: 0.7 - i * 0.2 }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default About;
