"use client";
import { Globe, Languages, ArrowRight, Building2 } from "lucide-react";

const Localization = () => {
  return (
    <section id="localization" className="py-20 bg-muted dark:bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">
          Localization & Translation
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card dark:bg-muted p-6 rounded-lg shadow-md animate-on-scroll">
            <Globe className="w-12 h-12 text-brand-purple dark:text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Experience in adapting content for diverse international audiences while maintaining cultural sensitivity and relevance across multiple markets and regions.
            </p>
          </div>

          <div className="bg-card dark:bg-muted p-6 rounded-lg shadow-md animate-on-scroll">
            <Languages className="w-12 h-12 text-brand-purple dark:text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Multiple Languages</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Proficient in translating and adapting content between Portuguese, English, and Spanish, ensuring accurate message conveyance and cultural appropriateness.
            </p>
          </div>

          <div className="bg-card dark:bg-muted p-6 rounded-lg shadow-md animate-on-scroll">
            <ArrowRight className="w-12 h-12 text-brand-purple dark:text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Content Adaptation</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Skilled in adapting marketing materials, technical documentation, and multimedia content for different cultural contexts and target audiences.
            </p>
          </div>

          <div className="bg-card dark:bg-muted p-6 rounded-lg shadow-md animate-on-scroll">
            <Building2 className="w-12 h-12 text-brand-purple dark:text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Major Companies</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Responsible for content adaptation and production for international companies including Ford, Robert Half, Despegar, MercadoLibre, Delta Air Lines, Skype, and Ericsson.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-card dark:bg-muted p-8 rounded-lg shadow-md animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 text-center">Gaming Industry Experience</h3>
          <p className="text-muted-foreground dark:text-muted-foreground text-center mb-8">
            Extensive experience in video game localization and content adaptation for major industry players:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Sony</h4>
              <p className="text-muted-foreground dark:text-muted-foreground">Game content and marketing materials localization</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Microsoft</h4>
              <p className="text-muted-foreground dark:text-muted-foreground">Xbox platform content adaptation</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Ubisoft & Warner Brothers</h4>
              <p className="text-muted-foreground dark:text-muted-foreground">Game series and multimedia content localization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localization;
