
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  "Access to a network of \"experienced\" developers and mentors",
  "Opportunities to collaborate on innovative projects",
  "Resources? and tools to help bring your ideas to life",
  "Community support throughout your development journey",
  "Visibility for your projects and contributions",
  "Continuous learning and skill enhancement"
];

const testimonials = [
  {
    quote: "I can't get this autoscale to work",
    author: "Raamiz, Soon to be backend developer"
  },
  {
    quote: "XGH lets gooooooooo!!!",
    author: "Musab AK, Breaks things"
  }
];

const WhyJoinSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Join Projlab42</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Be part of a vibrant community that supports your growth as a developer and helps turn your ideas into reality.
            </p>
            
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <Button asChild>
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">What Our Members Say</h3>
            
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-muted">
                <blockquote className="text-base italic">"{testimonial.quote}"</blockquote>
                <div className="mt-4 text-sm font-medium">— {testimonial.author}</div>
              </div>
            ))}
            
            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20 mt-2">
              <h4 className="font-bold text-lg">Collaboration Opportunities</h4>
              <p className="mt-2">
                Projlab42 regularly connects teams with ideas, providing valuable experience and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
