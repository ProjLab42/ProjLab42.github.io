
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient">
      <div className="container py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-white order-2 lg:order-1 animate-fade-in">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            Building the future through collaborative innovation
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-white/90">
            Projlab42 is a project incubator dedicated to empowering developers, 
            fostering collaboration, and turning innovative ideas into reality.
          </p>
          
          <div className="mt-10">
            <Button asChild size="lg" className="gap-2 bg-background text-primary hover:bg-background/90">
              <Link to="/projects">
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="lg:order-2 flex justify-center lg:justify-end animate-scale-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-secondary/20 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 border-4 border-secondary/30 rounded-full animate-ping opacity-20"></div>
            <div className="w-4/5 h-4/5 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">PL42</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
