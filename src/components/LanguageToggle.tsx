"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary dark:bg-secondary/20 transition-colors duration-200 text-sm font-semibold"
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {language === "en" ? "EN" : "PT"}
    </button>
  );
};

export default LanguageToggle;
