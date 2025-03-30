
import { Lightbulb, Users, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "Project Incubation",
    description: "We transform ideas into viable projects, providing the initial support, guidance, and resources needed to get started."
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Connect with experienced developers who provide personalized guidance and share knowledge to help you grow."
  },
  {
    icon: Database,
    title: "Resource Allocation",
    description: "Access essential tools, infrastructure, and funding opportunities to ensure your project has what it needs to succeed."
  }
];

const WhatWeDoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive approach supports developers at every stage of their project journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-muted bg-card/80">
              <CardHeader>
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
