import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ListFilter as Filter, Calendar, Users, Target, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import SimpleModal from "./SimpleModal";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  const projects = [
    {
      id: 1,
      title: "Vocal AI",
      description: "An AI-powered singing coach that provides real-time feedback and personalized training for vocalists.",
      fullDescription: "Vocal AI is an innovative singing coach application that leverages artificial intelligence to analyze vocal performance and provide personalized feedback. Built during a hackathon, this project combines advanced audio processing with AI-driven insights to help singers improve their technique and vocal range.",
      image: "/images/vocal-ai-1.jpg",
      images: [
        "/images/vocal-ai-0.jpg",
        "/images/vocal-ai-1.jpg",
        "/images/vocal-ai-2.jpg",
        "/images/vocal-ai-3.jpg",
        "/images/vocal-ai-4.jpg",
        "/images/vocal-ai-5.jpg",
        "/images/vocal-ai-6.jpg",
        "/images/vocal-ai-7.JPEG",
        "/images/vocal-ai-8.JPEG"
      ],
      categories: ["Hackathon", "API"],
      demoUrl: "https://www.youtube.com/watch?v=4XWiMuE9wwM&t=119s",
      devpostUrl: "https://devpost.com/software/vocai-ai-coach",
      githubUrl: "https://github.com/ramizik/vocal-ai",
      keyFeatures: [
        "Real-time vocal analysis",
        "AI-powered feedback system",
        "Pitch detection and correction",
        "Progress tracking dashboard",
        "Custom training exercises",
        "Performance analytics"
      ]
    },
    {
      id: 2,
      title: "Business Chatbot for iQore",
      description: "An intelligent business chatbot using RAG and multi-agent architecture for enhanced customer interactions.",
      fullDescription: "A sophisticated enterprise chatbot solution built for iQore that combines Retrieval-Augmented Generation (RAG) with multi-agent systems. This chatbot intelligently handles customer queries, provides accurate business information, and seamlessly escalates complex issues to appropriate departments.",
      image: "/images/iqore-1.jpg",
      images: [
        "/images/iqore-1.jpg",
        "/images/iqore-2.jpg",
        "/images/iqore-3.jpg"
      ],
      categories: ["RAG", "Multi-Agent"],
      demoUrl: "",
      devpostUrl: "",
      githubUrl: "https://github.com/ramizik/iqore",
      keyFeatures: [
        "RAG-powered knowledge retrieval",
        "Multi-agent coordination system",
        "Context-aware conversations",
        "Document processing pipeline",
        "Intent classification",
        "Automated escalation system"
      ]
    },
    {
      id: 3,
      title: "My Buddy",
      description: "A personal AI assistant mobile app that helps manage daily tasks, schedules, and provides intelligent recommendations.",
      fullDescription: "My Buddy is a comprehensive personal AI assistant that combines mobile app convenience with powerful API capabilities. It helps users manage their daily lives through intelligent task management, calendar integration, and context-aware suggestions tailored to individual preferences and habits.",
      image: "/images/my-buddy-1.jpg",
      images: [
        "/images/my-buddy-1.jpg",
        "/images/my-buddy-2.jpg",
        "/images/my-buddy-3.jpg",
        "/images/my-buddy-4.jpg",
        "/images/my-buddy-5.jpg",
        "/images/my-buddy-6.jpg",
        "/images/my-buddy-7.jpg",
        "/images/my-buddy-8.jpg"
      ],
      categories: ["Mobile App", "API"],
      demoUrl: "",
      devpostUrl: "",
      githubUrl: "https://github.com/ramizik/ai-helper/tree/main",
      keyFeatures: [
        "AI-powered task management",
        "Smart calendar integration",
        "Personalized recommendations",
        "Voice command support",
        "Cross-platform synchronization",
        "Privacy-focused design"
      ]
    },
    {
      id: 4,
      title: "WonderKid",
      description: "An interactive AI-powered teaching app that makes learning fun and engaging for children through multi-modal experiences.",
      fullDescription: "WonderKid transforms reading into an interactive adventure with AI-powered storytelling. Built during a hackathon, it combines Google's Gemini AI, Imagen, and Veo 2.0 to create personalized stories with dynamic illustrations and interactive choices, making learning fun for children aged 5-8.",
      image: "/images/wonder-kid-1.jpg",
      images: [
        "/images/wonder-kid-1.jpg",
        "/images/wonder-kid-2.jpg",
        "/images/wonder-kid-3.jpg",
        "/images/wonder-kid-4.jpg",
        "/images/wonder-kid-5.jpg",
        "/images/wonder-kid-6.jpg",
        "/images/wonder-kid-7.jpg"
      ],
      categories: ["Hackathon", "Mobile App", "Multi-Modal"],
      demoUrl: "",
      devpostUrl: "https://devpost.com/software/wonderkid",
      githubUrl: "https://github.com/ramizik/bigredhacks25",
      keyFeatures: [
        "AI story generation",
        "Dynamic illustrations with Imagen",
        "Interactive story choices",
        "Video compilation with Veo 2.0",
        "Progress tracking",
        "Age-appropriate content"
      ]
    },
    {
      id: 5,
      title: "Traveler AI",
      description: "An intelligent travel assistant that combines multi-modal AI with RAG to provide personalized travel recommendations.",
      fullDescription: "Traveler AI is a comprehensive travel planning assistant that leverages multi-modal AI capabilities and Retrieval-Augmented Generation to create personalized travel experiences. It analyzes user preferences, budget constraints, and destination information to provide tailored recommendations and itineraries.",
      image: "/images/profile.jpg",
      images: [],
      categories: ["Multi-Agent", "Multi-Modal", "RAG"],
      demoUrl: "https://www.youtube.com/watch?v=c_hut9NcQwY",
      devpostUrl: "https://devpost.com/software/travel-ai-agent",
      githubUrl: "https://github.com/ramizik/travelai-gemini-agent",
      keyFeatures: [
        "Multi-modal destination analysis",
        "RAG-powered recommendations",
        "Personalized itinerary generation",
        "Real-time travel information",
        "Budget optimization",
        "Interactive map integration"
      ]
    },
    {
      id: 6,
      title: "EchoLens AI",
      description: "A multi-modal hearing assistant that uses AI to enhance audio experiences and provide real-time transcription.",
      fullDescription: "EchoLens AI is an innovative hearing assistant application built during a hackathon. It combines multi-modal AI capabilities to enhance audio experiences for users with hearing difficulties, providing real-time transcription, audio amplification, and environmental sound detection with visual feedback.",
      image: "/images/echo-lens-1.png",
      images: [
        "/images/echo-lens-1.png",
        "/images/echo-lens-2.png",
        "/images/echo-lens-3.png",
        "/images/echo-lens-4.png",
        "/images/echo-lens-4.JPEG"
      ],
      categories: ["Multi-Modal", "Hackathon"],
      demoUrl: "https://www.youtube.com/watch?v=HJFwOpEGalA",
      devpostUrl: "https://devpost.com/software/echolens-oujfr0",
      githubUrl: "https://github.com/ramizik/echolens.ai",
      keyFeatures: [
        "Real-time audio transcription",
        "Environmental sound detection",
        "Visual audio feedback",
        "Multi-modal interface",
        "Customizable audio profiles",
        "Accessibility-focused design"
      ]
    }
  ];

  const categories = ["All", "RAG", "Multi-Modal", "Multi-Agent", "Hackathon", "API", "Mobile App"];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToPrevFromThumbnails = () => {
    if (!selectedProject?.images || selectedProject.images.length === 0) return;
    const newIndex = currentImageIndex === 0
      ? selectedProject.images.length - 1
      : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    requestAnimationFrame(() => {
      const container = thumbnailContainerRef.current;
      const child = container?.children?.[newIndex] as HTMLElement | undefined;
      child?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  };

  const goToNextFromThumbnails = () => {
    if (!selectedProject?.images || selectedProject.images.length === 0) return;
    const newIndex = currentImageIndex === selectedProject.images.length - 1
      ? 0
      : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    requestAnimationFrame(() => {
      const container = thumbnailContainerRef.current;
      const child = container?.children?.[newIndex] as HTMLElement | undefined;
      child?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  };

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  // Handle keyboard navigation for image carousel
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedProject?.images && selectedProject.images.length > 1) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          prevImage();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          nextImage();
        }
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, currentImageIndex]);

  return (
    <section id="projects" className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            A selection of my recent work showcasing different technologies and problem-solving approaches
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
             className="border-0 shadow-md hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden"
              onClick={() => openModal(project)}
            >
              <div className="relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
             <div className="px-6 pt-3 pb-1">
                <h3 className="text-lg font-bold">{project.title}</h3>
               <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{project.description}</p>
             </div>
             <div className="px-6 pb-6 pt-3">
              <div className="flex space-x-2">
                  {project.demoUrl ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1" 
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1" 
                      disabled
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                  )}

                  {project.devpostUrl ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1" 
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.devpostUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Devpost
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1" 
                      disabled
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Devpost
                    </Button>
                  )}

                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1" 
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
             </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <SimpleModal isOpen={!!selectedProject} onClose={closeModal}>
        {selectedProject && (
          <div className="space-y-6 pb-4">
            {/* Header */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 flex-shrink-0">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  {selectedProject.categories.map((category: string, index: number) => (
                    <Badge key={index} variant="secondary">{category}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button variant="outline" size="sm" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </div>

            {/* Image Carousel */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="relative w-full rounded-lg overflow-hidden bg-muted border" style={{ aspectRatio: '1920/1080' }}>
                  <ImageWithFallback
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain bg-gray-50 dark:bg-gray-800"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 z-20 shadow-lg hover:scale-110"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 z-20 shadow-lg hover:scale-110"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md shadow-lg z-10">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}
                </div>
                
                {/* Thumbnail Navigation */}
                {selectedProject.images.length > 1 && (
                  <div className="mt-3 flex items-center justify-center w-full">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={goToPrevFromThumbnails}
                        className="flex-shrink-0 z-20 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white border-2 border-blue-800 hover:border-blue-900 dark:border-blue-800 dark:hover:border-blue-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full w-8 h-8 flex items-center justify-center"
                        aria-label="Scroll thumbnails left"
                      >
                        <ChevronLeft className="h-3 w-3" />
                      </button>
                      <div
                        ref={thumbnailContainerRef}
                        className="flex justify-center items-center space-x-2 overflow-x-auto"
                      >
                        {selectedProject.images.map((image: string, index: number) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-14 h-10 rounded-md overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                              index === currentImageIndex 
                                ? 'border-primary shadow-md' 
                                : 'border-gray-300 hover:border-primary/50 dark:border-gray-600 dark:hover:border-primary/50'
                            }`}
                            aria-label={`View image ${index + 1}`}
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover transition-opacity hover:opacity-80"
                            />
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={goToNextFromThumbnails}
                        className="flex-shrink-0 z-20 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white border-2 border-blue-800 hover:border-blue-900 dark:border-blue-800 dark:hover:border-blue-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full w-8 h-8 flex items-center justify-center"
                        aria-label="Scroll thumbnails right"
                      >
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                {selectedProject.keyFeatures.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </SimpleModal>
    </section>
  );
}