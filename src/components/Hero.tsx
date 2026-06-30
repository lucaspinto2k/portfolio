"use client";
import React from 'react';
import { Linkedin, Mail, Music } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 py-6 md:py-8">
      <div className="w-full max-w-5xl bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 animate-fade-up relative overflow-hidden group">
        {/* Background ambient glows inside the card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px] -z-10 group-hover:bg-brand-purple/30 transition-colors duration-700"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px] -z-10"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 z-10 relative">
          
          {/* Profile Photo */}
          <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 group-hover:scale-[1.02] transition-transform duration-500">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-brand-purple/30 shadow-[0_0_30px_rgba(139,92,246,0.15)] ring-4 ring-white/10 dark:ring-black/20">
              <img
                src="/images/main-photo.png"
                alt="Lucas Pinto dos Reis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-col text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 tracking-tight">
              {t("hero.greeting")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400 glow-text">{t("hero.name")}</span>
            </h1>
            <h2 className="text-xl md:text-xl lg:text-2xl font-semibold mb-3 text-foreground/90 font-display md:whitespace-nowrap tracking-tight">
              {t("hero.rolePrefix")} <span className="text-brand-purple dark:text-primary">{t("hero.roleSuffix")}</span>
            </h2>
            <div className="text-muted-foreground text-sm md:text-base mb-5 max-w-2xl leading-relaxed whitespace-pre-line">
              {t("hero.description")}
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">

              <a href="https://www.linkedin.com/in/lpintoreis/" target="_blank" rel="noopener noreferrer" className="p-3 bg-foreground/5 hover:bg-brand-purple hover:text-white rounded-full transition-all duration-300 backdrop-blur-sm" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:lucasreis@gmail.com" className="p-3 bg-foreground/5 hover:bg-brand-purple hover:text-white rounded-full transition-all duration-300 backdrop-blur-sm" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://open.spotify.com/show/4UBdMno6DyVlfJPGZR4uuM" target="_blank" rel="noopener noreferrer" className="p-3 bg-foreground/5 hover:bg-brand-purple hover:text-white rounded-full transition-all duration-300 backdrop-blur-sm" aria-label="Spotify">
                <Music size={20} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
