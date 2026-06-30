import Multimedia from "@/components/Multimedia";
import Localization from "@/components/Localization";
import Blogs from "@/components/Blogs";
import Podcasts from "@/components/Podcasts";

export default function ContentPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 space-y-12">
        <Multimedia />
        <Localization />
        <Blogs />
        <Podcasts />
      </div>
    </main>
  );
}
