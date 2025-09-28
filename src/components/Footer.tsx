import React from "react";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/alexchen",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/alexchen",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/alexchen",
      label: "Twitter"
    }
  ];

  const quickLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#tech-stack" },
    { label: "Experience", href: "#timeline" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Alex Chen</h3>
            <p className="text-muted-foreground">
              Full-Stack Software Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>API Development</li>
              <li>Cloud Solutions</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>alex@alexchen.dev</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="sm"
              className="mt-4"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Alex Chen. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}