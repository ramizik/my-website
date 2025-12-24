import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const STORAGE_KEYS = {
  WAKE_TIME: "stopwatch_wakeTime",
  IS_RUNNING: "stopwatch_isRunning",
} as const;

export default function AwakeTimeCard() {
  const [wakeTime, setWakeTime] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedWakeTime = localStorage.getItem(STORAGE_KEYS.WAKE_TIME);
      const savedIsRunning = localStorage.getItem(STORAGE_KEYS.IS_RUNNING);

      if (savedWakeTime && savedIsRunning === "true") {
        const parsedWakeTime = new Date(savedWakeTime);
        const now = new Date();
        const hoursSinceWake = (now.getTime() - parsedWakeTime.getTime()) / (1000 * 60 * 60);

        // Auto-reset if wake time is more than 24 hours ago (likely stale data)
        if (hoursSinceWake > 24) {
          localStorage.removeItem(STORAGE_KEYS.WAKE_TIME);
          localStorage.removeItem(STORAGE_KEYS.IS_RUNNING);
          return;
        }

        // Validate the date
        if (!isNaN(parsedWakeTime.getTime())) {
          setWakeTime(parsedWakeTime);
          setIsRunning(true);
        }
      }
    } catch (error) {
      console.error("Error loading stopwatch state from localStorage:", error);
      // Clear potentially corrupted data
      localStorage.removeItem(STORAGE_KEYS.WAKE_TIME);
      localStorage.removeItem(STORAGE_KEYS.IS_RUNNING);
    }
  }, []);

  // Save state to localStorage whenever wakeTime or isRunning changes
  useEffect(() => {
    try {
      if (wakeTime && isRunning) {
        localStorage.setItem(STORAGE_KEYS.WAKE_TIME, wakeTime.toISOString());
        localStorage.setItem(STORAGE_KEYS.IS_RUNNING, "true");
      } else {
        localStorage.removeItem(STORAGE_KEYS.WAKE_TIME);
        localStorage.removeItem(STORAGE_KEYS.IS_RUNNING);
      }
    } catch (error) {
      console.error("Error saving stopwatch state to localStorage:", error);
    }
  }, [wakeTime, isRunning]);

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleWakeUp = () => {
    const now = new Date();
    setWakeTime(now);
    setIsRunning(true);
  };

  const handleSleep = () => {
    setWakeTime(null);
    setIsRunning(false);
  };

  // Calculate elapsed time in milliseconds
  const elapsedMs = wakeTime
    ? currentTime.getTime() - wakeTime.getTime()
    : 0;

  // Convert to hours, minutes, seconds
  const totalSeconds = Math.floor(elapsedMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Format time display (HH:MM:SS)
  const formatElapsedTime = (): string => {
    if (!isRunning) return "00:00:00";
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Calculate hours elapsed (with decimals for smooth color transition)
  const hoursElapsed = elapsedMs / (1000 * 60 * 60);

  // Color gradient based on hours: green (1-4h) → yellow/orange (4-8h) → orange (8-12h) → red (12-16h)
  const getColorForHours = (hours: number): string => {
    if (hours < 1) {
      // Green for first hour
      return "hsl(120, 70%, 50%)";
    } else if (hours < 4) {
      // Green to yellow-green (1-4 hours)
      const factor = (hours - 1) / 3; // 0 to 1
      const hue = 120 - factor * 30; // 120 (green) to 90 (yellow-green)
      return `hsl(${hue}, 70%, 50%)`;
    } else if (hours < 8) {
      // Yellow-green to orange (4-8 hours)
      const factor = (hours - 4) / 4; // 0 to 1
      const hue = 90 - factor * 45; // 90 (yellow-green) to 45 (orange)
      return `hsl(${hue}, 70%, 50%)`;
    } else if (hours < 12) {
      // Orange to red-orange (8-12 hours)
      const factor = (hours - 8) / 4; // 0 to 1
      const hue = 45 - factor * 15; // 45 (orange) to 30 (red-orange)
      return `hsl(${hue}, 70%, 50%)`;
    } else if (hours < 16) {
      // Red-orange to red (12-16 hours)
      const factor = (hours - 12) / 4; // 0 to 1
      const hue = 30 - factor * 30; // 30 (red-orange) to 0 (red)
      return `hsl(${hue}, 70%, 50%)`;
    } else {
      // Red for 16+ hours
      return "hsl(0, 70%, 50%)";
    }
  };

  const stopwatchColor = isRunning ? getColorForHours(hoursElapsed) : "hsl(0, 0%, 50%)";

  // Progress represents hours elapsed (0-16 hours = 0-100%)
  const maxHours = 16;
  const progress = isRunning ? Math.min(100, (hoursElapsed / maxHours) * 100) : 0;
  const circumference = 2 * Math.PI * 180;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div
        className="relative flex items-center justify-center"
        style={{ width: "280px", height: "280px" }}
      >
        {/* Background Circle */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 400"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            className="text-muted opacity-20"
          />
          {/* Progress Circle */}
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke={stopwatchColor}
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-in-out"
            strokeLinecap="round"
          />
        </svg>

        {/* Elapsed Time Display in Center */}
        <div
          className="font-bold tabular-nums z-10 leading-none tracking-tight text-center"
          style={{ fontSize: "48px", color: stopwatchColor }}
        >
          {formatElapsedTime()}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 w-full justify-center">
        <Button
          onClick={handleWakeUp}
          variant={isRunning ? "outline" : "default"}
          className="flex-1 max-w-[140px]"
          disabled={isRunning}
        >
          Wake up
        </Button>
        <Button
          onClick={handleSleep}
          variant={isRunning ? "default" : "outline"}
          className="flex-1 max-w-[140px]"
          disabled={!isRunning}
        >
          Go to sleep
        </Button>
      </div>

      {/* Label */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mt-1">
          {isRunning
            ? `Since ${wakeTime?.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}`
            : ""}
        </p>
      </div>
    </div>
  );
}

