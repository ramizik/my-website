import React from "react";
import CircularCountdown from "./CircularCountdown";
import CurrentTimeCard from "./CurrentTimeCard";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

interface TrackerPageProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Hardcoded tracker data
const trackers = [
  {
    id: 1,
    eventName: "Spring starts",
    targetDate: new Date("2026-01-15"),
  },
  {
    id: 2,
    eventName: "Submit I-765 in Feb",
    targetDate: new Date("2026-02-05"),
  },
  {
    id: 3,
    eventName: "Program ends",
    targetDate: new Date("2026-05-05"),
  },
  {
    id: 4,
    eventName: "OPT start date ?",
    targetDate: new Date("2026-06-15"),
  },
  {
    id: 5,
    eventName: "Last unempoyment date",
    targetDate: new Date("2026-09-12"),
  }
];

export default function TrackerPage({ isDarkMode, toggleTheme }: TrackerPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with theme toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Personal Tracker</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Countdown Trackers
            </h2>
          </div>

          {/* Trackers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {trackers.map((tracker) => (
              <CircularCountdown
                key={tracker.id}
                eventName={tracker.eventName}
                targetDate={tracker.targetDate}
              />
            ))}
            {/* Current Time Card - 6th position */}
            <CurrentTimeCard />
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-16">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
