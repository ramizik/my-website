import React, { useEffect, useState } from "react";
import { Toaster } from "./components/ui/sonner";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import TimelineSection from "./components/TimelineSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Button } from "./components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemTheme)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Navigation */}
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <TechStackSection />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}