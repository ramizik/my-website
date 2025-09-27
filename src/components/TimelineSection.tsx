import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import SimpleModal from "./SimpleModal";

export default function TimelineSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Drag scrolling state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    console.log('scrollTimeline called:', direction);
    if (timelineRef.current) {
      const scrollAmount = 500;
      const currentScroll = timelineRef.current.scrollLeft;
      const maxScroll = timelineRef.current.scrollWidth - timelineRef.current.clientWidth;
      
      console.log('Current scroll:', currentScroll, 'Max scroll:', maxScroll);
      
      const targetScroll = direction === 'left' 
        ? Math.max(0, currentScroll - scrollAmount)
        : Math.min(maxScroll, currentScroll + scrollAmount);
      
      console.log('Target scroll:', targetScroll);
      
      // Force smooth scrolling
      timelineRef.current.style.scrollBehavior = 'smooth';
      
      // Try multiple methods for maximum compatibility
      timelineRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      // Fallback method
      setTimeout(() => {
        if (timelineRef.current && Math.abs(timelineRef.current.scrollLeft - targetScroll) > 10) {
          timelineRef.current.scrollLeft = targetScroll;
        }
      }, 100);
      
      // Update button states after scroll animation completes
      setTimeout(checkScrollButtons, 700);
    } else {
      console.log('timelineRef.current is null');
    }
  };

  // Drag scrolling handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    // Only start dragging on left mouse button and not on navigation buttons
    if (e.button !== 0) return;
    
    const target = e.target as HTMLElement;
    // Only prevent dragging on navigation buttons, allow dragging everywhere else including cards
    if (target.closest('button:not([data-timeline-card])') || 
        target.closest('[role="button"]:not([data-timeline-card])')) {
      return;
    }
    
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(timelineRef.current.scrollLeft);
    timelineRef.current.style.cursor = 'grabbing';
    timelineRef.current.style.userSelect = 'none';
    console.log('Drag started - pageX:', e.pageX, 'scrollLeft:', timelineRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2; // Increased sensitivity
    const newScrollLeft = scrollLeft - walk;
    timelineRef.current.scrollLeft = newScrollLeft;
    console.log('Dragging - pageX:', x, 'walk:', walk, 'newScrollLeft:', newScrollLeft);
  };

  const handleMouseUp = () => {
    if (!timelineRef.current) return;
    setIsDragging(false);
    timelineRef.current.style.cursor = 'grab';
    timelineRef.current.style.userSelect = 'auto';
    checkScrollButtons();
  };

  const handleMouseLeave = () => {
    if (isDragging && timelineRef.current) {
      setIsDragging(false);
      timelineRef.current.style.cursor = 'grab';
      timelineRef.current.style.userSelect = 'auto';
      checkScrollButtons();
    }
  };

  const openModal = (entry: any) => {
    setSelectedEntry(entry);
  };

  const closeModal = () => {
    setSelectedEntry(null);
  };

  // Global mouse events for drag scrolling
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging && timelineRef.current) {
        setIsDragging(false);
        timelineRef.current.style.cursor = 'grab';
        timelineRef.current.style.userSelect = 'auto';
        checkScrollButtons();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !timelineRef.current) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 2;
      const newScrollLeft = scrollLeft - walk;
      timelineRef.current.scrollLeft = newScrollLeft;
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

        {/* Timeline Container with proper button positioning */}
        <div className="relative pt-20">
           {/* Navigation Buttons - Highly visible with solid background */}
          <Button
            variant="outline"
            size="lg"
            className="absolute left-4 -top-4 z-20 bg-background/95 backdrop-blur-sm text-foreground shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 border-2 border-border"
            onClick={() => {
              console.log('Left button clicked, canScrollLeft:', canScrollLeft);
              scrollTimeline('left');
            }}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="absolute right-4 -top-4 z-20 bg-background/95 backdrop-blur-sm text-foreground shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 border-2 border-border"
            onClick={() => {
              console.log('Right button clicked, canScrollRight:', canScrollRight);
              scrollTimeline('right');
            }}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-10 w-10" />
          </Button>

          {/* Scrollable Timeline - with proper margins for buttons */}
          <div
            ref={timelineRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide mx-20 px-4 pt-24 pb-8 cursor-grab select-none"
            onScroll={checkScrollButtons}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            <div className="relative flex items-center gap-8 py-12 justify-start" style={{ width: 'max-content', minWidth: '100%' }}>
              {/* Timeline Line */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg"></div>
              
              {/* Timeline Items */}
              {timelineItems.map((item, index) => (
                <div key={item.id} className="relative flex flex-col items-center flex-shrink-0 z-10" style={{ width: '380px' }}>
                  {/* Timeline Card */}
                  <Card 
                    data-timeline-card
                    className="w-full bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 rounded-full ${getTypeColor(item.type)} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="h-7 w-7 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="mb-3 text-sm border rounded px-2 py-1 inline-block">
                            {getTypeLabel(item.type)}
                          </div>
                          
                          <h3 className="font-semibold text-xl mb-2 line-clamp-2">{item.title}</h3>
                          <p className="text-primary font-medium mb-3 text-lg">{item.company}</p>
                          
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{item.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
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
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-x: auto;
          overflow-y: hidden;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Detailed Entry Modal */}
      <SimpleModal 
        isOpen={!!selectedEntry} 
        onClose={closeModal}
        children={
          selectedEntry ? (
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
                <div className="mb-3 border rounded px-2 py-1 inline-block">
                  {getTypeLabel(selectedEntry.type)}
                </div>
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
                    <div key={achievementIndex} className="text-sm bg-secondary rounded px-2 py-1">
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )
        }
      />
    </section>
  );
}