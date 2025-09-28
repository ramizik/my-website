import React, { useState } from "react";
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

  const techCategories: TechCategory[] = [
    {
      title: "Backend",
      technologies: [
        {
          id: "nodejs",
          name: "Node.js",
          logo: "/src/assets/logos/nodejs.svg",
          experience: "4+ years",
          projects: ["E-Commerce Platform", "Task Management App", "Analytics Dashboard"],
          description: "Extensive experience building scalable server-side applications, RESTful APIs, and microservices architecture using Node.js and Express.js."
        },
        {
          id: "python",
          name: "Python",
          logo: "",
          experience: "3+ years",
          projects: ["ML Model Deployment", "Analytics Dashboard", "Weather API"],
          description: "Proficient in Python for backend development, data analysis, and machine learning applications using frameworks like FastAPI and Django."
        },
        {
          id: "express",
          name: "Express.js",
          logo: "",
          experience: "4+ years",
          projects: ["E-Commerce Platform", "Social Media App", "Weather API"],
          description: "Expert in building robust REST APIs and web applications using Express.js with middleware, authentication, and database integration."
        },
        {
          id: "graphql",
          name: "GraphQL",
          logo: "",
          experience: "2+ years",
          projects: ["Social Media App", "Task Management App"],
          description: "Experience implementing GraphQL APIs for efficient data fetching and real-time subscriptions in modern web applications."
        },
        {
          id: "mongodb",
          name: "MongoDB",
          logo: "",
          experience: "3+ years",
          projects: ["E-Commerce Platform", "Social Media App", "Task Management App"],
          description: "Skilled in NoSQL database design, aggregation pipelines, and performance optimization for high-traffic applications."
        }
      ]
    },
    {
      title: "Frontend",
      technologies: [
        {
          id: "react",
          name: "React",
          logo: "/src/assets/logos/react.svg",
          experience: "5+ years",
          projects: ["E-Commerce Platform", "Task Management App", "Analytics Dashboard"],
          description: "Expert in React ecosystem including hooks, context, state management, and modern patterns for building scalable user interfaces."
        },
        {
          id: "typescript",
          name: "TypeScript",
          logo: "/src/assets/logos/typescript.svg",
          experience: "4+ years",
          projects: ["E-Commerce Platform", "Task Management App", "Analytics Dashboard"],
          description: "Strong expertise in TypeScript for type-safe development, advanced types, and large-scale application architecture."
        },
        {
          id: "nextjs",
          name: "Next.js",
          logo: "",
          experience: "3+ years",
          projects: ["E-Commerce Platform", "Analytics Dashboard"],
          description: "Proficient in Next.js for server-side rendering, static site generation, and full-stack React applications with optimal performance."
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          logo: "",
          experience: "3+ years",
          projects: ["E-Commerce Platform", "Task Management App", "Social Media App"],
          description: "Expert in utility-first CSS framework for rapid UI development with responsive design and custom component creation."
        },
        {
          id: "vue",
          name: "Vue.js",
          logo: "",
          experience: "2+ years",
          projects: ["Task Management App"],
          description: "Experience with Vue.js ecosystem including Vuex, Vue Router, and composition API for building reactive web applications."
        }
      ]
    },
    {
      title: "Cloud",
      technologies: [
        {
          id: "aws",
          name: "AWS",
          logo: "",
          experience: "3+ years",
          projects: ["E-Commerce Platform", "ML Model Deployment", "Analytics Dashboard"],
          description: "Certified AWS Solutions Architect with experience in EC2, S3, Lambda, RDS, and CloudFormation for scalable cloud infrastructure."
        },
        {
          id: "docker",
          name: "Docker",
          logo: "",
          experience: "3+ years",
          projects: ["E-Commerce Platform", "ML Model Deployment", "Analytics Dashboard"],
          description: "Proficient in containerization, multi-stage builds, Docker Compose, and container orchestration for development and production."
        },
        {
          id: "kubernetes",
          name: "Kubernetes",
          logo: "",
          experience: "2+ years",
          projects: ["ML Model Deployment", "Analytics Dashboard"],
          description: "Experience with Kubernetes orchestration, deployments, services, and scaling applications in production environments."
        },
        {
          id: "terraform",
          name: "Terraform",
          logo: "",
          experience: "2+ years",
          projects: ["ML Model Deployment"],
          description: "Infrastructure as Code expertise for provisioning and managing cloud resources across multiple providers with Terraform."
        }
      ]
    },
    {
      title: "ML/AI",
      technologies: [
        {
          id: "tensorflow",
          name: "TensorFlow",
          logo: "",
          experience: "2+ years",
          projects: ["ML Model Deployment"],
          description: "Experience building and deploying machine learning models using TensorFlow for computer vision and natural language processing tasks."
        },
        {
          id: "pytorch",
          name: "PyTorch",
          logo: "",
          experience: "1+ years",
          projects: ["ML Model Deployment"],
          description: "Hands-on experience with PyTorch for deep learning research, model development, and neural network architectures."
        },
        {
          id: "openai",
          name: "OpenAI API",
          logo: "",
          experience: "1+ years",
          projects: ["Analytics Dashboard"],
          description: "Integration experience with OpenAI APIs for natural language processing, text generation, and AI-powered features in applications."
        },
        {
          id: "mlflow",
          name: "MLflow",
          logo: "",
          experience: "1+ years",
          projects: ["ML Model Deployment"],
          description: "Experience with MLflow for machine learning lifecycle management, experiment tracking, and model versioning in production."
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

        <div className="space-y-24">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className="text-2xl font-semibold mb-8">{category.title}</h3>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:animate-pulse p-4"
                    onClick={() => openModal(tech)}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-muted/20 rounded-lg group-hover:bg-muted/30 transition-all duration-300 group-hover:scale-105">
                      {tech.logo ? (
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
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
              <div className="w-12 h-12 flex items-center justify-center bg-muted/20 rounded-lg">
                {selectedTech.logo ? (
                  <img
                    src={selectedTech.logo}
                    alt={selectedTech.name}
                    className="w-full h-full object-contain"
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