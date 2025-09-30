import React, { useState, useEffect } from "react";
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

  const projects = [
    {
      id: 1,
      title: "Vocal AI",
      description: "An AI-powered singing coach that provides real-time feedback and personalized training for vocalists.",
      fullDescription: "Vocal AI is an innovative singing coach application that leverages artificial intelligence to analyze vocal performance and provide personalized feedback. Built during a hackathon, this project combines advanced audio processing with AI-driven insights to help singers improve their technique and vocal range.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Bob25lfGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Bob25lfGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFwcHxlbnwwfHx8fDE2Nzg5OTAxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5naW5nfGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      categories: ["Hackathon", "API"],
      demoUrl: "https://demo-vocalai.com",
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
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90fGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90fGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2h8ZW58MHx8fHwxNjc4OTkwMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      categories: ["RAG", "Multi-Agent"],
      demoUrl: "https://demo-iqore.com",
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
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      images: [
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFzc2lzdGFudHxlbnwwfHx8fDE2Nzg5OTAxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      categories: ["Mobile App", "API"],
      demoUrl: "https://demo-mybuddy.com",
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
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBhcHB8ZW58MHx8fHwxNjc4OTkwMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      categories: ["Hackathon", "Mobile App", "Multi-Modal"],
      demoUrl: "https://demo-wonderkid.com",
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
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWx8ZW58MHx8fHwxNjc4OTkwMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWx8ZW58MHx8fHwxNjc4OTkwMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwbGFubmluZ3xlbnwwfHx8fDE2Nzg5OTAxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbnxlbnwwfHx8fDE2Nzg5OTAxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      categories: ["Multi-Agent", "Multi-Modal", "RAG"],
      demoUrl: "https://demo-travelerai.com",
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
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFyaW5nJTIwYWlkfGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFyaW5nJTIwYWlkfGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5fGVufDB8fHx8MTY3ODk5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNjc4OTkwMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      categories: ["Multi-Modal", "Hackathon"],
      demoUrl: "https://demo-echolens.com",
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
              <div className="relative w-full max-w-2xl mx-auto flex-shrink-0">
                <div className="relative w-full h-60 md:h-80 rounded-lg overflow-hidden bg-muted border flex-shrink-0" style={{ minHeight: '15rem', maxHeight: '20rem' }}>
                  <ImageWithFallback
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover bg-gray-50 dark:bg-gray-800"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                  <div className="flex space-x-2 mt-3 overflow-x-auto pb-2 px-1">
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
                )}
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
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