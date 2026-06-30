"use client";
import { Linkedin, Mail, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted dark:bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <a href="#" className="text-2xl font-cursive text-brand-purple dark:text-primary">Lucas Pinto dos Reis</a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">

            <a href="https://www.linkedin.com/in/lpintoreis/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:lucasreis@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://open.spotify.com/show/4UBdMno6DyVlfJPGZR4uuM" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Spotify">
              <Music size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#skills" className="text-muted-foreground dark:text-muted-foreground hover:text-brand-purple dark:hover:text-primary">Skills</a>
            <a href="#experience" className="text-muted-foreground dark:text-muted-foreground hover:text-brand-purple dark:hover:text-primary">Experience</a>
            <a href="#video-and-audio" className="text-muted-foreground dark:text-muted-foreground hover:text-brand-purple dark:hover:text-primary">Video & Audio</a>
            <a href="#blogs" className="text-muted-foreground dark:text-muted-foreground hover:text-brand-purple dark:hover:text-primary">Blogs</a>
            <a href="#podcasts" className="text-muted-foreground dark:text-muted-foreground hover:text-brand-purple dark:hover:text-primary">Podcasts</a>
            <a href="#resume" className="text-muted-foreground dark:text-muted-foreground hover:text-brand-purple dark:hover:text-primary">Resume</a>
            <a href="#contact" className="text-muted-foreground dark:text-muted-foreground hover:text-brand-purple dark:hover:text-primary">Contact</a>
          </div>
          
          <div className="text-center text-muted-foreground dark:text-muted-foreground">
            <p>&copy; {currentYear} Lucas Pinto dos Reis. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with React, Tailwind CSS, and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
