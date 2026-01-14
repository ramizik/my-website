import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import SimpleModal from "./SimpleModal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  const ITEMS_PER_PAGE = 6;

  const projects = [
    {
      id: 1,
      title: "Coherence",
      description: "AI presentation coach detecting visual-verbal dissonance. UCSB Hackathon Winner",
      fullDescription: "Coherence is the first AI presentation coach that detects visual-verbal dissonance—identifying moments where body language contradicts spoken words. Built for SBHacks 2025 and winner of Best Use of AI track, it synchronizes three AI services in parallel: TwelveLabs for semantic video understanding (15+ body language queries per analysis), Deepgram for real-time transcription with word-level timestamps, and Google Gemini for multimodal synthesis and dissonance reasoning. The system processes any presentation video (Zoom recordings, stage presentations, phone captures) in under 60 seconds, generating a Coherence Score (0-100), timestamped dissonance flags, interactive timeline heatmap, and actionable coaching insights. Built with React + TypeScript + Vite frontend and FastAPI async backend, it addresses a critical gap in the $1.3B presentation training market where 55% of communication (non-verbal) was being ignored by existing tools that only analyze audio. Features include PDF report generation for education use cases and real-time status updates during processing.",
      logo: "/images/logo-coherence.png",
      image: "/images/coherence-1.jpg",
      images: [
        "/images/coherence-1.png",
        "/images/coherence-2.png",
        "/images/coherence-3.png",
        "/images/coherence-4.png",
        "/images/coherence-5.png",
        "/images/coherence-6.png",
        "/images/coherence-7.png"
      ],
      categories: ["Hackathon", "Multi-Modal", "API"],
      demoUrl: "https://youtu.be/0IcYJvMz0W4",
      devpostUrl: "https://devpost.com/software/coherence-jga4uw",
      githubUrl: "https://github.com/ramizik/coherence",
      keyFeatures: [
        "Multimodal AI synchronization (3 services)",
        "Visual-verbal dissonance detection",
        "<60 second processing time",
        "15+ semantic video queries per analysis",
        "Interactive timeline with video sync",
        "PDF report generation for education"
      ]
    },
    {
      id: 2,
      title: "Tactico AI",
      description: "AI tactical analysis for college sports—upload match footage and get player tracking, possession, and team insights.",
      fullDescription: "TacticoAI is an AI-powered tactical analysis platform for college sports teams that turns raw match footage into actionable performance insights. Built with a React + TypeScript frontend and a FastAPI backend, it supports chunked video uploads, background job processing, and persistent storage via Supabase (PostgreSQL + Storage). The core ML pipeline uses YOLO-based detection with ByteTrack multi-object tracking to identify players and the ball, automatically assigns teams via jersey color clustering (K-means), tracks ball possession, and estimates real-world speed and distance using camera movement compensation and perspective transformation from pixel space to field coordinates. Results are delivered as annotated output video overlays plus per-frame tracking data and summary statistics for tactical review and export.",
      logo: "/images/logo-tactico-ai.jpg",
      image: "/images/tactico-ai-1.jpg",
      images: [
        "/images/tactico-ai-1.jpg",
        "/images/tactico-ai-2.jpg",
        "/images/tactico-ai-3.jpg",
        "/images/tactico-ai-4.jpg",
        "/images/tactico-ai-5.jpg"
      ],
      categories: ["Hackathon", "ML"],
      demoUrl: "https://www.youtube.com/watch?v=RSF-UM9DC4A",
      devpostUrl: "https://devpost.com/software/tactico-ai",
      githubUrl: "https://github.com/ramizik/tactico-ai",
      keyFeatures: [
        "Chunked upload for large match videos",
        "YOLO + ByteTrack player/ball detection and tracking",
        "Automatic team assignment via jersey color clustering (K-means)",
        "Ball possession tracking and team control metrics",
        "Real-world speed and distance estimation with camera compensation",
        "Perspective transform from pixels to field coordinates with data export"
      ]
    },
    {
      id: 3,
      title: "Vocal AI",
      description: "Vocal coaching platform with real-time analysis and conversational agents. UC Berkley Hackathon Winner.",
      fullDescription: "VocalAI is an AI-powered vocal coaching platform that won Most Ambitious Vapi Project at UC Berkeley's AI Hackathon 2025. Built with React/TypeScript and FastAPI, it integrates multiple AI services including Letta for stateful conversational coaching, Fetch.ai for autonomous progress analysis, and VAPI for real-time voice conversations. The platform performs comprehensive vocal analysis using Web Audio API to extract metrics like pitch, jitter, shimmer, and vibrato rate, then generates personalized exercises and feedback through AI agents with long-term memory. Data is managed through Supabase PostgreSQL with the system providing both reactive chat-based coaching and proactive daily reports to track vocal development over time.",
      logo: "/images/logo-vocal-ai.png",
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
      id: 4,
      title: "Business Chatbot for iQore",
      description: "Multi-agent convention chatbot—20% more client interactions at IEEE Quantum event.",
      fullDescription: "iQore Multi-Agent Event Chatbot is an enterprise AI system built for iQore's IEEE Quantum Convention featuring four specialized agents powered by LangGraph, LangChain, and OpenAI GPT-3.5-turbo with RAG knowledge retrieval. Built with FastAPI and MongoDB Atlas, the system engaged clients directly while supporting human representatives with instant company information access. This hybrid approach enabled iQore to process 20% more interactions than previous conventions by autonomously handling qualification, technical Q&A, and demo scheduling. Deployed on Google Cloud Run with real-time queue management, demonstrating effective AI-human collaboration in high-traffic convention environments.",
      logo: "/images/logo-iqore.png",
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
      id: 5,
      title: "My Buddy",
      description: "Cloud AI assistant managing calendar, tasks, budget & habits via Telegram with proactive reminders",
      fullDescription: "My Buddy is a cloud-native personal assistant built with AWS serverless architecture, currently in development as my vision of a proactive AI companion. The system integrates Google Calendar API, Telegram Bot API, and AWS services (Lambda, DynamoDB, EventBridge) to track calendar events, tasks, budget, streaks, goals, and projects through conversational commands. EventBridge orchestrates hourly reminders and morning/evening summaries with visual task prioritization. With Phase 2 operational, Phase 3 targets LangChain integration for intelligent analysis and memory—transforming it from reactive to proactive, anticipating needs and providing contextual insights to achieve an always-available intelligent companion working silently in the cloud.",
      logo: "/images/logo-my-buddy.png",
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
      id: 6,
      title: "WonderKid",
      description: "AI-powered interactive storytelling app for kids with dynamic stories, illustrations & videos",
      fullDescription: "WonderKid is an AI-powered interactive reading game for children aged 5-8, built at Big Red Hacks 2025. It combines Google's Gemini for dynamic story generation, Imagen for custom illustrations, and Veo 2.0 for video compilation. Kids input story themes and make choices that shape personalized narratives across 6 scenes, each with unique AI-generated artwork. After completion, the entire adventure compiles into a shareable video. The React Native mobile app features gradient-rich UI and progress tracking, while the FastAPI backend orchestrates AI integrations with MongoDB and Google Cloud Storage. This project demonstrates full-stack development, real-time AI orchestration, and child-focused UX design.",
      logo: "/images/logo-wonder-kid.png",
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
      id: 7,
      title: "EchoLens",
      description: "AI accessibility tool translating audio environments into visual info for deaf users.",
      fullDescription: "EchoLens is an AI-powered accessibility tool that translates audio environments into visual information for deaf and hard-of-hearing users. Built with React and Flask, it uses Google's Gemini AI and TensorFlow's YAMNet to provide real-time speech transcription, emotion detection, and spatial sound classification. The system identifies environmental sounds (doorbells, alarms, vehicles) and determines their direction through stereo audio processing. Features include an interactive 360° sound map, emotion-aware AI assistant, and customizable visualizations—demonstrating practical integration of speech recognition, audio event detection, and multimodal AI to enhance situational awareness and safety.",
      logo: "/images/logo-echolens.png",
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
    },
    {
      id: 8,
      title: "Traveler AI",
      description: "AI travel planner with multimodal chat, itinerary generation & real-time data integration",
      fullDescription: "Traveler AI is a multimodal conversational travel planner built during Google's 5-day Gen AI Intensive Course. Powered by Gemini 2.0 Flash and 1.5 Pro Vision, it combines intelligent itinerary building with real-time data from OpenWeather and Ticketmaster APIs. The assistant understands natural language and tourist photos, offering personalized suggestions through RAG-powered cultural tips (ChromaDB + embeddings), OCR translation, landmark descriptions, and YouTube video summarization. It features an LLM-based self-evaluation system that scores each itinerary on weather suitability, personalization, and authenticity. Users can export plans as Markdown or PDF, take interactive travel quizzes, and maintain session memory of preferences and destinations—all through a Python CLI chatbot experience in Kaggle Notebooks.",
      logo: "/images/logo-travel-ai.png",
      image: "/images/profile.jpg",
      images: [],
      categories: ["Multi-Agent", "Multi-Modal", "RAG", "Hackathon"],
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
    }
  ];

  const categories = ["All", "Mobile App", "Multi-Modal", "Multi-Agent", "Hackathon", "API", "RAG", "ML"];

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

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll to projects section
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Scroll to projects section
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-6 mb-8">
              <Button
                variant="outline"
                size="lg"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="gap-2 px-6 py-6 text-base font-medium"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous
              </Button>

              <div className="flex items-center gap-2 px-4">
                <span className="text-base font-medium text-foreground">
                  Page <span className="text-xl font-bold text-primary">{currentPage}</span> of <span className="text-xl font-bold">{totalPages}</span>
                </span>
              </div>

              <Button
                variant="outline"
                size="lg"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="gap-2 px-6 py-6 text-base font-medium"
              >
                Next
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <Card
              key={project.id}
             className="border-0 shadow-md hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden"
              onClick={() => openModal(project)}
            >
              <div className="relative bg-white dark:bg-gray-900 flex items-center justify-center p-4">
                <ImageWithFallback
                  src={project.logo}
                  alt={project.title}
                  className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
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
            <div>
              <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
              <div className="flex items-center flex-wrap gap-2 mb-4">
                {selectedProject.categories.map((category: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs px-3 py-1 shrink-0">{category}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.demoUrl ? (
                  <Button variant="outline" size="sm" asChild>
                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" disabled>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                )}

                {selectedProject.devpostUrl ? (
                  <Button variant="outline" size="sm" asChild>
                    <a href={selectedProject.devpostUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Devpost
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" disabled>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Devpost
                  </Button>
                )}

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

          </div>
        )}
      </SimpleModal>
    </section>
  );
}