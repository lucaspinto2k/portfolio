"use client";
import { useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Clock, ThumbsUp } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  views?: string;
  duration?: string;
  likes?: string;
}

const Multimedia = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const videos: Video[] = [
    {
      id: "PL4M7mUNl1Q",
      title: "The ABCs of Environmental Law: ARARs",
      description: "Script Writing - Subtitles - Visual Improvements - Editing",
      date: "2024-03-01",
      category: "Legal & Environmental",
      tags: ["Environmental Law", "ARARs", "Localization"],
      views: "1.1K",
      duration: "3:10",
      likes: "142"
    },
    {
      id: "oYAbPDlb80w",
      title: "Halloween at Novak Law: Questions & Answers!",
      description: "Script Writing - Subtitles - Visual Improvements - Editing",
      date: "2024-02-28",
      category: "Legal",
      tags: ["Novak Law", "Q&A", "Localization"],
      views: "2.4K",
      duration: "4:50",
      likes: "215"
    },
    {
      id: "h_AiIKKGsnU",
      title: "Why Doesn't 'No Further Action' Mean No Further Action?",
      description: "Script Writing - Subtitles - Visual Improvements - Editing",
      date: "2024-02-25",
      category: "Legal & Environmental",
      tags: ["Vapor Intrusion", "Legal", "Localization"],
      views: "1.9K",
      duration: "5:30",
      likes: "187"
    },
    {
      id: "gp0EWYsRTys",
      title: "3D VR tool allows drawing cars with gestures",
      description: "Editing - Translation - Subtitles - Localization",
      date: "2024-02-20",
      category: "Technology",
      tags: ["VR", "Automotive", "Design", "Localization"],
      views: "1.2K",
      duration: "3:45",
      likes: "156"
    },
    {
      id: "OmEmsua0Cio",
      title: "10 simple tricks to change tires",
      description: "Editing - Translation - Subtitles - Localization",
      date: "2024-02-15",
      category: "Automotive",
      tags: ["Tips", "Maintenance", "Localization"],
      views: "2.5K",
      duration: "5:20",
      likes: "234"
    },
    {
      id: "jPBMqOzg3aQ",
      title: "New Ford Trail Control",
      description: "Executive production - Content Production",
      date: "2024-02-10",
      category: "Automotive",
      tags: ["Ford", "Technology", "Production"],
      views: "3.1K",
      duration: "4:15",
      likes: "289"
    },
    {
      id: "XQISFARerDE",
      title: "Ford Sports Car Collection",
      description: "Editing - Translation - Subtitles - Localization",
      date: "2024-02-05",
      category: "Automotive",
      tags: ["Ford", "Sports Cars", "Localization"],
      views: "4.2K",
      duration: "6:30",
      likes: "345"
    },
    {
      id: "Up-FvldlLJM",
      title: "Episode 31 - How to carefully Innovate",
      description: "Executive production - Content Production",
      date: "2024-01-31",
      category: "Business",
      tags: ["Innovation", "Robert Half", "Production"],
      views: "1.8K",
      duration: "8:45",
      likes: "167"
    },
    {
      id: "siBNW3sQT5s",
      title: "Episode 24 - The importance of speaking other languages at work",
      description: "Executive production - Content Production",
      date: "2024-01-25",
      category: "Business",
      tags: ["Languages", "Robert Half", "Production"],
      views: "2.3K",
      duration: "7:15",
      likes: "198"
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
    <section id="multimedia" className="py-4 bg-muted dark:bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-on-scroll mb-12">Multimedia</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="animate-on-scroll overflow-hidden border-2 hover:border-brand-purple dark:hover:border-primary transition-all duration-300 group">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">{video.date}</span>
                  <span className="text-sm text-brand-purple dark:text-primary">{video.category}</span>
                </div>
                <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-brand-purple dark:group-hover:text-primary transition-colors">
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">{video.description}</CardDescription>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground dark:text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={16} />
                    <span>{video.likes}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {video.tags.map(tag => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Multimedia;
