import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Programming is a Hobby Now (pt. 0)",
      description: "Kickstart your coding journey in 2025 — learn how anyone can become a software developer.",
      image: "/images/blog-1.jpg",
      date: "Sep 27, 2025",
      link: "https://www.linkedin.com/pulse/programming-hobby-now-pt-0-ramis-hasanli-7apzc"
    }
  ];

  const handleBlogClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="blog" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and stories from my journey in tech
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card 
              key={blog.id} 
              className="border-0 shadow-md hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden"
              onClick={() => handleBlogClick(blog.link)}
            >
              <div className="relative">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-6 pt-3 pb-1">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{blog.description}</p>
              </div>
              <div className="px-6 pb-6 pt-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBlogClick(blog.link);
                  }}
                >
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Read on LinkedIn
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
