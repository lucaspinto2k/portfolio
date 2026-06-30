import Contact from "@/components/Contact";
import Resume from "@/components/Resume";

export default function ContactPage() {
  return (
    <main className="min-h-[90vh] pt-24 pb-8 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center h-full">
          <div className="flex-1 w-full bg-card rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-center p-6">
            <Contact />
          </div>
          <div className="flex-1 w-full bg-muted dark:bg-muted/50 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-center p-6">
            <Resume />
          </div>
        </div>
      </div>
    </main>
  );
}
