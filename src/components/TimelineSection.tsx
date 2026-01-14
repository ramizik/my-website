import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Code, ChevronLeft, ChevronRight, Clock } from "lucide-react";
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
      title: "Cybersecurity Engineer Intern",
      company: "City of Stockton",
      location: "Stockton, CA",
      period: "Jul 2023 - Dec 2023",
      year: "2023",
      description: "Proactively protected City networks and deployments as my main responsibility. In addition to investigating potential threats, I leveraged my network knowledge and software development expertise to build various Python automation and monitoring scripts, resulting in increased productivity and a stronger cybersecurity posture for the organization. Utilized open-source cybersecurity intelligence tools and web scraping skills to deliver daily cybersecurity updates to the team.",
      achievements: [
        "Network+ Certified",
        "Security+ Certified",
        "18% team productivity increase",
        "9% cybersecurity risk decrease",
        "Best Intern in history"
      ],
      icon: Briefcase
    },
    {
      id: 2,
      type: "education",
      title: "BS Computer Science",
      company: "University of the Pacific",
      location: "Stockton, CA",
      period: "Jul 2024",
      year: "2024",
      description: "Bachelor of Science in Computer Science from University of the Pacific, with a strong focus on Artificial Intelligence and Machine Learning. Completed advanced coursework in Natural Language Processing (NLP), Large Language Models (LLMs), classifiers, and business applications of LLMs.",
      achievements: [
        "Dean's Honor Roll",
        "Teacher Assistant & Mentor",
        "AI & Machine Learning Coursework (NLP, LLMs, Classifiers)",
        "Business Applications of LLMs"
      ],
      icon: GraduationCap
    },
    // Personal Projects
    {
      id: 3,
      type: "hackathon",
      title: "EchoLens AI",
      company: "SF Hacks 2025",
      location: "San Francisco State University, CA",
      period: "Apr 2025",
      year: "2025",
      description: "AI accessibility tool translating audio environments into visual info for deaf users. Uses Gemini AI and TensorFlow's YAMNet for real-time audio processing.",
      achievements: ["Real-time audio transcription", "Environmental sound detection", "Accessibility-focused design", "Multi-modal interface"],
      icon: Award
    },
    {
      id: 4,
      type: "hackathon",
      title: "Traveler AI",
      company: "Google + Kaggle 2025 Hackathon Winner",
      location: "Online",
      period: "Apr 2025",
      year: "2025",
      description: "AI travel planner with multimodal chat, itinerary generation & real-time data integration. Built during Google's 5-day Gen AI Intensive Course.",
      achievements: ["Multimodal AI integration", "Real-time data APIs", "RAG-powered recommendations", "Export functionality"],
      icon: Award
    },
    {
      id: 5,
      type: "hackathon",
      title: "Vocal AI",
      company: "UC Berkley 2025 AI Hackathon Winner",
      location: "UC Berkeley, CA",
      period: "Jun 2025",
      year: "2025",
      description: "AI-powered vocal coaching platform with real-time analysis and conversational agents. Won Most Ambitious Vapi Project at UC Berkeley's AI Hackathon 2025.",
      achievements: ["Hackathon Winner", "Real-time vocal analysis", "AI-powered feedback system", "Multi-service integration"],
      icon: Award
    },
    {
      id: 6,
      type: "personal-project",
      title: "Business Chatbot for iQore",
      company: "IEEE Quantum Convention",
      location: "Albuquerque, NM",
      period: "Aug 2025",
      year: "2025",
      description: "Multi-agent convention chatbot that increased client interactions by 20% at IEEE Quantum event. Built with LangGraph and LangChain for enterprise AI solutions.",
      achievements: ["20% more client interactions", "Multi-agent coordination", "RAG-powered knowledge retrieval", "Enterprise deployment"],
      icon: Code
    },
    {
      id: 7,
      type: "personal-project",
      title: "My Buddy",
      company: "Personal AI Telegram Assistant",
      location: "Online",
      period: "Aug 2025 - Present",
      year: "2025",
      description: "Personal AI assistant in continuous development, tailored to improve my daily life by managing calendar, tasks, budget, and habits via Telegram with proactive reminders. Built on AWS serverless architecture and EventBridge orchestration, I constantly enhance it to better suit my needs—my long-term goal is to evolve it into a true 'Jarvis AI' like in the Iron Man movie.",
      achievements: ["AWS serverless architecture", "Telegram Bot integration", "Proactive reminders", "Multi-service coordination"],
      icon: Code
    },
    {
      id: 8,
      type: "hackathon",
      title: "WonderKid",
      company: "Big Red Hacks 2025",
      location: "Cornell University, NY",
      period: "Sep 2025",
      year: "2025",
      description: "AI-powered interactive storytelling app for kids with dynamic stories, illustrations & videos. Combines Gemini, Imagen, and Veo 2.0 for personalized narratives.",
      achievements: ["AI story generation", "Dynamic illustrations", "Video compilation", "Child-focused UX"],
      icon: Award
    },
    {
      id: 9,
      type: "hackathon",
      title: "Tactico AI",
      company: "CalHacks 2025",
      location: "UC Berkeley, CA",
      period: "Oct 2025",
      year: "2025",
      description: "AI tactical analysis platform for college sports teams that turns match footage into actionable insights. Uses YOLO + ByteTrack for player/ball tracking, automatic team assignment, and real-world metrics estimation.",
      achievements: ["YOLO-based detection with ByteTrack multi-object tracking", "CalHacks Top 10 Project", "YC W26 Applicant"],
      icon: Award
    },
    {
      id: 11,
      type: "personal-project",
      title: "Seru AI",
      company: "AI Synth Generator for Serum",
      location: "Online",
      period: "Currently in development",
      year: "2025",
      description: "Building AI Synth generator for Serum.",
      achievements: [],
      icon: Code
    },
    {
      id: 12,
      type: "hackathon",
      title: "Coherence",
      company: "SBHacks 2025 - Winner: Best Use of AI",
      location: "UC Santa Barbara, CA",
      period: "Jan 2025",
      year: "2025",
      description: "First AI presentation coach that detects visual-verbal dissonance—analyzing when body language contradicts spoken words. Built multimodal AI pipeline synchronizing TwelveLabs (video understanding), Deepgram (transcription), and Gemini (synthesis) to identify exact moments where confidence gaps occur. Processes any presentation video in under 60 seconds, generating actionable feedback instead of generic criticism.",
      achievements: [
        "Winner: Best Use of AI Track",
        "Multimodal AI synchronization (3 services)",
        "<60 second processing time",
        "15+ semantic video queries per analysis",
        "PDF report generation for education"
      ],
      icon: Award
    },
    {
      id: 13,
      type: "currently",
      title: "",
      company: "",
      location: "Stockton, CA",
      period: "Today",
      year: "2025",
      description: "Building stuff. Exploring startup opportunities for Tactico AI. Grinding LeetCode. Always learning new technologies.",
      achievements: [],
      icon: Clock
    },
    {
      id: 14,
      type: "education",
      title: "MS Computer Science",
      company: "University of the Pacific",
      location: "Stockton, CA",
      period: "Expected May 2026",
      year: "2026",
      description: "Master of Science in Computer Science from University of the Pacific, focusing on advanced computer science concepts and research.",
      achievements: ["Machine Learning Research", "LLM Integration", "Artificial Intelligence", "Software Engineering"],
      icon: GraduationCap
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-500";
      case "education":
        return "bg-green-500";
      case "hackathon":
        return "bg-purple-500";
      case "personal-project":
        return "bg-orange-500";
      case "currently":
        return "bg-neutral-200 dark:bg-neutral-800";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeIconColor = (type: string) => {
    switch (type) {
      case "currently":
        return "text-neutral-800 dark:text-neutral-200"; // dark gray in light, light gray in dark
      default:
        return "text-white";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work":
        return "Internship";
      case "education":
        return "Education";
      case "hackathon":
        return "Hackathon";
      case "personal-project":
        return "Personal Project";
      case "currently":
        return "Currently";
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
    // Set initial scroll position to show all cards properly
    if (timelineRef.current) {
      const containerWidth = timelineRef.current.clientWidth;
      const contentWidth = timelineRef.current.scrollWidth;
      // Center the content if it's wider than container
      if (contentWidth > containerWidth) {
        const initialScroll = Math.max(0, (contentWidth - containerWidth) / 4);
        timelineRef.current.scrollLeft = initialScroll;
      }
    }
    const timeline = timelineRef.current;
    if (timeline) {
      timeline.addEventListener('scroll', checkScrollButtons);
      return () => timeline.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <section id="timeline" className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career milestones, achievements, and continuous learning path
          </p>
        </div>

        {/* Navigation Buttons - Positioned outside timeline container */}
        <div className="relative flex justify-center items-center gap-8 mb-2">
          <Button
            variant="outline"
            size="lg"
            className="z-20 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white border-2 border-blue-800 hover:border-blue-900 dark:border-blue-800 dark:hover:border-blue-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full w-36 h-12 flex items-center justify-center group min-w-36"
            onClick={() => {
              console.log('Left button clicked, canScrollLeft:', canScrollLeft);
              scrollTimeline('left');
            }}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="z-20 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white border-2 border-blue-800 hover:border-blue-900 dark:border-blue-800 dark:hover:border-blue-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full w-36 h-12 flex items-center justify-center group min-w-36"
            onClick={() => {
              console.log('Right button clicked, canScrollRight:', canScrollRight);
              scrollTimeline('right');
            }}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          </Button>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Scrollable Timeline */}
          <div
            ref={timelineRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide px-2 pt-24 pb-8 cursor-grab select-none"
            onScroll={checkScrollButtons}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            <div className="relative flex items-center gap-6 py-12" style={{ width: 'max-content', paddingLeft: '1rem', paddingRight: '1rem' }}>
              {/* Timeline Line */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg"></div>
              
              {/* Timeline Items */}
              {timelineItems.map((item, index) => (
                <div key={item.id} className="relative flex flex-col items-center flex-shrink-0 z-10" style={{ width: '400px' }}>
                  {/* Timeline Card */}
                  <Card 
                    data-timeline-card
                    className="w-full h-80 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
                    onClick={() => openModal(item)}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Main Content Area */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-semibold text-xl mb-3 leading-tight">{item.title}</h3>
                        <p className="text-primary font-medium mb-4 text-lg">{item.company}</p>
                        
                        <div className="mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {item.description.length > 120 ? `${item.description.substring(0, 120)}...` : item.description}
                        </p>
                      </div>
                      
                      {/* Category Section at Bottom */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full ${getTypeColor(item.type)} flex items-center justify-center flex-shrink-0`}>
                            <item.icon className={`h-5 w-5 ${getTypeIconColor(item.type)}`} />
                          </div>
                          <div className="text-sm font-medium text-muted-foreground">
                            {getTypeLabel(item.type)}
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
                  <selectedEntry.icon className={`h-8 w-8 ${getTypeIconColor(selectedEntry.type)}`} />
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