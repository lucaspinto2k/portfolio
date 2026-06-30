"use client";
import { FC } from 'react';

type SkillItemProps = {
  name: string;
  logoUrl?: string;
};

const SkillItem: FC<SkillItemProps> = ({ name, logoUrl }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-xl border border-white/40 dark:border-white/10 bg-white/50 dark:bg-black/20 hover:bg-brand-purple/5 hover:border-brand-purple hover:-translate-y-0.5 hover:shadow-md transition-all backdrop-blur-sm cursor-default group">
    {logoUrl ? (
      <div className="w-8 h-8 flex items-center justify-center bg-white dark:bg-white/10 rounded-md p-1 shadow-sm group-hover:shadow-brand-purple/20 transition-all">
        <img 
          src={logoUrl} 
          alt={`${name} logo`} 
          className="w-full h-full object-contain" 
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;
            imgElement.style.display = 'none';
          }}
        />
      </div>
    ) : (
      <div className="w-8 h-8 flex items-center justify-center bg-muted/50 rounded-md">
        <span className="text-xs text-muted-foreground"></span>
      </div>
    )}
    <span className="text-sm font-medium text-foreground/90">{name}</span>
  </div>
);

export default SkillItem;
