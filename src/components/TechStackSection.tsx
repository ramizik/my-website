import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

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
          logo: "https://via.placeholder.com/80x80/339933/ffffff?text=Node",
          experience: "4+ years",
          projects: ["E-Commerce Platform", "Task Management App", "Analytics Dashboard"],
          description: "Extensive experience building scalable server-side applications, RESTful APIs, and microservices architecture using Node.js and Express.js."
        },
        {
          id: "python",
          name: "Python",
          logo: "https://via.placeholder.com/80x80/3776AB/ffffff?text=Python",
          experience: "3+ years",
          projects: ["ML Model Deployment", "Analytics Dashboard", "Weather API"],
          description: "Proficient in Python for backend development, data analysis, and machine learning applications using frameworks like FastAPI and Django."
        },
        {
          id: "express",
          name: "Express.js",
          logo: "https://via.placeholder.com/80x80/000000/ffffff?text=Express",
          experience: "4+ years",
          projects: ["E-Commerce Platform", "Social Media App", "Weather API"],
          description: "Expert in building robust REST APIs and web applications using Express.js with middleware, authentication, and database integration."
        },
        {
          id: "graphql",
          name: "GraphQL",
          logo: "https://via.placeholder.com/80x80/E10098/ffffff?text=GraphQL",
          experience: "2+ years",
          projects: ["Social Media App", "Task Management App"],
          description: "Experience implementing GraphQL APIs for efficient data fetching and real-time subscriptions in modern web applications."
        },
        {
          id: "mongodb",
          name: "MongoDB",
          logo: "https://via.placeholder.com/80x80/47A248/ffffff?text=Mongo",
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
          logo: "https://via.placeholder.com/80x80/61DAFB/000000?text=React",
          experience: "5+ years",
          projects: ["E-Commerce Platform", "Task Management App", "Analytics Dashboard"],
          description: "Expert in React ecosystem including hooks, context, state management, and modern patterns for building scalable user interfaces."
        },
        {
          id: "typescript",
          name: "TypeScript",
          logo: "https://via.placeholder.com/80x80/3178C6/ffffff?text=TS",
          experience: "4+ years",
          projects: ["E-Commerce Platform", "Task Management App", "Analytics Dashboard"],
          description: "Strong expertise in TypeScript for type-safe development, advanced types, and large-scale application architecture."
        },
        {
          id: "nextjs",
          name: "Next.js",
          logo: "https://via.placeholder.com/80x80/000000/ffffff?text=Next",
          experience: "3+ years",
          projects: ["E-Commerce Platform", "Analytics Dashboard"],
          description: "Proficient in Next.js for server-side rendering, static site generation, and full-stack React applications with optimal performance."
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          logo: "https://via.placeholder.com/80x80/06B6D4/ffffff?text=Tailwind",
          experience: "3+ years",
          projects: ["E-Commerce Platform", "Task Management App", "Social Media App"],
          description: "Expert in utility-first CSS framework for rapid UI development with responsive design and custom component creation."
        },
        {
          id: "vue",
          name: "Vue.js",
          logo: "https://via.placeholder.com/80x80/4FC08D/ffffff?text=Vue",
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
          logo: "https://via.placeholder.com/80x80/FF9900/000000?text=AWS",
          experience: "3+ years",
          projects: ["E-Commerce Platform", "ML Model Deployment", "Analytics Dashboard"],
          description: "Certified AWS Solutions Architect with experience in EC2, S3, Lambda, RDS, and CloudFormation for scalable cloud infrastructure."
        },
        {
          id: "docker",
          name: "Docker",
          logo: "https://via.placeholder.com/80x80/2496ED/ffffff?text=Docker",
          experience: "3+ years",
          projects: ["E-Commerce Platform", "ML Model Deployment", "Analytics Dashboard"],
          description: "Proficient in containerization, multi-stage builds, Docker Compose, and container orchestration for development and production."
        },
        {
          id: "kubernetes",
          name: "Kubernetes",
          logo: "https://via.placeholder.com/80x80/326CE5/ffffff?text=K8s",
          experience: "2+ years",
          projects: ["ML Model Deployment", "Analytics Dashboard"],
          description: "Experience with Kubernetes orchestration, deployments, services, and scaling applications in production environments."
        },
        {
          id: "terraform",
          name: "Terraform",
          logo: "https://via.placeholder.com/80x80/7B42BC/ffffff?text=Terraform",
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
          logo: "https://via.placeholder.com/80x80/FF6F00/ffffff?text=TF",
          experience: "2+ years",
          projects: ["ML Model Deployment"],
          description: "Experience building and deploying machine learning models using TensorFlow for computer vision and natural language processing tasks."
        },
        {
          id: "pytorch",
          name: "PyTorch",
          logo: "https://via.placeholder.com/80x80/EE4C2C/ffffff?text=PyTorch",
          experience: "1+ years",
          projects: ["ML Model Deployment"],
          description: "Hands-on experience with PyTorch for deep learning research, model development, and neural network architectures."
        },
        {
          id: "openai",
          name: "OpenAI API",
          logo: "https://via.placeholder.com/80x80/412991/ffffff?text=OpenAI",
          experience: "1+ years",
          projects: ["Analytics Dashboard"],
          description: "Integration experience with OpenAI APIs for natural language processing, text generation, and AI-powered features in applications."
        },
        {
          id: "mlflow",
          name: "MLflow",
          logo: "https://via.placeholder.com/80x80/0194E2/ffffff?text=MLflow",
          experience: "1+ years",
          projects: ["ML Model Deployment"],
          description: "Experience with MLflow for machine learning lifecycle management, experiment tracking, and model versioning in production."
        }
      ]
    }
  ];

  const openModal = (tech: Technology) => {
    setSelectedTech(tech);
  };

  const closeModal = () => {
    setSelectedTech(null);
  };

  return (
    <section id="tech-stack" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life. Click on any logo to learn more about my experience.
          </p>
        </div>

        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className="text-2xl font-semibold mb-8">{category.title}</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="group cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={() => openModal(tech)}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedTech} onOpenChange={closeModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-4">
              {selectedTech && (
                <>
                  <img
                    src={selectedTech.logo}
                    alt={selectedTech.name}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">{selectedTech.name}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {selectedTech.experience} experience
                    </Badge>
                  </div>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          {selectedTech && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedTech.description}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Projects Built</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTech.projects.map((project, index) => (
                    <Badge key={index} variant="outline">
                      {project}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}