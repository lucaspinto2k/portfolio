"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Music, ExternalLink } from "lucide-react";

interface MediaItem {
  title: string;
  type: "video" | "audio";
  date: string;
  description: string;
  link: string;
}

const VideoAndAudio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const mediaItems: MediaItem[] = [
    {
      title: "Marketing Strategy in the Digital Age",
      type: "video",
      date: "May 15, 2023",
      description: "A comprehensive overview of modern marketing strategies and how digital channels have transformed brand communication.",
      link: "#"
    },
    {
      title: "Content Creation Best Practices",
      type: "video",
      date: "April 8, 2023",
      description: "Learn how to create engaging content that connects with your audience and drives measurable results.",
      link: "#"
    },
    {
      title: "The Future of PR in Tech Companies",
      type: "audio",
      date: "March 22, 2023",
      description: "An in-depth discussion about how public relations is evolving within the technology sector.",
      link: "#"
    },
    {
      title: "Building Your Personal Brand",
      type: "audio",
      date: "February 10, 2023",
      description: "Strategies for professionals looking to establish a strong personal brand in today's competitive market.",
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="video-and-audio" className="py-20 bg-muted dark:bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-on-scroll mb-12">Multimedia</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaItems.map((item, index) => (
            <Card key={index} className="animate-on-scroll border-2 hover:border-brand-purple dark:hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-brand-purple dark:text-primary font-medium flex items-center gap-2">
                    {item.type === "video" ? <Video size={20} /> : <Music size={20} />}
                    {item.type === "video" ? "Video" : "Audio"}
                  </span>
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">{item.date}</span>
                </div>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground dark:text-muted-foreground mb-4">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a 
                  href={item.link} 
                  className="flex items-center gap-2 text-brand-purple dark:text-primary font-medium hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  {item.type === "video" ? "Watch Video" : "Listen to Audio"}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoAndAudio;
