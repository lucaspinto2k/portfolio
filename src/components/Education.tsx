"use client";

import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

interface Education {
  school: string;
  degree: string;
  period: string;
  logo: string;
}

interface Certification {
  name: string;
  organization: string;
  issueDate: string;
  logo: string;
}

const Education: React.FC = () => {
  const { dict } = useLanguage();
  
  const education = dict.education.schools;
  const certifications = dict.education.certifications;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-on-scroll">{dict.education.title}</h2>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="animate-on-scroll border-2 hover:border-brand-purple dark:hover:border-primary transition-all duration-300 p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-card flex items-center justify-center">
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground dark:text-muted-foreground">
                      {edu.school} | <span className="text-brand-purple dark:text-primary">{edu.period}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">{dict.education.certificationsTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="animate-on-scroll p-6 rounded-lg border hover:border-brand-purple dark:hover:border-primary transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-card flex items-center justify-center">
                      <img
                        src={cert.logo}
                        alt={`${cert.organization} logo`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">{cert.organization}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground">
                    <p>{cert.issueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
