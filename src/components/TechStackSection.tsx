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
          logo: "/src/assets/logos/langchain.svg",
          experience: "2+ years",
          projects: ["Business Chatbot for iQore", "My Buddy"],
          description: "Expert in building AI applications using LangChain for prompt engineering, chain composition, and integration with various LLMs."
        },
        {
          id: "letta",
          name: "Letta",
          logo: "/src/assets/logos/letta.jpg",
          experience: "1+ years",
          projects: ["Vocal AI"],
          description: "Experience with Letta for building conversational AI applications and natural language processing workflows."
        },
        {
          id: "fetchai",
          name: "fetch.ai",
          logo: "/src/assets/logos/fetch-ai.svg",
          experience: "1+ years",
          projects: ["Vocal AI"],
          description: "Knowledge of fetch.ai platform for building decentralized AI applications and autonomous agent systems."
        },
        {
          id: "vapi",
          name: "VAPI",
          logo: "/src/assets/logos/vapi.png",
          experience: "1+ years",
          projects: ["Vocal AI"],
          description: "Experience with VAPI for building voice AI applications, call automation, and conversational interfaces."
        },
        {
          id: "openai",
          name: "OpenAI",
          logo: "/src/assets/logos/openai.svg",
          experience: "2+ years",
          projects: ["Business Chatbot for iQore"],
          description: "Proficient in OpenAI APIs for GPT models, embeddings, and fine-tuning for various AI-powered applications."
        },
        {
          id: "gemini",
          name: "Gemini",
          logo: "/src/assets/logos/gemini.png",
          experience: "1+ years",
          projects: ["WonderKid", "Traveler AI", "EchoLens"],
          description: "Experience with Google's Gemini AI for multimodal applications, text analysis, and advanced language understanding."
        }
      ]
    },
    {
      title: "Application Development",
      technologies: [
        {
          id: "flask",
          name: "Flask",
          logo: "/src/assets/logos/flask.svg",
          experience: "3+ years",
          projects: ["EchoLens"],
          description: "Expert in Flask for building lightweight Python web applications, REST APIs, and microservices architecture."
        },
        {
          id: "fastapi",
          name: "FastAPI",
          logo: "/src/assets/logos/fastapi.svg",
          experience: "2+ years",
          projects: ["Business Chatbot for iQore", "WonderKid"],
          description: "Proficient in FastAPI for building high-performance, modern Python web APIs with automatic documentation and validation."
        },
        {
          id: "nodejs",
          name: "Node.js",
          logo: "/src/assets/logos/node.svg",
          experience: "4+ years",
          projects: ["Vocal AI", "Business Chatbot for iQore", "WonderKid", "EchoLens"],
          description: "Extensive experience building scalable server-side applications, RESTful APIs, and microservices architecture using Node.js."
        },
        {
          id: "react",
          name: "React",
          logo: "/src/assets/logos/react.svg",
          experience: "5+ years",
          projects: ["Vocal AI", "Business Chatbot for iQore", "WonderKid", "EchoLens"],
          description: "Expert in React ecosystem including hooks, context, state management, and modern patterns for building scalable user interfaces."
        },
        {
          id: "expo",
          name: "Expo",
          logo: "/src/assets/logos/expo.svg",
          experience: "2+ years",
          projects: ["WonderKid"],
          description: "Experience with Expo for rapid mobile app development, cross-platform deployment, and React Native ecosystem."
        },
        {
          id: "figma",
          name: "Figma",
          logo: "/src/assets/logos/figma.svg",
          experience: "3+ years",
          projects: ["Business Chatbot for iQore", "WonderKid", "EchoLens"],
          description: "Proficient in Figma for collaborative UI/UX design, prototyping, and creating design systems for web and mobile applications."
        }
      ]
    },
    {
      title: "Cloud & Deployment",
      technologies: [
        {
          id: "google-cloud-run",
          name: "Google Cloud Run",
          logo: "/src/assets/logos/gcloud.svg",
          experience: "2+ years",
          projects: ["Vocai AI", "Business Chatbot for iQore", "WonderKid"],
          description: "Proficient in Google Cloud Run for serverless container deployment, auto-scaling, and cloud-native application hosting."
        },
        {
          id: "aws",
          name: "AWS",
          logo: "/src/assets/logos/aws.svg",
          experience: "3+ years",
          projects: ["My Buddy"],
          description: "Certified AWS Solutions Architect with experience in EC2, S3, Lambda, RDS, and CloudFormation for scalable cloud infrastructure."
        },
        {
          id: "netlify",
          name: "Netlify",
          logo: "/src/assets/logos/netlify.svg",
          experience: "2+ years",
          projects: ["Vocal AI", "EchoLens", "Business Chatbot for iQore"],
          description: "Experience with Netlify for static site hosting, continuous deployment, and serverless functions for modern web applications."
        },
        {
          id: "docker",
          name: "Docker",
          logo: "/src/assets/logos/docker.svg",
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
          logo: "/src/assets/logos/supabase.svg",
          experience: "2+ years",
          projects: ["Vocal AI"],
          description: "Proficient in Supabase for backend-as-a-service, real-time databases, authentication, and API generation."
        },
        {
          id: "mongodb",
          name: "MongoDB",
          logo: "/src/assets/logos/mongodb.svg",
          experience: "3+ years",
          projects: ["WonderKid", "Business Chatbot for iQore"],
          description: "Skilled in NoSQL database design, aggregation pipelines, and performance optimization for high-traffic applications."
        },
        {
          id: "chromadb",
          name: "ChromaDB",
          logo: "/src/assets/logos/chromadb.svg",
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
            Technologies and tools I use to bring ideas to life. Click on any logo to learn more about my experience.
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