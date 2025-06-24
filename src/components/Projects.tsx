import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

import bchainProject from "../assets/bchainProject.png";
import littlelemonProject from "../assets/little-lemon.png";
import thesisProject from "../assets/thesisProject.png";
import portfolioProject from "../assets/portfolioProject.png";
import trackflow from "../assets/trackflow.png";
import todoList from "../assets/todo-list.png";

const projects = [
  {
    id: 1,
    title: "Track Flow",
    description:
      "TrackFlow is a streamlined task and document management system designed to help teams organize, track, and complete deliverables efficiently across departments.",
    image: trackflow,
    tags: ["MERN", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/PaoloBaltazar/TrackFlow-MERN",
  },
  {
    id: 2,
    title: "Grade Predictor App",
    description:
      "The Grade Predictor App is a machine learning-powered tool that estimates students' final grades based on their academic performance",
    image: thesisProject,
    tags: ["HTML/CSS", "JavaScript", "Python"],
    link: "https://github.com/PaoloBaltazar/thesis-grade-predictor-app",
  },
  {
    id: 3,
    title: "Little Lemon Booking Website",
    description:
      "The Meta Little Lemon Booking Website is a responsive restaurant reservation platform built with React, designed to streamline table bookings and enhance user experience",
    image: littlelemonProject,
    tags: ["HTML/CSS", "JavaScript", "React"],
    link: "https://github.com/PaoloBaltazar/Meta-LittleLemon-Booking-Website",
  },
  {
    id: 4,
    title: "Hotel Dapp",
    description:
      "The Hotel dApp is a decentralized hotel booking application built with React and Solidity, enabling secure room reservations and transparent payments on the blockchain.",
    image: bchainProject,
    tags: ["Solidity", "React", "HTML/CSS", "JavaScript"],
    link: "https://github.com/PaoloBaltazar/BlockChain-Based-Hotel-System",
  },
  {
    id: 5,
    title: "Portfolio Website V1",
    description:
      "The Portfolio Website is a sleek, single-page React application showcasing my projects, skills, and contact information with smooth scroll navigation and responsive design.",
    image: portfolioProject,
    tags: ["TypeScript", "React/Vite", "Tailwind CSS"],
    link: "https://github.com/PaoloBaltazar/tailwind-portfolio-website",
  },
  {
    id: 6,
    title: "Todo List App",
    description:
      "The Todo List App is a simple and intuitive task management tool that allows users to create, update, and organize tasks with ease.",
    image: todoList,
    tags: ["HTML/CSS", "JavaScript"],
    link: "https://github.com/PaoloBaltazar/Todo-List-App",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    // Animate projects appearing one by one
    const showProjectsWithDelay = () => {
      const timer = setInterval(() => {
        setVisibleProjects((prev) => {
          const nextIndex = prev.length;
          if (nextIndex < projects.length) {
            return [...prev, nextIndex];
          }
          clearInterval(timer);
          return prev;
        });
      }, 200);

      return () => clearInterval(timer);
    };

    showProjectsWithDelay();
  }, []);

  return (
    <section id="projects" className="section container mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-2 font-bold">Projects</h2>
        <p className="mx-auto max-w-[800px] text-muted-foreground">
          A collection of projects that showcase my skills and experience
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={`overflow-hidden transform transition-all duration-500 hover:scale-[1.02] ${
              visibleProjects.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="transition-colors hover:bg-secondary/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary underline-offset-4 hover:underline transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                View Project
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
