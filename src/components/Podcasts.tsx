"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Podcast, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PodcastShow {
  title: string;
  description: string;
  platform?: string;
  logo?: string;
  externalLink: string;
}

const Podcasts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const podcastShows: PodcastShow[] = [
    {
      title: "Total Distortion",
      description: "Total Distortion is a Portuguese radio show podcast for rock, metal, punk, and all distorted sound genres. Featuring a new playlist every week, this show invites listeners to turn up the volume and explore diverse musical landscapes from Brazil and beyond. A 100% self-edited and self-produced personal project that ran from 2018 until 2020.",
      platform: "Presented in Portuguese",
      logo: "/images/c58d1a69-7b9d-4331-8d9b-071584e05122.png",
      externalLink: "https://www.listennotes.com/podcasts/total-distortion-o-programa-de-rock-e-metal-UZ2X-alYv7T/"
    },
    {
      title: "Global Distortion",
      description: "A radio show podcast featuring the latest and greatest in rock and metal from around the world, plus obscure oldies. Turn it up and crank your speakers! A 100% self-edited and self-produced personal project focused on global audiences and international rock and metal scenes. The podcast ran from 2021 until 2022.",
      platform: "Presented in English",
      logo: "/images/6c06f9d3-f84f-46bb-ad44-172573337e9a.png",
      externalLink: "https://open.spotify.com/show/4UBdMno6DyVlfJPGZR4uuM"
    },
    {
      title: "Robert Half Talks",
      description: "In Robert Half Talks, you are invited to participate in relevant discussions to prepare for the future of work and adapt to a changing world. A podcast by Robert Half, the largest talent solutions specialist, produced across two seasons with 78 episodes (episodes 5 to 83). Worked as producer and script writer from 2021 until 2025.",
      platform: "Presented in Portuguese",
      logo: "/images/fac5d321-c92e-4762-8d8c-5890f018849c.png",
      externalLink: "https://open.spotify.com/show/4UBdMno6DyVlfJPGZR4uuM"
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
    // Trigger once on load to handle initial visibility
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="podcasts" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-on-scroll">Podcasts</h2>
        
        <div className="max-w-3xl mx-auto mb-12 animate-on-scroll">
          <p className="text-lg text-center text-muted-foreground dark:text-muted-foreground">
            My journey in podcasting began with personal projects focused on music and culture, where I honed my skills in audio production and content creation. This experience led me to professionalize my work, and I went on to create and contribute to several shows focused on marketing, communication, and global business trends. These podcasts showcase interviews with industry experts, deep dives into marketing strategies, and discussions about the evolving landscape of digital communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {podcastShows.map((show, index) => (
            <Card key={index} className="animate-on-scroll border-2 hover:border-brand-purple dark:hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col items-center gap-4">
                  {show.logo ? (
                    <img src={show.logo} alt={`${show.title} logo`} className="w-32 h-32 rounded-full" />
                  ) : (
                    <div className="flex items-center gap-2 text-brand-purple dark:text-primary">
                      <Podcast size={24} />
                    </div>
                  )}
                  <CardTitle className="text-xl">{show.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground dark:text-muted-foreground mb-4">
                  {show.description}
                </CardDescription>
                {show.platform && (
                  <p className="text-sm text-brand-purple dark:text-primary mb-4">{show.platform}</p>
                )}
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => window.open(show.externalLink, '_blank')}
                >
                  <ExternalLink size={16} />
                  Listen to Episodes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
