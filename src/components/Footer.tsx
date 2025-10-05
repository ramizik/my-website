import React from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ramizik",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hasanliramis/",
      label: "LinkedIn"
    }
  ];

  const quickLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#tech-stack" },
    { label: "Experience", href: "#timeline" },
    { label: "Blog", href: "#blog" },
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
            <h3 className="text-xl font-bold">Ramis Hasanli</h3>
            <p className="text-muted-foreground">
              Passionate lifelong learner dedicated to implementing Large Language Model solutions that help address real-world challenges and make a positive impact.
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
              <li>Large Language Models</li>
              <li>Full-Stack Development</li>
              <li>Automation Solutions</li>
              <li>Business Solutions</li>
              <li>Mentorship & Coaching</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>rhasanli@pacific.edu</p>
              <p>+1 350 217-9174</p>
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
      </div>
    </footer>
  );
}