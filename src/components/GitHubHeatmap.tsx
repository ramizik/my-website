import React, { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { Skeleton } from "./ui/skeleton";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubHeatmapProps {
  username: string;
}

export default function GitHubHeatmap({ username }: GitHubHeatmapProps) {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get GitHub token from environment variables
        const token = import.meta.env.VITE_GITHUB_TOKEN;

        if (!token) {
          throw new Error("GitHub token is not configured");
        }

        // Using GitHub's GraphQL API
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: `
              query($userName: String!) {
                user(login: $userName) {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          date
                          contributionCount
                          color
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: { userName: username },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub contributions");
        }

        const result = await response.json();
        
        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        const weeks = result.data.user.contributionsCollection.contributionCalendar.weeks;
        const transformedData = weeks.flatMap((week: any) =>
          week.contributionDays.map((day: any) => ({
            date: day.date,
            count: day.contributionCount,
            level: Math.min(4, Math.ceil((day.contributionCount / 10) * 4)),
          }))
        );

        setData(transformedData);
        setError(null); // Clear error on success
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err);
        setError(err instanceof Error ? err.message : "Failed to load contributions");
        
        // Generate mock data for demo purposes if API fails
        const mockData = generateMockData();
        setData(mockData);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  // Generate mock data for demo/fallback
  const generateMockData = (): ContributionDay[] => {
    const data: ContributionDay[] = [];
    const today = new Date();
    
    for (let i = 365; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Random contribution count (weighted towards 0)
      const random = Math.random();
      let count = 0;
      if (random > 0.7) count = Math.floor(Math.random() * 15);
      
      data.push({
        date: date.toISOString().split("T")[0],
        count,
        level: Math.min(4, Math.ceil((count / 10) * 4)),
      });
    }
    
    return data;
  };

  if (loading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto [&_.react-activity-calendar]:[--color-calendar-graph-day-bg:#f0f0f0] [&_.react-activity-calendar]:[--color-calendar-graph-day-L1-bg:#c6e48b] [&_.react-activity-calendar]:[--color-calendar-graph-day-L2-bg:#7bc96f] [&_.react-activity-calendar]:[--color-calendar-graph-day-L3-bg:#239a3b] [&_.react-activity-calendar]:[--color-calendar-graph-day-L4-bg:#196127] dark:[&_.react-activity-calendar]:[--color-calendar-graph-day-bg:#1a202c] dark:[&_.react-activity-calendar]:[&_rect[fill='#ebedf0']]:[fill:#1a202c]">
        <style jsx>{`
          .react-activity-calendar rect[fill="#ebedf0"] {
            fill: #1a202c !important;
          }
          .dark .react-activity-calendar rect[fill="#ebedf0"] {
            fill: #1a202c !important;
          }
        `}</style>
        <ActivityCalendar
          data={data}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          colorScheme="light"
          theme={{
            light: ["#f0f0f0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
            dark: ["#1a202c", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
          showWeekdayLabels={false}
        />
      </div>
      {error && (
        <p className="text-xs text-yellow-600 dark:text-yellow-500 italic">
          ⚠️ {error} - Showing demo data
        </p>
      )}
    </div>
  );
}

