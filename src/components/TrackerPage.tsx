import React, { useState, useCallback } from "react";
import CircularCountdown from "./CircularCountdown";
import AwakeTimeCard from "./AwakeTimeCard";
import { Button } from "./ui/button";
import { Moon, Sun, Heart } from "lucide-react";

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
    targetDate: "2026-04-20",
    targetTime: "12:00",
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
  const [hearts, setHearts] = useState<number[]>([]);

  const spawnHeart = useCallback(() => {
    const id = Date.now() + Math.random();
    setHearts((prev) => [...prev, id]);
    window.setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h !== id));
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Self-contained heart animation styles */}
      <style>{`
        @keyframes heart-burst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          40% {
            transform: translate(-50%, -50%) scale(0.95);
          }
          60% {
            transform: translate(-50%, -50%) scale(1.05);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -60%) scale(1.4);
          }
        }
        .tracker-heart {
          position: fixed;
          top: 50%;
          left: 50%;
          pointer-events: none;
          color: #ef4444;
          filter: drop-shadow(0 8px 24px rgba(239, 68, 68, 0.5));
          animation: heart-burst 1.5s ease-out forwards;
          z-index: 40;
        }
      `}</style>

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
          <Button
            variant="ghost"
            size="icon"
            onClick={spawnHeart}
            className="rounded-full"
            aria-label="Send a heart"
          >
            <Heart className="h-5 w-5 text-red-500 fill-current" />
          </Button>
        </div>
      </header>

      {/* Animated hearts layer */}
      <div aria-hidden="true" className="pointer-events-none">
        {hearts.map((id) => (
          <Heart
            key={id}
            className="tracker-heart"
            style={{ width: "160px", height: "160px" }}
            fill="currentColor"
            strokeWidth={1}
          />
        ))}
      </div>

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
