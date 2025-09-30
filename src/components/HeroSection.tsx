import React from "react";
import { Button } from "./ui/button";
import { Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Ramis Hasanli
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Full-Stack Software Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Crafting exceptional digital experiences with modern technologies. 
                Passionate about clean code, innovative solutions, and user-centered design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" className="group">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button onClick={scrollToProjects} variant="outline" size="lg" className="group">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/ramizik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hasanliramis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span className="text-sm">Resume</span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative z-10">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                <ImageWithFallback
                  src="/images/profile.jpg"
                  alt="Ramis Hasanli - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}