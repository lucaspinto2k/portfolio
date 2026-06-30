import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 space-y-12">
        <Experience />
        <Education />
      </div>
    </main>
  );
}
