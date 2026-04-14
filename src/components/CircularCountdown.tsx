import React, { useEffect, useState } from "react";

interface CircularCountdownProps {
  eventName: string;
  targetDate: Date;
  hasTargetTime?: boolean;
}

export default function CircularCountdown({ eventName, targetDate, hasTargetTime = false }: CircularCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [showHours, setShowHours] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [dynamicColor, setDynamicColor] = useState<string>('');

  // Function to calculate gradient color based on days left
  const getGradientColor = (days: number): string => {
    // Define color stops at specific day milestones
    const colorStops = [
      { days: 0, hue: 0, saturation: 80, lightness: 50 },      // Red
      { days: 30, hue: 15, saturation: 85, lightness: 50 },    // Red-Orange
      { days: 60, hue: 30, saturation: 90, lightness: 50 },    // Orange
      { days: 90, hue: 45, saturation: 90, lightness: 50 },    // Orange-Yellow
      { days: 120, hue: 60, saturation: 85, lightness: 50 },   // Yellow
      { days: 150, hue: 90, saturation: 70, lightness: 45 },   // Yellow-Green
      { days: 180, hue: 120, saturation: 65, lightness: 45 },  // Green
    ];

    // Clamp days to valid range
    const clampedDays = Math.max(days, 0);

    // If days exceed max, return the last color
    if (clampedDays >= 180) {
      const lastStop = colorStops[colorStops.length - 1];
      return `hsl(${lastStop.hue}, ${lastStop.saturation}%, ${lastStop.lightness}%)`;
    }

    // Find the two color stops to interpolate between
    let lowerStop = colorStops[0];
    let upperStop = colorStops[1];

    for (let i = 0; i < colorStops.length - 1; i++) {
      if (clampedDays >= colorStops[i].days && clampedDays <= colorStops[i + 1].days) {
        lowerStop = colorStops[i];
        upperStop = colorStops[i + 1];
        break;
      }
    }

    // Calculate interpolation factor
    const range = upperStop.days - lowerStop.days;
    const position = clampedDays - lowerStop.days;
    const factor = position / range;

    // Interpolate between colors
    const hue = lowerStop.hue + (upperStop.hue - lowerStop.hue) * factor;
    const saturation = lowerStop.saturation + (upperStop.saturation - lowerStop.saturation) * factor;
    const lightness = lowerStop.lightness + (upperStop.lightness - lowerStop.lightness) * factor;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  useEffect(() => {
    const calculateDaysLeft = () => {
      // Real-time countdown using current date
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const dayMs = 1000 * 60 * 60 * 24;
      const hourMs = 1000 * 60 * 60;
      const days = Math.ceil(difference / dayMs);
      const hours = Math.ceil(difference / hourMs);
      const safeDays = days > 0 ? days : 0;

      // Switch to hour display when under 48 hours remain.
      if (difference > 0 && difference < dayMs * 2) {
        setShowHours(true);
        setTimeLeft(hours > 0 ? hours : 0);
      } else {
        setShowHours(false);
        setTimeLeft(safeDays);
      }

      setDynamicColor(getGradientColor(safeDays));

      // Progress represents how much time is left as a percentage
      // Use 365 days as the maximum reference point
      // 365+ days = 100% full circle, 0 days = 0% empty circle
      const maxDays = 365;
      const progressPercentage = safeDays > 0 ? Math.min(100, (safeDays / maxDays) * 100) : 0;
      setProgress(progressPercentage);
    };

    calculateDaysLeft();
    const now = new Date();
    const msLeft = targetDate.getTime() - now.getTime();
    const isUnderTwoDays = msLeft > 0 && msLeft < 1000 * 60 * 60 * 24 * 2;
    const intervalMs = isUnderTwoDays ? 1000 * 60 : 1000 * 60 * 60;
    const interval = setInterval(calculateDaysLeft, intervalMs);

    return () => clearInterval(interval);
  }, [targetDate]);

  const circumference = 2 * Math.PI * 180; // radius of 180
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative flex items-center justify-center" style={{ width: '280px', height: '280px' }}>
        {/* Background Circle */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" style={{ transform: 'rotate(-90deg)' }}>
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
            stroke={dynamicColor}
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-in-out"
            strokeLinecap="round"
          />
        </svg>

        {/* Days Counter in Center */}
        <div className="font-bold tabular-nums z-10 leading-none" style={{ fontSize: '96px', color: dynamicColor }}>
          {timeLeft}
        </div>
      </div>

      {/* Event Name */}
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
          {eventName}
        </h3>
        <p className="text-xs uppercase tracking-wide text-muted-foreground/80 mt-1">
          {showHours ? "hours left" : "days left"}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {hasTargetTime
            ? targetDate.toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })
            : targetDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
        </p>
      </div>
    </div>
  );
}
