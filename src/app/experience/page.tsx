import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Resume from "@/components/Resume";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-12 pb-12">
      <div className="container mx-auto px-4 space-y-4">
        <div className="flex justify-center max-w-2xl mx-auto">
          <Resume />
        </div>
        <Experience />
      </div>
    </main>
  );
}
