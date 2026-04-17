import React from "react";
import CircularCountdown from "./CircularCountdown";
import AwakeTimeCard from "./AwakeTimeCard";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

interface TrackerPageProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface Tracker {
  id: number;
  eventName: string;
  targetDate: string;
  targetTime?: string;
}

const createTargetDate = (date: string, time?: string): Date => {
  if (!time) {
    return new Date(`${date}T00:00:00`);
  }

  return new Date(`${date}T${time}:00`);
};

// Hardcoded tracker data
const trackers: Tracker[] = [
  {
    id: 1,
    eventName: "Bluejay Interview",
    targetDate: "2026-04-18",
    targetTime: "13:00",
  },
  {
    id: 3,
    eventName: "May Starts",
    targetDate: "2026-05-01",
  },
  {
    id: 4,
    eventName: "Graduated",
    targetDate: "2026-05-10",
  },
  {
    id: 5,
    eventName: "June Starts",
    targetDate: "2026-06-01",
  },
  {
    id: 6,
    eventName: "Last unemployment day",
    targetDate: "2026-08-31",
  }
];

export default function TrackerPage({ isDarkMode, toggleTheme }: TrackerPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with theme toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
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
          </div>

          {/* Trackers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {trackers.map((tracker) => (
              <React.Fragment key={tracker.id}>
                <CircularCountdown
                  eventName={tracker.eventName}
                  targetDate={createTargetDate(tracker.targetDate, tracker.targetTime)}
                  hasTargetTime={Boolean(tracker.targetTime)}
                />
              </React.Fragment>
            ))}
            {/* Awake Time Card - 6th position */}
            <AwakeTimeCard />
          </div>
        </div>
      </main>
    </div>
  );
}
