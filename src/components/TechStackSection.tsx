import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export default function TechStackSection() {
  const techCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React / Next.js", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 88, color: "bg-cyan-500" },
        { name: "Vue.js", level: 80, color: "bg-green-500" },
        { name: "React Native", level: 75, color: "bg-purple-500" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", level: 92, color: "bg-green-600" },
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "PostgreSQL", level: 88, color: "bg-blue-700" },
        { name: "MongoDB", level: 80, color: "bg-green-700" },
        { name: "Redis", level: 75, color: "bg-red-500" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      technologies: [
        { name: "AWS", level: 85, color: "bg-orange-500" },
        { name: "Docker", level: 82, color: "bg-blue-500" },
        { name: "Kubernetes", level: 70, color: "bg-blue-600" },
        { name: "CI/CD", level: 78, color: "bg-purple-600" },
        { name: "Terraform", level: 65, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      technologies: [
        { name: "Git", level: 95, color: "bg-gray-600" },
        { name: "Jest / Testing", level: 85, color: "bg-red-600" },
        { name: "GraphQL", level: 78, color: "bg-pink-500" },
        { name: "Webpack", level: 75, color: "bg-blue-400" },
        { name: "Figma", level: 80, color: "bg-purple-400" }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={tech.level} className="h-2" />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full ${tech.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["GraphQL", "Rust", "Go", "Svelte", "Astro", "Deno", "Edge Computing"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}