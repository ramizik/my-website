import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import SimpleModal from "./SimpleModal";

export default function TimelineSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const timelineItems = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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

  const checkScrollButtons = () => {
    if (timelineRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineRef.current) {
      const scrollAmount = 400;
      timelineRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(timelineRef.current.scrollLeft);
    timelineRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return;
    const x = e.pageX;
    const walk = (x - startX) * 2;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (timelineRef.current) {
      timelineRef.current.style.cursor = 'grab';
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!timelineRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !timelineRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const openModal = (entry: any) => {
    setSelectedEntry(entry);
  };

  const closeModal = () => {
    setSelectedEntry(null);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !timelineRef.current) return;
      const x = e.pageX;
      const walk = (x - startX) * 2;
      timelineRef.current.scrollLeft = scrollLeft - walk;
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mousemove', handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  useEffect(() => {
    checkScrollButtons();
    const timeline = timelineRef.current;
    if (timeline) {
      timeline.addEventListener('scroll', checkScrollButtons);
      return () => timeline.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <section id="timeline" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career milestones, achievements, and continuous learning path
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => scrollTimeline('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => scrollTimeline('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Scrollable Timeline */}
          <div
            ref={timelineRef}
            className="timeline-container overflow-x-auto scrollbar-hide px-12 cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={isDragging ? handleMouseMove : undefined}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="timeline-track relative flex items-center min-w-max pb-8">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full shadow-sm"></div>
              
              {/* Timeline Items */}
              {timelineItems.map((item, index) => (
                <div key={item.id} className="timeline-item relative flex flex-col items-center mx-8 first:ml-0 last:mr-0">
                  {/* Timeline Card */}
                  <Card 
                    className="timeline-card w-80 bg-background/95 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full ${getTypeColor(item.type)} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {getTypeLabel(item.type)}
                          </Badge>
                          
                          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{item.title}</h3>
                          <p className="text-primary font-medium mb-2">{item.company}</p>
                          
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-3 w-3 flex-shrink-0" />
                              <span className="truncate">{item.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3 flex-shrink-0" />
                              <span>{item.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {timelineItems.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-muted"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .timeline-container {
          scroll-behavior: smooth;
        }
        .timeline-item {
          min-width: 320px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Detailed Entry Modal */}
      <SimpleModal isOpen={!!selectedEntry} onClose={closeModal}>
        {selectedEntry && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-full ${getTypeColor(selectedEntry.type)} flex items-center justify-center`}>
                <selectedEntry.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{selectedEntry.title}</h3>
                <p className="text-lg text-primary font-medium">{selectedEntry.company}</p>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <MapPin className="mr-1 h-4 w-4" />
                  {selectedEntry.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Calendar className="mr-1 h-4 w-4" />
                  {selectedEntry.period}
                </div>
              </div>
            </div>

            <div>
              <Badge variant="outline" className="mb-3">
                {getTypeLabel(selectedEntry.type)}
              </Badge>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Description</h4>
              <p className="text-muted-foreground leading-relaxed">
                {selectedEntry.description}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Key Achievements</h4>
              <div className="flex flex-wrap gap-2">
                {selectedEntry.achievements.map((achievement: string, achievementIndex: number) => (
                  <Badge key={achievementIndex} variant="secondary" className="text-sm">
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </SimpleModal>
    </section>
  );
}