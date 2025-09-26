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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Alex Chen
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
                href="https://github.com/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/alexchen"
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

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653732212701-b729f0b08330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODkyMzE2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Alex Chen - Software Developer"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}