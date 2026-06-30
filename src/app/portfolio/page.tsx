"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Multimedia from "@/components/Multimedia";
import Localization from "@/components/Localization";
import Blogs from "@/components/Blogs";
import Podcasts from "@/components/Podcasts";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
