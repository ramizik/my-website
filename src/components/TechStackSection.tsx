import React, { useState, useEffect } from "react";
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
          projects: ["Business Chatbot for iQore", "My Buddy"],
          description: "Built task‑specific AI agents and multi‑agent routing systems with LangChain that understand user intent, select the right tools, and deliver accurate, traceable results."
        },
        {
          id: "letta",
          name: "Letta",
          logo: "/logos/letta.jpg",
          experience: "1+ years",
          projects: ["Vocal AI"],
          description: "Built stateful, explainable agents with Letta for a vocal AI—persisting user progress, leveraging conversation memory to personalize interactions, and generating transparent progress reports."
        },
        {
          id: "fetchai",
          name: "fetch.ai",
          logo: "/logos/fetch-ai.svg",
          experience: "1+ years",
          projects: ["Vocal AI"],
          description: "Built autonomous agents with Fetch.ai for a vocal AI coach—securely connecting to user account databases to retrieve and aggregate data, powering timely, personalized coaching insights."
        },
        {
          id: "vapi",
          name: "VAPI",
          logo: "/logos/vapi.png",
          experience: "1+ years",
          projects: ["Vocal AI"],
          description: "Built a real-time vocal AI coach with VAPI in my award-winning hackathon project—handling conversational speech and sung notes, and continually improving by learning from prior user sessions."
        },
        {
          id: "openai",
          name: "OpenAI",
          logo: "/logos/openai.svg",
          experience: "2+ years",
          projects: ["Business Chatbot for iQore"],
          description: "Integrated GPT‑4 via the OpenAI SDK to power chatbots, and used OpenAI embedding models to build a RAG customer support agent for iQore, delivering fast, context‑grounded answers."
        },
        {
          id: "gemini",
          name: "Gemini",
          logo: "/logos/gemini.png",
          experience: "1+ years",
          projects: ["WonderKid", "Traveler AI", "EchoLens"],
          description: "Built multimodal applications with Gemini — Veo-powered video generation for WonderKid, image processing and translation for Traveler AI, real-time audio/video/image assistance for EchoLens, and automated PDF report generation."
        }
      ]
    },
    {
      title: "Application Development",
      technologies: [
        {
          id: "flask",
          name: "Flask",
          logo: "/logos/flask.svg",
          experience: "3+ years",
          projects: ["EchoLens"],
          description: "Expert in Flask for building lightweight Python web applications, REST APIs, and microservices architecture."
        },
        {
          id: "fastapi",
          name: "FastAPI",
          logo: "/logos/fastapi.svg",
          experience: "2+ years",
          projects: ["Business Chatbot for iQore", "WonderKid"],
          description: "Built and deployed FastAPI services to accept, process, and return data across projects—Dockerized endpoints in WonderKid receiving text and streaming image/video to mobile, and a company chatbot backend delivering RAG‑powered conversations."
        },
        {
          id: "nodejs",
          name: "Node.js",
          logo: "/logos/node.svg",
          experience: "4+ years",
          projects: ["Vocal AI", "Business Chatbot for iQore", "WonderKid", "EchoLens"],
          description: "Built modern frontends and seamless backend integrations with Node.js—leveraging its powerful ecosystem for UI tooling and builds, REST/GraphQL APIs, real‑time WebSockets, authentication, caching, and production‑ready deployments."
        },
        {
          id: "react",
          name: "React",
          logo: "/logos/react.svg",
          experience: "5+ years",
          projects: ["Vocal AI", "Business Chatbot for iQore", "WonderKid", "EchoLens"],
          description: "Built cross‑platform UIs with React and React Native—leveraging hooks, the Context API, and solid state‑management patterns to deliver stable, reusable frontends that deploy smoothly across devices, screens, and environments."
        },
        {
          id: "expo",
          name: "Expo",
          logo: "/logos/expo.svg",
          experience: "2+ years",
          projects: ["WonderKid"],
          description: "Experience with Expo for rapid mobile app development, cross-platform deployment, and React Native ecosystem."
        },
        {
          id: "figma",
          name: "Figma",
          logo: "/logos/figma.svg",
          experience: "3+ years",
          projects: ["Business Chatbot for iQore", "WonderKid", "EchoLens"],
          description: "Proficient in Figma for collaborative UI/UX design, prototyping, and creating design systems for web and mobile applications."
        }
      ]
    },
    {
      title: "Front end development",
      technologies: [
        {
          id: "typescript",
          name: "TypeScript",
          logo: "/logos/typescript.svg",
          experience: "4+ years",
          projects: ["Vocal AI", "WonderKid", "EchoLens"],
          description: "Expert in TypeScript for type-safe application development, building scalable codebases with strong typing, interfaces, and advanced type features that catch errors early and improve code maintainability."
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          logo: "/logos/tailwind.svg",
          experience: "3+ years",
          projects: ["Vocal AI", "Business Chatbot for iQore", "EchoLens"],
          description: "Proficient in Tailwind CSS for rapid UI development, creating responsive, modern interfaces with utility-first CSS, custom design systems, and optimized production builds."
        },
        {
          id: "html-css",
          name: "HTML & CSS",
          logo: "/logos/html-css.svg",
          experience: "6+ years",
          projects: ["All Projects"],
          description: "Strong foundation in semantic HTML and modern CSS, building accessible, responsive web interfaces with Flexbox, Grid, animations, and cross-browser compatibility."
        },
        {
          id: "vite",
          name: "Vite",
          logo: "/logos/vite.svg",
          experience: "2+ years",
          projects: ["Vocal AI", "EchoLens"],
          description: "Experience with Vite for lightning-fast development builds, hot module replacement, and optimized production bundles for modern web applications."
        }
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
          projects: ["Vocai AI", "Business Chatbot for iQore", "WonderKid"],
          description: "Built and deployed containerized, production‑ready APIs on Google Cloud Run—auto‑scaling services that power my projects and host cloud‑native apps like the iQore chatbot and WonderKid."
        },
        {
          id: "aws",
          name: "AWS",
          logo: "/logos/aws.svg",
          experience: "3+ years",
          projects: ["My Buddy"],
          description: "Used AWS EC2 and S3 for machine learning coursework—scalable training and durable storage—and built a cost‑efficient serverless (Lambda) Telegram bot for cloud‑first, proactive user engagement."
        },
        {
          id: "netlify",
          name: "Netlify",
          logo: "/logos/netlify.svg",
          experience: "2+ years",
          projects: ["Vocal AI", "EchoLens", "Business Chatbot for iQore"],
          description: "Experience with Netlify for static site hosting, continuous deployment, and serverless functions for modern web applications."
        },
        {
          id: "docker",
          name: "Docker",
          logo: "/logos/docker.svg",
          experience: "3+ years",
          projects: ["Vocal AI", "Business Chatbot for iQore", "EchoLens"],
          description: "Proficient in containerization, multi-stage builds, Docker Compose, and container orchestration for development and production."
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
          projects: ["Vocal AI"],
          description: "Proficient in Supabase for backend-as-a-service, real-time databases, authentication, and API generation."
        },
        {
          id: "mongodb",
          name: "MongoDB",
          logo: "/logos/mongodb.svg",
          experience: "3+ years",
          projects: ["WonderKid", "Business Chatbot for iQore"],
          description: "Skilled in NoSQL database design, aggregation pipelines, and performance optimization for high-traffic applications."
        },
        {
          id: "chromadb",
          name: "ChromaDB",
          logo: "/logos/chromadb.svg",
          experience: "1+ years",
          projects: ["Traveler AI"],
          description: "Experience with ChromaDB for vector database operations, similarity search, and AI-powered data retrieval systems."
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
                            ['langchain', 'expo', 'openai', 'flask', 'nodejs', 'aws'].includes(tech.id) && isDark
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
                      ['langchain', 'expo', 'openai', 'flask', 'nodejs'].includes(selectedTech.id) && isDark
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