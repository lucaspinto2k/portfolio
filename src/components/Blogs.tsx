"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  url: string;
  readTime: string;
}

const Blogs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const blogPosts: BlogPost[] = [
    {
      title: "Fatherhood: Learning, Maturity, and a New Perspective on Life",
      date: "Aug 8, 2023",
      excerpt: "Explore how fatherhood transforms personal and professional life. This article shares insights on the journey of fatherhood, its impact on personal growth, and the valuable lessons learned along the way.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&auto=format",
      url: "/blog/fatherhood-personal-growth",
      readTime: "8 min read"
    },
    {
      title: "Rock Music and Corporate Lessons: Parallels Between Two Worlds",
      date: "Jul 13, 2023",
      excerpt: "Discover how the world of rock music offers valuable insights for the corporate environment. From legendary bands to business success, learn about the shared principles of perseverance, teamwork, and innovation.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format",
      url: "/blog/rock-music-corporate-lessons",
      readTime: "10 min read"
    },
    {
      title: "Tips for Renegotiating Salaries at the Beginning of the Year",
      date: "Jan 13, 2025",
      excerpt: "For a long time, professionals' job satisfaction has been linked to factors beyond financial matters—such as pride in their organization, being treated with equality and respect, and feeling valued for their contributions. However, that doesn't mean salary and benefits aren't important. After all, we all have material needs that contribute to our sense of fulfillment—day by day, month by month, and throughout our lives. Originally published in Spanish",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format", // Updated to match the blog post image
      url: "/blog/negotiate-salary",
      readTime: "4 min read"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
          elements.forEach((el) => {
            el.classList.add('animated');
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="blogs" className="py-20 bg-muted dark:bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-on-scroll">Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="animate-on-scroll overflow-hidden border-2 hover:border-brand-purple dark:hover:border-primary transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">{post.date}</span>
                  <span className="text-sm text-brand-purple dark:text-primary">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <a href={post.url} className="text-brand-purple dark:text-primary font-medium hover:underline">
                  Read more →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
