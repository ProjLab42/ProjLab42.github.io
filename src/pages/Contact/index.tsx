
import { Github, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="container max-w-4xl py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-bold">Get in Touch</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Have questions or want to get involved? We'd love to hear from you.
        </p>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        <Card className="card-hover">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6 p-4">
              <div className="bg-primary/10 p-5 rounded-full mx-auto md:mx-0">
                <Github className="h-12 w-12 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-3">GitHub Organization</h2>
                <p className="text-muted-foreground mb-4">
                  Follow us on GitHub to stay updated with our latest projects and contribute to open-source initiatives.
                </p>
                <Button asChild className="gap-2">
                  <a href="https://github.com/projlab42" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    <span>Visit Our GitHub</span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover bg-secondary/10 border-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-center md:justify-start gap-2">
              <Users className="h-6 w-6 text-secondary" />
              <span>Join Our Community</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Projlab42 is always looking for passionate developers, designers, and tech enthusiasts to join our growing community. 
              Whether you want to contribute to existing projects or start your own, we provide the support and resources you need.
            </CardDescription>
            <div className="mt-6 text-center">
              <Button size="lg">Get Involved</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
