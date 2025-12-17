import React, { useEffect, useState } from "react";
import { Toaster } from "./components/ui/sonner";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import TimelineSection from "./components/TimelineSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import TrackerPage from "./components/TrackerPage";
import { Button } from "./components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemTheme)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Listen for popstate events (browser back/forward)
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
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

  // Render tracker page if path matches
  if (currentPath === "/tracker") {
    return <TrackerPage isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
  }

  // Render main portfolio page
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
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}