import { Link } from "react-router-dom";
import { Github, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
          <Link to="/" className="font-bold text-xl text-primary">Projlab42</Link>
          <p className="text-muted-foreground text-sm">
            Empowering developers through project incubation, mentorship, and resource allocation.
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-base">Quick Links</h4>
          <div className="grid grid-cols-1 gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-base">Connect</h4>
          <div className="flex gap-4">
            <a 
              href="https://github.com/projlab42" 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:wedonthaveanemail@projlab.org" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            {/* <a 
              href="https://twitter.com/projlab42" 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a> */}
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-4 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Projlab42. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
