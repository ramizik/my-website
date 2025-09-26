import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

interface Technology {
  name: string;
  logo: string; // Placeholder for now
  experience: string;
  projects: string[];
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience: string;
}

interface TechCategory {
  title: string;
  icon: string;
  technologies: Technology[];
}

export default function TechStackSection() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      icon: "🎨",
      technologies: [
        {
          name: "React",
          logo: "https://via.placeholder.com/60x60/61DAFB/000000?text=React",
          experience: "5+ years of experience building scalable web applications with React. Expert in hooks, context API, and performance optimization.",
          projects: ["E-commerce Platform", "Task Management App", "Analytics Dashboard"],
          proficiency: "Expert",
          yearsOfExperience: "5+ years"
        },
        {
          name: "TypeScript",
          logo: "https://via.placeholder.com/60x60/3178C6/FFFFFF?text=TS",
          experience: "4+ years using TypeScript for type-safe development. Proficient in advanced types, generics, and integration with React.",
          projects: ["Portfolio Website", "API Client Library", "Component Library"],
          proficiency: "Advanced",
          yearsOfExperience: "4+ years"
        },
        {
          name: "Next.js",
          logo: "https://via.placeholder.com/60x60/000000/FFFFFF?text=Next",
          experience: "3+ years building full-stack applications with Next.js. Expert in SSR, SSG, and API routes.",
          projects: ["Corporate Website", "Blog Platform", "SaaS Application"],
          proficiency: "Advanced",
          yearsOfExperience: "3+ years"
        },
        {
          name: "Vue.js",
          logo: "https://via.placeholder.com/60x60/4FC08D/FFFFFF?text=Vue",
          experience: "2+ years developing with Vue.js and Vuex. Comfortable with composition API and component architecture.",
          projects: ["Admin Dashboard", "Real-time Chat App"],
          proficiency: "Intermediate",
          yearsOfExperience: "2+ years"
        },
        {
          name: "Tailwind CSS",
          logo: "https://via.placeholder.com/60x60/06B6D4/FFFFFF?text=TW",
          experience: "3+ years using Tailwind for rapid UI development. Expert in utility-first approach and custom configurations.",
          projects: ["Multiple client projects", "Design system implementation"],
          proficiency: "Advanced",
          yearsOfExperience: "3+ years"
        }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: [
        {
          name: "Node.js",
          logo: "https://via.placeholder.com/60x60/339933/FFFFFF?text=Node",
          experience: "4+ years building scalable backend services with Node.js. Expert in Express, middleware, and async programming.",
          projects: ["REST APIs", "Microservices", "Real-time applications"],
          proficiency: "Expert",
          yearsOfExperience: "4+ years"
        },
        {
          name: "Python",
          logo: "https://via.placeholder.com/60x60/3776AB/FFFFFF?text=Py",
          experience: "3+ years using Python for backend development and data processing. Proficient in Django, Flask, and FastAPI.",
          projects: ["ML Pipeline", "Data Analysis Tools", "Web APIs"],
          proficiency: "Advanced",
          yearsOfExperience: "3+ years"
        },
        {
          name: "Express.js",
          logo: "https://via.placeholder.com/60x60/000000/FFFFFF?text=Exp",
          experience: "4+ years building RESTful APIs and web applications with Express.js. Expert in middleware and routing.",
          projects: ["E-commerce API", "Authentication Service", "File Upload Service"],
          proficiency: "Expert",
          yearsOfExperience: "4+ years"
        },
        {
          name: "GraphQL",
          logo: "https://via.placeholder.com/60x60/E10098/FFFFFF?text=GQL",
          experience: "2+ years implementing GraphQL APIs with Apollo Server. Comfortable with schema design and resolvers.",
          projects: ["Social Media API", "Content Management System"],
          proficiency: "Intermediate",
          yearsOfExperience: "2+ years"
        }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      technologies: [
        {
          name: "AWS",
          logo: "https://via.placeholder.com/60x60/FF9900/000000?text=AWS",
          experience: "3+ years deploying and managing applications on AWS. Proficient in EC2, S3, Lambda, and RDS.",
          projects: ["Scalable web applications", "Serverless functions", "Data storage solutions"],
          proficiency: "Advanced",
          yearsOfExperience: "3+ years"
        },
        {
          name: "Docker",
          logo: "https://via.placeholder.com/60x60/2496ED/FFFFFF?text=Docker",
          experience: "3+ years containerizing applications with Docker. Expert in multi-stage builds and orchestration.",
          projects: ["Microservices deployment", "Development environments", "CI/CD pipelines"],
          proficiency: "Advanced",
          yearsOfExperience: "3+ years"
        },
        {
          name: "Kubernetes",
          logo: "https://via.placeholder.com/60x60/326CE5/FFFFFF?text=K8s",
          experience: "2+ years orchestrating containers with Kubernetes. Comfortable with deployments, services, and ingress.",
          projects: ["Production deployments", "Auto-scaling applications"],
          proficiency: "Intermediate",
          yearsOfExperience: "2+ years"
        },
        {
          name: "Terraform",
          logo: "https://via.placeholder.com/60x60/7B42BC/FFFFFF?text=TF",
          experience: "1+ year using Terraform for infrastructure as code. Learning advanced modules and state management.",
          projects: ["AWS infrastructure", "Multi-environment setups"],
          proficiency: "Beginner",
          yearsOfExperience: "1+ year"
        }
      ]
    },
    {
      title: "AI/ML",
      icon: "🤖",
      technologies: [
        {
          name: "TensorFlow",
          logo: "https://via.placeholder.com/60x60/FF6F00/FFFFFF?text=TF",
          experience: "2+ years building machine learning models with TensorFlow. Comfortable with neural networks and deep learning.",
          projects: ["Image classification", "Predictive models", "NLP applications"],
          proficiency: "Intermediate",
          yearsOfExperience: "2+ years"
        },
        {
          name: "PyTorch",
          logo: "https://via.placeholder.com/60x60/EE4C2C/FFFFFF?text=PT",
          experience: "1+ year using PyTorch for research and prototyping. Learning advanced architectures and optimization.",
          projects: ["Computer vision models", "Research projects"],
          proficiency: "Beginner",
          yearsOfExperience: "1+ year"
        },
        {
          name: "OpenAI API",
          logo: "https://via.placeholder.com/60x60/412991/FFFFFF?text=AI",
          experience: "1+ year integrating OpenAI APIs into applications. Building chatbots and content generation tools.",
          projects: ["AI-powered chatbot", "Content generation platform"],
          proficiency: "Intermediate",
          yearsOfExperience: "1+ year"
        }
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      technologies: [
        {
          name: "PostgreSQL",
          logo: "https://via.placeholder.com/60x60/336791/FFFFFF?text=PG",
          experience: "4+ years designing and optimizing PostgreSQL databases. Expert in complex queries and performance tuning.",
          projects: ["E-commerce database", "Analytics platform", "User management system"],
          proficiency: "Expert",
          yearsOfExperience: "4+ years"
        },
        {
          name: "MongoDB",
          logo: "https://via.placeholder.com/60x60/47A248/FFFFFF?text=Mongo",
          experience: "3+ years working with MongoDB for document-based applications. Proficient in aggregation and indexing.",
          projects: ["Content management", "Real-time applications", "IoT data storage"],
          proficiency: "Advanced",
          yearsOfExperience: "3+ years"
        },
        {
          name: "Redis",
          logo: "https://via.placeholder.com/60x60/DC382D/FFFFFF?text=Redis",
          experience: "2+ years using Redis for caching and session management. Comfortable with pub/sub and data structures.",
          projects: ["Session storage", "API caching", "Real-time features"],
          proficiency: "Intermediate",
          yearsOfExperience: "2+ years"
        },
        {
          name: "Firebase",
          logo: "https://via.placeholder.com/60x60/FFCA28/000000?text=FB",
          experience: "2+ years using Firebase for rapid prototyping and real-time applications. Proficient in Firestore and Auth.",
          projects: ["Mobile app backend", "Real-time chat", "User authentication"],
          proficiency: "Intermediate",
          yearsOfExperience: "2+ years"
        }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      technologies: [
        {
          name: "Git",
          logo: "https://via.placeholder.com/60x60/F05032/FFFFFF?text=Git",
          experience: "5+ years using Git for version control. Expert in branching strategies, merging, and collaboration workflows.",
          projects: ["All development projects", "Open source contributions"],
          proficiency: "Expert",
          yearsOfExperience: "5+ years"
        },
        {
          name: "Jest",
          logo: "https://via.placeholder.com/60x60/C21325/FFFFFF?text=Jest",
          experience: "3+ years writing unit and integration tests with Jest. Proficient in mocking and test-driven development.",
          projects: ["Component testing", "API testing", "E2E testing"],
          proficiency: "Advanced",
          yearsOfExperience: "3+ years"
        },
        {
          name: "Webpack",
          logo: "https://via.placeholder.com/60x60/8DD6F9/000000?text=WP",
          experience: "2+ years configuring build processes with Webpack. Comfortable with loaders, plugins, and optimization.",
          projects: ["Custom build configurations", "Performance optimization"],
          proficiency: "Intermediate",
          yearsOfExperience: "2+ years"
        },
        {
          name: "Figma",
          logo: "https://via.placeholder.com/60x60/F24E1E/FFFFFF?text=Fig",
          experience: "3+ years collaborating with designers using Figma. Proficient in design systems and component libraries.",
          projects: ["UI/UX collaboration", "Design system implementation"],
          proficiency: "Advanced",
          yearsOfExperience: "3+ years"
        }
      ]
    },
    {
      title: "Development Tools",
      icon: "🔧",
      technologies: [
        {
          name: "VS Code",
          logo: "https://via.placeholder.com/60x60/007ACC/FFFFFF?text=VSC",
          experience: "5+ years using VS Code as primary development environment. Expert in extensions and customization.",
          projects: ["Daily development", "Custom configurations"],
          proficiency: "Expert",
          yearsOfExperience: "5+ years"
        },
        {
          name: "Postman",
          logo: "https://via.placeholder.com/60x60/FF6C37/FFFFFF?text=PM",
          experience: "4+ years testing APIs with Postman. Proficient in automated testing and collection management.",
          projects: ["API development", "Integration testing"],
          proficiency: "Advanced",
          yearsOfExperience: "4+ years"
        },
        {
          name: "GitHub",
          logo: "https://via.placeholder.com/60x60/181717/FFFFFF?text=GH",
          experience: "5+ years using GitHub for code hosting and collaboration. Expert in Actions, Issues, and project management.",
          projects: ["All repositories", "CI/CD workflows", "Open source contributions"],
          proficiency: "Expert",
          yearsOfExperience: "5+ years"
        },
        {
          name: "Jira",
          logo: "https://via.placeholder.com/60x60/0052CC/FFFFFF?text=Jira",
          experience: "3+ years using Jira for project management and issue tracking. Comfortable with agile workflows.",
          projects: ["Team collaboration", "Sprint planning", "Bug tracking"],
          proficiency: "Advanced",
          yearsOfExperience: "3+ years"
        }
      ]
    }
  ];

  const getProficiencyColor = (proficiency: Technology["proficiency"]) => {
    switch (proficiency) {
      case "Expert": return "bg-green-500";
      case "Advanced": return "bg-blue-500";
      case "Intermediate": return "bg-yellow-500";
      case "Beginner": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life. Click on any logo to learn more about my experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center space-x-3">
                  <span className="text-3xl">{category.icon}</span>
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 place-items-center">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group cursor-pointer p-3 rounded-lg hover:bg-accent/50 transition-all duration-300 transform hover:scale-110"
                      onClick={() => setSelectedTech(tech)}
                    >
                      <div className="relative">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                        />
                        <div className="absolute -bottom-1 -right-1">
                          <div className={`w-3 h-3 rounded-full ${getProficiencyColor(tech.proficiency)} border-2 border-background`}></div>
                        </div>
                      </div>
                      <p className="text-xs text-center mt-2 font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex justify-center">
          <Card className="border-0 shadow-md">
            <CardContent className="p-4">
              <h4 className="text-sm font-semibold mb-3 text-center">Proficiency Level</h4>
              <div className="flex space-x-4 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Expert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Advanced</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Intermediate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  <span>Beginner</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Detail Modal */}
        <Dialog open={!!selectedTech} onOpenChange={() => setSelectedTech(null)}>
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
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={`${getProficiencyColor(selectedTech.proficiency)} text-white`}>
                          {selectedTech.proficiency}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {selectedTech.yearsOfExperience}
                        </span>
                      </div>
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
                    {selectedTech.experience}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Projects</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTech.projects.map((project, index) => (
                      <div
                        key={index}
                        className="p-3 bg-muted/50 rounded-lg text-sm"
                      >
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}