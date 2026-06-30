"use client";

import { useRef, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Code, 
  Database, 
  Terminal, 
  Laptop,
  FileImage
} from "lucide-react";
import SkillGrid from "./skills/SkillGrid";
import { skillCategories } from "./skills/skillCategories";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { dict } = useLanguage();

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
    <section id="skills" className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-6 bg-transparent" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 text-foreground tracking-tight">
            {dict.skills.title}
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {dict.skills.subtitle}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="w-full space-y-2">
            
            {/* Development */}
            <AccordionItem value="development" className="bg-white/70 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-sm px-2">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:text-brand-purple transition-colors">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 bg-brand-purple/10 dark:bg-primary/20 rounded-lg">
                    <Code className="h-5 w-5 text-brand-purple dark:text-primary" />
                  </div>
                  <span className="text-lg font-display font-semibold">{dict.skills.development}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-1 border-t border-white/10 dark:border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">{dict.skills.languages}</h4>
                    <SkillGrid skills={skillCategories.development.languages} />
                  </div>
                  <div>
                    <h4 className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">{dict.skills.tools}</h4>
                    <SkillGrid skills={skillCategories.development.tools} />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* AI Tools */}
            <AccordionItem value="ai" className="bg-white/70 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-sm px-2">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:text-brand-purple transition-colors">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 bg-brand-purple/10 dark:bg-primary/20 rounded-lg">
                    <Terminal className="h-5 w-5 text-brand-purple dark:text-primary" />
                  </div>
                  <span className="text-lg font-display font-semibold">{dict.skills.ai}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-1 border-t border-white/10 dark:border-white/5">
                <div className="pt-2">
                  <SkillGrid skills={skillCategories.ai} />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Productivity */}
            <AccordionItem value="productivity" className="bg-white/70 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-sm px-2">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:text-brand-purple transition-colors">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 bg-brand-purple/10 dark:bg-primary/20 rounded-lg">
                    <Laptop className="h-5 w-5 text-brand-purple dark:text-primary" />
                  </div>
                  <span className="text-lg font-display font-semibold">{dict.skills.productivity}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-1 border-t border-white/10 dark:border-white/5">
                <div className="pt-2">
                  <SkillGrid skills={skillCategories.productivity} />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Analytics */}
            <AccordionItem value="analytics" className="bg-white/70 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-sm px-2">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:text-brand-purple transition-colors">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 bg-brand-purple/10 dark:bg-primary/20 rounded-lg">
                    <Database className="h-5 w-5 text-brand-purple dark:text-primary" />
                  </div>
                  <span className="text-lg font-display font-semibold">{dict.skills.analytics}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-1 border-t border-white/10 dark:border-white/5">
                <div className="pt-2">
                  <SkillGrid skills={skillCategories.analytics} />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Creative */}
            <AccordionItem value="creative" className="bg-white/70 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-sm px-2">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:text-brand-purple transition-colors">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 bg-brand-purple/10 dark:bg-primary/20 rounded-lg">
                    <FileImage className="h-5 w-5 text-brand-purple dark:text-primary" />
                  </div>
                  <span className="text-lg font-display font-semibold">{dict.skills.creative}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-1 border-t border-white/10 dark:border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">{dict.skills.audio}</h4>
                    <SkillGrid skills={skillCategories.creative.audio} />
                  </div>
                  <div>
                    <h4 className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">{dict.skills.video}</h4>
                    <SkillGrid skills={skillCategories.creative.video} />
                  </div>
                  <div>
                    <h4 className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">{dict.skills.design}</h4>
                    <SkillGrid skills={skillCategories.creative.design} />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Skills;

