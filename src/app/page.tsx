"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

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
