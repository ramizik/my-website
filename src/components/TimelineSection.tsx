import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from "lucide-react";
import SimpleModal from "./SimpleModal";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

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
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.2; // Reduced sensitivity for smoother control
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
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 1.2;
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
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career milestones, achievements, and continuous learning path
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Timeline Container */}
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative flex items-end space-x-[600px] pb-8 min-w-max px-20 pt-32">
              {/* First year positioned before the first entry */}
              <div className="absolute left-[40px] top-12 text-center z-30">
                <div className="bg-background px-5 py-3 rounded-full border shadow-md">
                  <span className="text-xl font-bold text-primary">2020</span>
                </div>
              </div>

              {/* Horizontal timeline line - Much more visible */}
              <div className="absolute bottom-[2.75rem] left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
              <div className="absolute bottom-[2.6rem] left-0 right-0 h-4 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-indigo-400/40 rounded-full blur-sm"></div>

              {timelineItems.map((item, index) => (
                <div key={item.id} className="relative flex flex-col items-center min-w-[280px] max-w-[280px] flex-shrink-0">
                  {/* Year positioned in the CENTER of the 600px gap after each entry */}
                  {index < timelineItems.length - 1 && (
                    <div className="absolute left-[580px] top-[-200px] text-center z-30">
                      <div className="bg-background px-5 py-3 rounded-full border shadow-md">
                        <span className="text-xl font-bold text-primary">{2021 + index}</span>
                      </div>
                    </div>
                  )}

                  {/* Clickable Logo */}
                  <div
                    className={`w-16 h-16 rounded-full ${getTypeColor(item.type)} flex items-center justify-center mb-4 cursor-pointer hover:scale-110 hover:animate-pulse transition-all duration-300 shadow-lg hover:shadow-xl group`}
                    onClick={() => openModal(item)}
                  >
                    <item.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Compact Timeline card - Clickable */}
                  <Card
                    className="w-full border border-border/20 bg-card/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 mb-12 cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-sm mb-3">
                          {getTypeLabel(item.type)}
                        </Badge>

                        <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
                        <p className="text-primary font-medium text-base">{item.company}</p>

                        <div className="flex items-center justify-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          {item.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Timeline dot */}
                  <div className="w-3 h-3 rounded-full bg-black border-2 border-background shadow-lg z-20 absolute bottom-[2.75rem]"></div>
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