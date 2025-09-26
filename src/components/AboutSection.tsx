import React from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code, Lightbulb, Users, Coffee } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Passionate about writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding elegant solutions to technical problems."
    },
    {
      icon: Users,
      title: "Team Collaborator",
      description: "Experienced in agile development and cross-functional team collaboration."
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always exploring new technologies and staying current with industry trends."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Hi there! I'm Alex</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience building 
                scalable web applications and mobile solutions. My journey started with a 
                Computer Science degree from UC Berkeley, and I've been hooked on creating 
                digital experiences ever since.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud architecture, and 
                user-centered design. Whether it's architecting a complex backend system 
                or crafting pixel-perfect frontend interfaces, I bring the same level of 
                attention to detail and problem-solving approach.
              </p>
              <p>
                When I'm not coding, you'll find me hiking in the Bay Area, experimenting 
                with new coffee brewing methods, or contributing to open-source projects. 
                I believe the best solutions come from collaboration and continuous learning.
              </p>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758626104169-6835c0bd03e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODkyMzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Alex's workspace"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}