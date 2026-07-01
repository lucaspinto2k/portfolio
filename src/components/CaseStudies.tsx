"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Music, FolderTree, Image as ImageIcon, Radio, Tv, Settings2, Video, Bot } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const YouTubePlayer = ({ id, title, className }: { id: string, title: string, className?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const playVideo = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*');
    setIsPlaying(false);
  };

  return (
    <div className={className}>
      <div 
        className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-sm group cursor-pointer"
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
      >
        <iframe
          ref={iframeRef}
          className="w-full h-full border-0 pointer-events-none"
          src={`https://www.youtube.com/embed/${id}?autoplay=0&mute=0&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&enablejsapi=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 pointer-events-none ${isPlaying ? 'bg-black/0 opacity-0' : 'bg-black/60 opacity-100'}`}>
          {!isPlaying && (
            <div className="flex flex-col items-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-brand-purple text-white flex items-center justify-center shadow-lg shadow-brand-purple/50 mb-3 transition-transform group-hover:scale-110">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span className="text-white font-bold tracking-wider text-sm drop-shadow-md">PLAY VIDEO</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { dict } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.9) {
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

  const projectIcons = [
    <Music className="w-8 h-8 mb-4 text-brand-purple" />,
    <Radio className="w-8 h-8 mb-4 text-brand-purple" />,
    <Settings2 className="w-8 h-8 mb-4 text-brand-purple" />,
    <Monitor className="w-8 h-8 mb-4 text-brand-purple" />,
    <FolderTree className="w-8 h-8 mb-4 text-brand-purple" />,
    <ImageIcon className="w-8 h-8 mb-4 text-brand-purple" />,
    <Tv className="w-8 h-8 mb-4 text-brand-purple" />,
    <Radio className="w-8 h-8 mb-4 text-brand-purple" />,
    <Bot className="w-8 h-8 mb-4 text-brand-purple" />
  ];

  const hiddenProjects = [
    "Glass Tongue",
    "Photo Tint Modifier",
    "Lux Photo Album Creator",
    "Wonder Doggs (OpenBOR Game)",
    "Lux Iconic VST"
  ];

  const allProjects = dict.caseStudies.projects
    .filter((proj: any) => !hiddenProjects.includes(proj.title))
    .map((proj: any, idx: number) => ({
      ...proj,
      icon: projectIcons[idx % projectIcons.length],
    }));

  const categoryOrder = [
    "Creative Technology",
    "Tecnologia Criativa",
    "AI & Automation",
    "IA e Automação",
    "Desktop & Utilities",
    "Utilitários Desktop",
    "Audio & VST Plugins",
    "Plugins de Áudio e VST"
  ];

  const categories = Array.from(new Set(allProjects.map((p) => p.category))).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a as string);
    const indexB = categoryOrder.indexOf(b as string);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0] as string);
    }
  }, [categories, activeCategory]);

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="case-studies" className="py-4 bg-transparent" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center animate-on-scroll mb-12">
          <h2 className="section-title text-center">
            {dict.caseStudies.title}
          </h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            {dict.caseStudies.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 animate-on-scroll">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4 lg:min-w-[250px] shrink-0">
            <div className="sticky top-24 bg-white dark:bg-zinc-900/80 rounded-3xl p-4 lg:p-6 border border-gray-100 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto max-h-[85vh] scrollbar-hide">
              <h3 className="text-base font-display font-bold text-foreground mb-4 hidden lg:block px-4">
                Categories
              </h3>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat as string)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap lg:whitespace-normal font-bold text-sm ${
                    activeCategory === cat 
                      ? 'bg-brand-purple text-white shadow-sm shadow-brand-purple/20' 
                      : 'bg-transparent text-foreground/60 hover:text-foreground hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:w-3/4 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-zinc-900/80 p-6 lg:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 dark:border-white/10 flex flex-col h-full relative overflow-hidden group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)] hover:border-brand-purple/30"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 bg-[#f3edf9] dark:bg-brand-purple/20 rounded-2xl flex items-center justify-center p-3">
                      {project.logoUrl ? (
                        <img src={project.logoUrl} alt={`${project.title} icon`} className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-6 h-6 flex items-center justify-center">
                          {React.cloneElement(project.icon as React.ReactElement<any>, { className: "w-full h-full text-brand-purple mb-0" })}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground font-display">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-4 text-sm flex-grow">
                    <div>
                      <strong className="block text-foreground font-bold text-[13px] mb-1.5">{dict.caseStudies.conceptLabel}</strong>
                      <p className="text-foreground/70 text-[13px] leading-relaxed">{project.concept}</p>
                    </div>
                    <div>
                      <strong className="block text-foreground font-bold text-[13px] mb-1.5">{(dict.caseStudies as any).logicWorkflowLabel || 'The Logic & Workflow:'}</strong>
                      <p className="text-foreground/70 text-[13px] leading-relaxed">{project.logicWorkflow}</p>
                    </div>
                    {project.logicTriumphs && (
                      <div>
                        <strong className="block text-foreground font-bold text-[13px] mb-1.5">{(dict.caseStudies as any).logicTriumphsLabel || 'The Logic Triumphs:'}</strong>
                        <p className="text-foreground/70 text-[13px] leading-relaxed">{project.logicTriumphs}</p>
                      </div>
                    )}
                    <div>
                      <strong className="block text-foreground font-bold text-[13px] mb-1.5">{dict.caseStudies.techLabel}</strong>
                      <p className="font-mono text-xs text-brand-purple dark:text-purple-300 bg-brand-purple/5 dark:bg-brand-purple/20 px-2 py-1 rounded-md inline-block">{project.tech}</p>
                    </div>
                  </div>
                  
                  {project.youtubeId && project.youtubeId.split(',').map((id: string, index: number) => (
                    <YouTubePlayer 
                      key={id.trim()} 
                      id={id.trim()} 
                      title={`${project.title} Demo ${index + 1}`} 
                      className={index === 0 ? "mt-8 pt-6 border-t border-gray-100 dark:border-white/10" : "mt-6"} 
                    />
                  ))}
                  {project.result && !project.youtubeId && (
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                       <div className="w-full bg-gray-50 dark:bg-black/30 rounded-xl p-4 flex flex-col items-center justify-center border border-dashed border-gray-200 dark:border-gray-700">
                         <Video className="w-6 h-6 text-muted-foreground/40 mb-2" />
                         <span className="text-muted-foreground/70 text-xs font-medium px-2 text-center italic">{project.result}</span>
                       </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
