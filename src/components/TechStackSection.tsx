import React, { useEffect, useState } from "react";
import SimpleModal from "./SimpleModal";

interface Technology {
  id: string;
  name: string;
  logo: string;
  experience: string;
  projects: string[];
  description: string;
}

interface TechCategory {
  title: string;
  technologies: Technology[];
}

export default function TechStackSection() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    setIsDark(document.documentElement.classList.contains('dark'));

    // Watch for dark mode changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const techCategories: TechCategory[] = [
    {
      title: "Artificial Intelligence",
      technologies: [
        {
          id: "langchain",
          name: "LangChain",
          logo: "/logos/langchain.svg",
          experience: "2+ years",
          projects: ["Customer Rep. for iQore", "My Buddy"],
          description: "Architected production-grade multi-agent systems with LangChain and LangGraph, implementing intelligent routing, tool selection, and orchestration patterns. Built context-aware agents that handle concurrent requests, maintain conversation state, and deliver sub-500ms response times for real-time customer interactions."
        },
        {
          id: "letta",
          name: "Letta",
          logo: "/logos/letta.jpg",
          experience: "1+ years",
          projects: ["Vocal AI", "Tactico AI"],
          description: "Engineered stateful conversational AI systems with Letta, implementing long-term memory persistence and personalized coaching experiences. Built explainable agents that track user progress across sessions, generate actionable insights, and deliver transparent, data-driven feedback for continuous improvement."
        },
        {
          id: "vapi",
          name: "VAPI",
          logo: "/logos/vapi.png",
          experience: "1+ years",
          projects: ["Vocal AI"],
          description: "Integrated VAPI's real-time voice AI platform to build an award-winning vocal coaching application. Engineered conversational flows that handle both speech and sung audio, implemented session-based learning to personalize coaching, and delivered seamless voice interactions with sub-second latency."
        },
        {
          id: "openai",
          name: "OpenAI",
          logo: "/logos/openai.svg",
          experience: "2+ years",
          projects: ["Customer Rep. for iQore"],
          description: "Leveraged OpenAI's GPT-4 and embedding models to build production RAG systems with vector search. Implemented semantic retrieval pipelines that deliver context-grounded responses in under 1 second, handling 100+ concurrent users with 99.9% uptime. Optimized token usage and response quality through prompt engineering and retrieval strategies."
        },
        {
          id: "gemini",
          name: "Gemini",
          logo: "/logos/gemini.png",
          experience: "1+ years",
          projects: ["Coherence", "WonderKid", "Traveler AI", "EchoLens"],
          description: "Expert in Google's Gemini multimodal AI suite, building production applications across vision, audio, and video domains. Implemented Veo 2.0 video generation pipelines, real-time multimodal analysis systems, and automated content generation workflows. Delivered end-to-end AI experiences from text prompts to generated video narratives with optimized latency and quality."
        },
        {
          id: "pytorch",
          name: "PyTorch",
          logo: "/logos/pytorch.svg",
          experience: "1+ years",
          projects: ["TacticoAI"],
          description: "Built end-to-end computer vision pipelines with PyTorch, implementing YOLOv11 object detection with SAHI optimization, ByteTrack multi-object tracking, and custom homography mapping. Achieved 0.91 mAP for detection and 94.2% keypoint accuracy, processing real-time video streams with optimized inference performance."
        }
      ]
    },
    {
      title: "Fullstack Development",
      technologies: [
        {
          id: "flask",
          name: "Flask",
          logo: "/logos/flask.svg",
          experience: "3+ years",
          projects: ["EchoLens"],
          description: "Built production Flask microservices with dedicated processing endpoints per modality, implementing CORS-enabled APIs, real-time data pipelines, and modular architecture patterns. Designed scalable backend services that handle concurrent requests, integrate with ML models, and deliver sub-second response times for multimodal AI applications."
        },
        {
          id: "fastapi",
          name: "FastAPI",
          logo: "/logos/fastapi.svg",
          experience: "2+ years",
          projects: ["Coherence", "Customer Rep. for iQore", "WonderKid"],
          description: "Architected high-performance FastAPI backends with async/await patterns, implementing parallel AI service orchestration, real-time streaming endpoints, and RAG-powered conversational APIs. Built scalable services handling 100+ concurrent users, optimized database queries, and deployed containerized production systems with automated CI/CD pipelines."
        },
        {
          id: "nodejs",
          name: "Node.js",
          logo: "/logos/node.svg",
          experience: "4+ years",
          projects: ["Vocal AI", "Customer Rep. for iQore", "WonderKid", "EchoLens"],
          description: "Expert in Node.js for full-stack development, building RESTful APIs, real-time WebSocket services, and production-ready backend systems. Implemented authentication flows, caching strategies, and optimized build pipelines. Delivered scalable applications with efficient async processing, error handling, and monitoring integration."
        },
        {
          id: "react",
          name: "React",
          logo: "/logos/react.svg",
          experience: "5+ years",
          projects: ["Coherence", "Vocal AI", "Customer Rep. for iQore", "WonderKid", "EchoLens", "TacticoAI"],
          description: "Expert in React and React Native, building responsive cross-platform applications with modern hooks, Context API, and optimized state management. Implemented reusable component libraries, performance optimizations, and smooth animations. Delivered production apps that work seamlessly across web, iOS, and Android with consistent UX patterns."
        },
        {
          id: "typescript",
          name: "TypeScript",
          logo: "/logos/typescript.svg",
          experience: "4+ years",
          projects: ["Coherence", "Vocal AI", "WonderKid", "EchoLens", "TacticoAI"],
          description: "Expert in TypeScript, building type-safe applications with advanced type features, generics, and strict mode configurations. Implemented robust type systems that catch errors at compile-time, improve IDE support, and enable confident refactoring. Designed scalable architectures with well-defined interfaces and type-driven development practices."
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          logo: "/logos/tailwind.svg",
          experience: "3+ years",
          projects: ["Coherence", "Vocal AI", "Customer Rep. for iQore", "EchoLens", "TacticoAI"],
          description: "Expert in Tailwind CSS, building responsive, modern UIs with utility-first architecture and custom design systems. Implemented dark mode support, responsive breakpoints, and optimized production builds. Created reusable component patterns and maintained consistent design language across multiple projects with minimal CSS overhead."
        },
      ]
    },
    {
      title: "Cloud & Deployment",
      technologies: [
        {
          id: "google-cloud-run",
          name: "Google Cloud Run",
          logo: "/logos/gcloud.svg",
          experience: "2+ years",
          projects: ["Vocal AI", "Customer Rep. for iQore", "WonderKid"],
          description: "Deployed production-grade containerized applications on Google Cloud Run, implementing auto-scaling configurations, environment variable management, and optimized cold start performance. Built serverless APIs that handle variable traffic loads, integrate with Cloud Storage and other GCP services, and maintain 99.9% uptime with cost-efficient scaling strategies."
        },
        {
          id: "aws",
          name: "AWS",
          logo: "/logos/aws.svg",
          experience: "3+ years",
          projects: ["My Buddy"],
          description: "Architected serverless AWS infrastructure using Lambda, DynamoDB, EventBridge, and API Gateway. Built cost-efficient multi-Lambda systems with automatic scaling, implemented single-table DynamoDB designs for complex queries, and integrated with external APIs (Google Calendar, Telegram) with OAuth token management and health monitoring."
        },
        {
          id: "netlify",
          name: "Netlify",
          logo: "/logos/netlify.svg",
          experience: "2+ years",
          projects: ["Vocal AI", "EchoLens", "Customer Rep. for iQore"],
          description: "Deployed production frontends on Netlify with automated CI/CD pipelines, implementing CDN-optimized static hosting, environment-based builds, and seamless GitHub integration. Configured custom domains, SSL certificates, and optimized build processes for fast deployment cycles and reliable hosting."
        },
        {
          id: "docker",
          name: "Docker",
          logo: "/logos/docker.svg",
          experience: "3+ years",
          projects: ["Vocal AI", "Customer Rep. for iQore", "EchoLens"],
          description: "Expert in Docker containerization, implementing multi-stage builds for optimized image sizes, Docker Compose for local development environments, and production-ready container configurations. Built containerized applications that deploy consistently across environments, integrate with cloud platforms, and maintain security best practices."
        }
      ]
    },
    {
      title: "Data Infrastructure",
      technologies: [
        {
          id: "supabase",
          name: "Supabase",
          logo: "/logos/supabase.svg",
          experience: "2+ years",
          projects: ["Vocal AI", "TacticoAI"],
          description: "Built secure, scalable backends with Supabase, implementing Row Level Security (RLS) policies, real-time subscriptions, and PostgreSQL-based data models. Integrated authentication flows, managed user sessions, and leveraged auto-generated REST APIs. Designed database schemas optimized for multi-user applications with proper access controls."
        },
        {
          id: "mongodb",
          name: "MongoDB",
          logo: "/logos/mongodb.svg",
          experience: "3+ years",
          projects: ["WonderKid", "Customer Rep. for iQore"],
          description: "Expert in MongoDB and MongoDB Atlas, designing NoSQL schemas optimized for vector search operations, implementing aggregation pipelines for complex queries, and building high-performance data access patterns. Integrated Atlas vector search with embedding models for semantic retrieval, achieving sub-1s search latency for RAG applications."
        },
        {
          id: "chromadb",
          name: "ChromaDB",
          logo: "/logos/chromadb.svg",
          experience: "1+ years",
          projects: ["Traveler AI"],
          description: "Implemented vector database solutions with ChromaDB for semantic search and AI-powered retrieval. Built similarity search pipelines, managed embedding collections, and optimized query performance for real-time data retrieval. Integrated with LLM workflows to deliver context-grounded AI applications with fast, accurate results."
        }
      ]
    }
  ];

  const openModal = (tech: Technology) => {
    console.log('Opening modal for:', tech.name);
    console.log('Setting selectedTech to:', tech);
    setSelectedTech(tech);
  };

  const closeModal = () => {
    setSelectedTech(null);
  };

  return (
    <section id="tech-stack" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any logo to learn more about my experience.
          </p>
        </div>

        <div className="space-y-8">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:animate-pulse p-4"
                    onClick={() => openModal(tech)}
                  >
                    <div
                      className="flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-105 bg-muted/20 group-hover:bg-muted/30"
                      style={{
                        width: tech.id === 'vapi' ? '120px' : '64px',
                        height: '64px'
                      }}
                    >
                      {tech.logo ? (
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 p-2"
                          style={
                            ['langchain', 'openai', 'flask', 'nodejs', 'aws'].includes(tech.id) && isDark
                              ? { filter: 'invert(1)' }
                              : {}
                          }
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <span className={`text-xs font-medium text-center transition-transform duration-300 group-hover:scale-110 ${tech.logo ? 'hidden' : ''}`}>
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SimpleModal isOpen={!!selectedTech} onClose={closeModal}>
        {selectedTech && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-muted/20`}>
                {selectedTech.logo ? (
                  <img
                    src={selectedTech.logo}
                    alt={selectedTech.name}
                    className="w-full h-full object-contain p-1"
                    style={
                      ['langchain', 'openai', 'flask', 'nodejs'].includes(selectedTech.id) && isDark
                        ? { filter: 'invert(1)' }
                        : {}
                    }
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <span className={`text-sm font-medium text-center ${selectedTech.logo ? 'hidden' : ''}`}>
                  {selectedTech.name}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{selectedTech.name}</h3>
              </div>
            </div>

            <p className="text-muted-foreground">
              {selectedTech.description}
            </p>

            <div>
              <h4 className="font-semibold mb-3">Projects Built</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTech.projects.map((project, index) => (
                  <span
                    key={index}
                    className="border text-sm px-3 py-1 rounded-full"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </SimpleModal>
    </section>
  );
}