"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Mic, Headphones, AudioLines, Video } from "lucide-react";

interface MediaItem {
  title: string;
  platform: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const VideoAndAudio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const mediaItems: MediaItem[] = [
    {
      title: "Web Development Deep Dive",
      platform: "YouTube",
      description: "In-depth tutorial on modern React development techniques and best practices.",
      icon: <Video className="h-8 w-8 text-red-500" />,
      link: "#"
    },
    {
      title: "Tech Insights Podcast",
      platform: "Spotify",
      description: "Discussing emerging trends in web technologies and software engineering.",
      icon: <Mic className="h-8 w-8 text-green-500" />,
      link: "#"
    },
    {
      title: "Design System Masterclass",
      platform: "YouTube",
      description: "Comprehensive guide to building scalable design systems with React and Tailwind.",
      icon: <AudioLines className="h-8 w-8 text-blue-500" />,
      link: "#"
    },
    {
      title: "Developer Journey",
      platform: "Podcast",
      description: "Personal insights and career growth stories in the tech industry.",
      icon: <Headphones className="h-8 w-8 text-purple-500" />,
      link: "#"
    }
  ];

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="achievements" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-on-scroll">Video & Audio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaItems.map((item, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll border-2 hover:border-brand-purple dark:hover:border-primary transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-purple/10">
                  {item.icon}
                </div>
                <div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  <p className="text-brand-purple dark:text-primary font-medium">
                    {item.platform}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground dark:text-muted-foreground mb-4">{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-purple dark:text-primary hover:underline"
                  >
                    <Play className="mr-2 h-4 w-4" /> Watch / Listen
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoAndAudio;
