import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from "lucide-react";

export default function TimelineSection() {
  const timelineItems = [
    {
      id: 1,
      type: "work",
      title: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications, mentoring junior developers, and implementing DevOps best practices. Increased application performance by 40% and reduced deployment time by 60%.",
      achievements: ["Led team of 5 developers", "40% performance improvement", "Implemented CI/CD pipeline"],
      icon: Briefcase
    },
    {
      id: 2,
      type: "work",
      title: "Full-Stack Developer",
      company: "StartupHub Inc.",
      location: "Palo Alto, CA",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client applications using React, Node.js, and cloud services. Collaborated with design team to implement responsive, user-friendly interfaces.",
      achievements: ["Built 8+ client applications", "99.9% uptime achievement", "User satisfaction: 4.8/5"],
      icon: Briefcase
    },
    {
      id: 3,
      type: "certification",
      title: "AWS Solutions Architect",
      company: "Amazon Web Services",
      location: "Online",
      period: "2021",
      description: "Achieved AWS Solutions Architect Associate certification, demonstrating expertise in designing and deploying scalable systems on AWS.",
      achievements: ["Cloud architecture expertise", "Cost optimization", "Security best practices"],
      icon: Award
    },
    {
      id: 4,
      type: "work",
      title: "Frontend Developer",
      company: "Digital Innovations",
      location: "San Jose, CA",
      period: "2019 - 2020",
      description: "Specialized in creating modern, responsive web applications using React and Vue.js. Focused on performance optimization and user experience improvements.",
      achievements: ["50+ component library", "20% load time reduction", "Accessibility compliance"],
      icon: Briefcase
    },
    {
      id: 5,
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2015 - 2019",
      description: "Graduated Magna Cum Laude with focus on software engineering, algorithms, and database systems. Active member of ACM and programming competition team.",
      achievements: ["Magna Cum Laude", "ACM Programming Team", "Dean's List 6 semesters"],
      icon: GraduationCap
    },
    {
      id: 6,
      type: "work",
      title: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA",
      period: "Summer 2018",
      description: "Contributed to Google Chrome's performance optimization team. Implemented features that improved browser startup time and memory usage.",
      achievements: ["15% faster startup time", "Chrome team contribution", "Published research paper"],
      icon: Briefcase
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-500";
      case "education":
        return "bg-green-500";
      case "certification":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work":
        return "Work";
      case "education":
        return "Education";
      case "certification":
        return "Certification";
      default:
        return "Other";
    }
  };

  return (
    <section id="timeline" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career milestones, achievements, and continuous learning path
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${getTypeColor(item.type)} flex items-center justify-center shadow-lg z-10`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <Card className="flex-1 border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-lg text-primary">{item.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end space-y-2 mt-2 sm:mt-0">
                        <Badge variant="outline" className="w-fit">
                          {getTypeLabel(item.type)}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <Badge key={achievementIndex} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}