import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-[90vh] pt-12 pb-8 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-center p-6">
          <Contact />
        </div>
      </div>
    </main>
  );
}
