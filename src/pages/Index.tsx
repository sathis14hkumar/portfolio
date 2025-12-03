import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Cloud,
  Server,
  Container,
  Database,
  Mail,
  Linkedin,
  Github,
  Award,
  CheckCircle2,
  TrendingUp,
  Zap,
  Network,
  Shield,
  Cpu,
  Loader2,
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">Sathish Kumar K</span>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-foreground hover:text-primary">Home</a>
              <a href="#about" className="text-foreground hover:text-primary">About</a>
              <a href="#skills" className="text-foreground hover:text-primary">Skills</a>
              <a href="#contact" className="text-foreground hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Sathish Kumar K</h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-foreground">Multi-Cloud DevOps Engineer</h2>
          <p className="text-xl text-primary mb-8">Delivering Scalable, Automated, and Production-Ready Systems</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            I build cloud-native architectures, automate everything, and help businesses deploy with speed, security, and stability across AWS, Azure, GCP, and Oracle Cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground">
              <Mail className="mr-2" size={20} />
              Let's Work Together
            </Button>
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6 text-lg">
                <p>
                  Hi, I'm <span className="text-primary font-semibold">Sathish Kumar K</span>, a passionate DevOps Engineer with over{" "}
                  <span className="text-secondary font-semibold">2+ years of hands-on experience</span> in building and maintaining scalable cloud infrastructure.
                </p>
                <p>
                  I specialize in <span className="text-secondary font-semibold">multi-cloud architecture</span> across AWS, Azure, GCP, and Oracle Cloud. My expertise spans CI/CD automation, containerization with Docker and Kubernetes, Infrastructure as Code with Terraform and Ansible, and comprehensive monitoring solutions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Cloud Platforms", icon: Cloud, skills: ["AWS", "Azure", "GCP", "Oracle Cloud"] },
              { category: "DevOps & CI/CD", icon: Zap, skills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"] },
              { category: "Containers", icon: Container, skills: ["Docker", "Kubernetes", "EKS/GKE/AKS", "Helm"] },
              { category: "Infrastructure", icon: Server, skills: ["Terraform", "Ansible", "CloudFormation"] },
            ].map((skillSet, index) => (
              <Card key={skillSet.category} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <skillSet.icon className="text-primary" size={24} />
                  <h3 className="text-lg font-semibold">{skillSet.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillSet.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Let's Build Something Amazing Together</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Sathish Kumar K. Built with passion for automation and excellence.</p>
            <div className="flex items-center gap-2">
              <Network className="text-primary" size={20} />
              <span className="text-sm">Multi-Cloud | DevOps | MLOps | Data Science</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;