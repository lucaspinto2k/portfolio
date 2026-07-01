"use client";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Image } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  logo: string;
  location?: string;
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { dict } = useLanguage();
  
  const experiences = dict.experience.jobs;
  const priorExperiences = dict.experience.priorJobs;

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
          elements.forEach((el) => {
            el.classList.add('animated');
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-4" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-on-scroll">{dict.experience.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-on-scroll border-2 hover:border-brand-purple dark:hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {exp.company} | <span className="text-brand-purple dark:text-primary">{exp.duration}</span>
                    </CardDescription>
                    {exp.location && (
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">{exp.location}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground dark:text-muted-foreground">{exp.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-muted dark:bg-muted rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <h3 className="section-title text-center text-2xl mt-16 mb-8 animate-on-scroll">{dict.experience.priorTitle}</h3>
        
        <Card className="animate-on-scroll border border-gray-200 dark:border-gray-800">
          <CardContent className="p-6">
            <div className="space-y-4">
              {priorExperiences.map((exp, index) => (
                <div key={index} className="flex flex-col">
                  <div className="font-semibold">{exp.title}</div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground">
                    {exp.company} | {exp.duration} | {exp.location}
                  </div>
                  {index < priorExperiences.length - 1 && (
                    <div className="border-b border-gray-200 dark:border-gray-700 my-4"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
