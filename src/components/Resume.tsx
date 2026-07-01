"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

const Resume = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="resume" className="pt-2 pb-6" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-center animate-on-scroll mb-3">Resume</h2>
        
        <div className="max-w-xl mx-auto animate-on-scroll">
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
            View my detailed resume to learn more about my professional background, education, skills, and accomplishments. Feel free to reach out if you have any questions or would like to discuss potential opportunities.
          </p>
          
          <Button 
            className="bg-brand-purple hover:bg-brand-purple/80 text-white px-6 py-4 rounded-md text-base"
            asChild
          >
            <Link href="/resume">
              <FileText className="mr-2 h-4 w-4" />
              Access Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
