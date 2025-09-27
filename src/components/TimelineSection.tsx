import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from "lucide-react";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const timelineItems = [
    {
      id: 6,
      type: "work",
      title: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA",
      period: "Summer 2018",
      year: "2018",
      description: "Contributed to Google Chrome's performance optimization team. Implemented features that improved browser startup time and memory usage.",
      achievements: ["15% faster startup time", "Chrome team contribution", "Published research paper"],
      icon: Briefcase
    },
    {
      id: 5,
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2015 - 2019",
      year: "2019",
      description: "Graduated Magna Cum Laude with focus on software engineering, algorithms, and database systems. Active member of ACM and programming competition team.",
      achievements: ["Magna Cum Laude", "ACM Programming Team", "Dean's List 6 semesters"],
      icon: GraduationCap
    },
    {
      id: 4,
      type: "work",
      title: "Frontend Developer",
      company: "Digital Innovations",
      location: "San Jose, CA",
      period: "2019 - 2020",
      year: "2020",
      description: "Specialized in creating modern, responsive web applications using React and Vue.js. Focused on performance optimization and user experience improvements.",
      achievements: ["50+ component library", "20% load time reduction", "Accessibility compliance"],
      icon: Briefcase
    },
    {
      id: 2,
      type: "work",
      title: "Full-Stack Developer",
      company: "StartupHub Inc.",
      location: "Palo Alto, CA",
      period: "2020 - 2022",
      year: "2021",
      description: "Developed and maintained multiple client applications using React, Node.js, and cloud services. Collaborated with design team to implement responsive, user-friendly interfaces.",
      achievements: ["Built 8+ client applications", "99.9% uptime achievement", "User satisfaction: 4.8/5"],
      icon: Briefcase
    },
    {
      id: 3,
      type: "certification",
      title: "AWS Solutions Architect",
      company: "Amazon Web Services",
      location: "Online",
      period: "2021",
      year: "2021",
      description: "Achieved AWS Solutions Architect Associate certification, demonstrating expertise in designing and deploying scalable systems on AWS.",
      achievements: ["Cloud architecture expertise", "Cost optimization", "Security best practices"],
      icon: Award
    },
    {
      id: 1,
      type: "work",
      title: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      year: "2022",
      description: "Leading development of scalable web applications, mentoring junior developers, and implementing DevOps best practices. Increased application performance by 40% and reduced deployment time by 60%.",
      achievements: ["Led team of 5 developers", "40% performance improvement", "Implemented CI/CD pipeline"],
      icon: Briefcase
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-500";
      case "education":
        return "bg-green-500";
      case "certification":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work":
        return "Work";
      case "education":
        return "Education";
      case "certification":
        return "Certification";
      default:
        return "Other";
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 3; // Increased multiplier for more responsive scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 3;
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseleave', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseleave', handleGlobalMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <section id="timeline" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career milestones, achievements, and continuous learning path
          </p>
        </div>

        <div className="relative">
          {/* Instructions */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              <span className="hidden md:inline">Click and drag</span>
              <span className="md:hidden">Swipe</span> to scroll through the timeline
            </p>
          </div>

          {/* Horizontal Timeline Container */}
          <div 
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide cursor-grab select-none"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative flex items-end space-x-12 pb-8 min-w-max px-8">
              {/* Horizontal timeline line */}
              <div className="absolute bottom-16 left-8 right-8 h-1 bg-primary/30 rounded-full"></div>

              {timelineItems.map((item, index) => (
                <div key={item.id} className="relative flex flex-col items-center min-w-[320px] max-w-[320px] flex-shrink-0">
                  {/* Year label above */}
                  <div className="mb-6 text-center">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                    <div className="text-sm text-muted-foreground mt-1">{item.period}</div>
                  </div>

                  {/* Timeline card */}
                  <Card className="w-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 mb-8">
                    <CardContent className="p-4">
                      <div className="text-center mb-3">
                        <div className={`inline-flex w-12 h-12 rounded-full ${getTypeColor(item.type)} items-center justify-center mb-3`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="outline" className="mb-2">
                          {getTypeLabel(item.type)}
                        </Badge>
                      </div>

                      <div className="space-y-2 text-center">
                        <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
                        <p className="text-primary font-medium">{item.company}</p>
                        
                        <div className="flex items-center justify-center text-xs text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          {item.location}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {item.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                            <Badge key={achievementIndex} variant="secondary" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                          {item.achievements.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{item.achievements.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Timeline dot */}
                  <div className={`w-6 h-6 rounded-full ${getTypeColor(item.type)} border-4 border-background shadow-lg z-10 absolute bottom-[3.75rem]`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-x: scroll;
          overflow-y: hidden;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}