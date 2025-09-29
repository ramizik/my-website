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
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      fullDescription: "A comprehensive e-commerce solution built from the ground up, featuring a modern React frontend with TypeScript, a robust Node.js backend with Express, and PostgreSQL database. The platform includes real-time inventory management, secure payment processing via Stripe, comprehensive admin dashboard, and AWS cloud deployment with auto-scaling capabilities.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      images: [
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      category: "Web App",
      demoUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/ramizik/ecommerce-platform",
      timeline: "6 months",
      role: "Full-Stack Developer & Lead",
      teamSize: "4 developers",
      keyFeatures: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Advanced search and filtering",
        "Order management system",
        "Admin analytics dashboard",
        "Mobile-responsive design"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced analytics.",
      fullDescription: "A comprehensive task management solution built with Vue.js and Firebase, featuring real-time collaboration, advanced project tracking, and detailed analytics. The app supports team workspaces, task assignments, deadline tracking, and provides insights into team productivity and project progress.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      images: [
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      category: "Mobile App",
      demoUrl: "https://demo-taskapp.com",
      githubUrl: "https://github.com/ramizik/task-manager",
      timeline: "4 months",
      role: "Frontend Developer",
      teamSize: "3 developers",
      keyFeatures: [
        "Real-time task updates",
        "Team collaboration tools",
        "Project analytics dashboard",
        "Mobile PWA support",
        "Task assignment and tracking",
        "Deadline notifications"
      ]
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard for business intelligence with interactive charts and real-time data visualization.",
      fullDescription: "A powerful business intelligence dashboard built with React and D3.js, featuring real-time data visualization, interactive charts, and comprehensive reporting capabilities. The backend uses Python with FastAPI for high-performance data processing and Docker for containerized deployment.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      images: [
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      category: "Web App",
      demoUrl: "https://demo-analytics.com",
      githubUrl: "https://github.com/ramizik/analytics-dashboard",
      timeline: "5 months",
      role: "Full-Stack Developer",
      teamSize: "2 developers",
      keyFeatures: [
        "Real-time data visualization",
        "Interactive charts and graphs",
        "Custom report generation",
        "Data export capabilities",
        "User role management",
        "Responsive dashboard design"
      ]
    },
    {
      id: 4,
      title: "Weather Forecast API",
      description: "A RESTful API service providing accurate weather forecasts with caching, rate limiting, and comprehensive documentation.",
      fullDescription: "A high-performance weather API service built with Node.js and Express, featuring intelligent caching with Redis, comprehensive rate limiting, and detailed OpenAPI documentation. The service aggregates data from multiple weather providers to ensure accuracy and reliability.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      images: [
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      category: "API",
      demoUrl: "https://api-weather.com/docs",
      githubUrl: "https://github.com/ramizik/weather-api",
      timeline: "3 months",
      role: "Backend Developer",
      teamSize: "1 developer",
      keyFeatures: [
        "RESTful API with OpenAPI docs",
        "Intelligent caching system",
        "Rate limiting and throttling",
        "Multiple data source aggregation",
        "Comprehensive error handling",
        "Performance monitoring"
      ]
    },
    {
      id: 5,
      title: "Social Media App",
      description: "A modern social media platform with real-time messaging, content sharing, and advanced privacy controls.",
      fullDescription: "A comprehensive social media platform built with React Native for cross-platform mobile development, featuring real-time messaging via WebSockets, GraphQL API for efficient data fetching, and advanced privacy controls. The platform supports content sharing, user profiles, real-time notifications, and secure authentication.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      images: [
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      category: "Mobile App",
      demoUrl: "https://demo-social.com",
      githubUrl: "https://github.com/ramizik/social-app",
      timeline: "8 months",
      role: "Full-Stack Developer",
      teamSize: "5 developers",
      keyFeatures: [
        "Real-time messaging",
        "Content sharing and media upload",
        "User profiles and connections",
        "Advanced privacy settings",
        "Push notifications",
        "Cross-platform compatibility"
      ]
    },
    {
      id: 6,
      title: "ML Model Deployment",
      description: "A scalable machine learning model deployment platform with automated training pipelines and model versioning.",
      fullDescription: "An enterprise-grade machine learning platform built with Python and TensorFlow, featuring automated model training pipelines, version control with MLflow, and scalable deployment on Kubernetes. The platform includes model monitoring, A/B testing capabilities, and comprehensive logging for production ML workflows.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      images: [
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1ODg5MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      category: "Machine Learning",
      demoUrl: "https://demo-ml.com",
      githubUrl: "https://github.com/ramizik/ml-platform",
      timeline: "6 months",
      role: "ML Engineer & DevOps",
      teamSize: "3 developers",
      keyFeatures: [
        "Automated training pipelines",
        "Model versioning and tracking",
        "Kubernetes deployment",
        "Model monitoring and alerting",
        "A/B testing framework",
        "Scalable inference serving"
      ]
    }
  ];

  const categories = ["All", "Web App", "Mobile App", "API", "Machine Learning"];

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
    : projects.filter(project => project.category === activeFilter);

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
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">{selectedProject.category}</Badge>
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