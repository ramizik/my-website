import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      content: "Alex is one of the most talented developers I've worked with. His ability to translate complex requirements into elegant solutions is remarkable. He consistently delivers high-quality code on time and is always willing to help teammates.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupHub Inc.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Alex's technical expertise and problem-solving skills are exceptional. He led the development of our main platform from scratch and delivered a scalable, maintainable solution that exceeded our expectations. His attention to detail is unmatched.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Senior Designer",
      company: "Digital Innovations",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Working with Alex was a pleasure. He has a great eye for design and always implemented our mockups perfectly. His feedback on UX improvements was valuable and helped us create better user experiences.",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior Developer",
      company: "Google",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Alex was an outstanding intern who contributed significantly to our team. His code quality was excellent, and he quickly grasped complex concepts. I was impressed by his initiative and collaborative spirit.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Project Manager",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "Alex is incredibly reliable and professional. He communicates clearly about project progress and any challenges. His proactive approach to problem-solving and his ability to work well under pressure make him an invaluable team member.",
      rating: 5
    },
    {
      id: 6,
      name: "James Thompson",
      role: "Lead Engineer",
      company: "StartupHub Inc.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "I've rarely seen someone pick up new technologies as quickly as Alex. His enthusiasm for learning and sharing knowledge with the team is infectious. He's the kind of developer every team needs.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues, managers, and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mr-2" />
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-center space-x-2">
              {renderStars(5)}
              <span className="font-semibold">5.0</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <p className="text-muted-foreground">
              Average rating from <span className="font-semibold text-foreground">15+</span> colleagues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}