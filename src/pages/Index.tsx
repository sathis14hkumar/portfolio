import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
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
import heroImage from "@/assets/hero-bg.jpg";
import Navigation from "@/components/Navigation";
import EnhancedSkills from "@/components/EnhancedSkills";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const experiences = [
    {
      company: "DoodleBlue Innovation Pvt Ltd",
      role: "DevOps Engineer",
      period: "Apr 2023 - Dec 2024",
      achievements: [
        "Provided full support for the main project's infrastructure, ensuring high availability and security",
        "Maintained server operations and implemented best practices for security and performance",
        "Managed multi-cloud infrastructure across AWS, GCP, and Azure",
        "Implemented CI/CD pipelines using Jenkins and GitLab CI for automated deployments",
        "Orchestrated Docker and Kubernetes deployments for microservices architecture",
        "Set up comprehensive monitoring with ELK stack, Prometheus, and Grafana",
      ],
    },
    {
      company: "Talentpro India Pvt Limited",
      role: "DevOps Engineer",
      period: "4 Months",
      achievements: [
        "Provided full support for the main project's infrastructure, ensuring high availability and security",
        "Deployed a scalable microservices architecture in AWS ECS, ensuring high availability and seamless scaling",
        "Implemented Infrastructure as Code using Terraform for consistent deployments",
        "Set up monitoring and alerting systems for proactive issue detection",
      ],
    },
  ];

  const projects = [
    {
      name: "Multi-Cloud Infrastructure Automation",
      description: "Automated provisioning of infrastructure across AWS, GCP, and Azure using Terraform modules with consistent patterns.",
      tools: ["Terraform", "AWS", "GCP", "Azure", "GitLab CI"],
      challenge: "Managing infrastructure across three cloud providers with different APIs and paradigms.",
      outcome: "Reduced provisioning time from days to minutes. Achieved 100% infrastructure reproducibility.",
      impact: "85% faster deployment",
    },
    {
      name: "Kubernetes Multi-Cluster Management",
      description: "Designed and implemented production-grade Kubernetes clusters across multiple regions with disaster recovery.",
      tools: ["Kubernetes", "EKS", "GKE", "Helm", "ArgoCD"],
      challenge: "Ensuring high availability and seamless failover across regions.",
      outcome: "Zero-downtime deployments. Sub-1-minute failover time.",
      impact: "99.99% uptime achieved",
    },
    {
      name: "AWS ECS Microservices Platform",
      description: "Built scalable microservices architecture on AWS ECS with auto-scaling and service discovery.",
      tools: ["AWS ECS", "Docker", "Terraform", "CloudWatch"],
      challenge: "Handling variable traffic loads while maintaining cost efficiency.",
      outcome: "Auto-scaling handles 10x traffic spikes seamlessly.",
      impact: "70% infrastructure cost savings",
    },
    {
      name: "MLOps Pipeline for AI Models",
      description: "Created automated ML model training, validation, and deployment pipeline with A/B testing capabilities.",
      tools: ["Kubeflow", "MLflow", "TensorFlow", "Docker", "Kubernetes"],
      challenge: "Automating model retraining with data drift detection and model versioning.",
      outcome: "Reduced model deployment time from weeks to hours.",
      impact: "10x faster model iterations",
    },
    {
      name: "Observability & Monitoring Stack",
      description: "Built comprehensive logging and monitoring solution processing millions of events per day.",
      tools: ["ELK Stack", "Prometheus", "Grafana", "Alertmanager"],
      challenge: "Correlating logs and metrics across distributed microservices architecture.",
      outcome: "Reduced MTTR by 60%. Proactive issue detection before user impact.",
      impact: "60% faster incident resolution",
    },
    {
      name: "Zero-Trust Security Implementation",
      description: "Implemented zero-trust security model with service mesh and policy-based access control.",
      tools: ["Istio", "OPA", "Vault", "Kubernetes", "AWS IAM"],
      challenge: "Securing microservices communication without impacting performance.",
      outcome: "100% encrypted service-to-service communication.",
      impact: "Zero security breaches",
    },
  ];

  const caseStudies = [
    {
      title: "Scaling E-commerce Platform During Peak Traffic",
      problem: "E-commerce platform experiencing crashes during high-traffic events, losing significant revenue.",
      solution: "Implemented auto-scaling Kubernetes clusters with HPA and VPA, integrated Redis caching layer, optimized database queries, and set up real-time monitoring with automated alerts.",
      tools: ["Kubernetes", "AWS", "Redis", "Prometheus", "Grafana"],
      impact: {
        before: "System crashed at 5K concurrent users",
        after: "Handled 50K concurrent users with 99.9% uptime",
        metrics: ["10x traffic capacity increase", "99.9% uptime during peak events", "Response time improved from 3s to 200ms"],
      },
    },
    {
      title: "ML Model Deployment Automation",
      problem: "Data science team manually deploying models taking 2-3 weeks, causing business delays.",
      solution: "Built end-to-end MLOps pipeline with automated testing, model versioning, A/B testing framework, and canary deployments on Kubernetes.",
      tools: ["Kubeflow", "MLflow", "Docker", "Jenkins", "Python"],
      impact: {
        before: "2-3 weeks manual deployment process",
        after: "4 hours automated deployment with rollback capability",
        metrics: ["90% reduction in deployment time", "Zero production incidents from bad models", "15+ models deployed per month vs 2 previously"],
      },
    },
    {
      title: "Multi-Cloud Migration & Cost Optimization",
      problem: "Company locked into single cloud provider with escalating costs and vendor lock-in risks.",
      solution: "Designed cloud-agnostic architecture using Terraform, migrated workloads to optimal cloud providers, implemented FinOps practices.",
      tools: ["Terraform", "AWS", "GCP", "Azure", "Python"],
      impact: {
        before: "$40K monthly cloud spend with vendor lock-in",
        after: "$24K monthly spend with multi-cloud flexibility",
        metrics: ["40% cost reduction ($192K annual savings)", "Zero downtime during migration", "Improved disaster recovery capabilities"],
      },
    },
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect - Professional", icon: Award },
    { name: "Certified Kubernetes Administrator (CKA)", icon: Award },
    { name: "HashiCorp Certified: Terraform Associate", icon: Award },
    { name: "Google Cloud Professional Cloud Architect", icon: Award },
    { name: "Microsoft Azure DevOps Engineer Expert", icon: Award },
    { name: "Certified Kubernetes Application Developer (CKAD)", icon: Award },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

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
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-20 text-primary opacity-20">
            <Cloud size={60} />
          </motion.div>
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} className="absolute top-40 right-32 text-secondary opacity-20">
            <Server size={50} />
          </motion.div>
          <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} className="absolute bottom-40 left-40 text-accent opacity-20">
            <Container size={55} />
          </motion.div>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1.5 }} className="absolute bottom-32 right-20 text-primary opacity-20">
            <Database size={45} />
          </motion.div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-4 bg-gradient-neon bg-clip-text text-transparent font-bold">Sathish Kumar K</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground/90 font-normal">Multi-Cloud DevOps Engineer</h2>
            <p className="text-xl md:text-2xl mb-8 text-primary font-medium">Delivering Scalable, Automated, and Production-Ready Systems</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              I build cloud-native architectures, automate everything, and help businesses deploy with speed, security, and stability across AWS, Azure, GCP, and Oracle Cloud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2" size={20} />
                Let's Work Together
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6">
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">About Me</h2>
            <div className="h-1 w-24 bg-gradient-neon mx-auto mb-12 rounded-full" />

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-primary/20 p-8 md:p-12">
                <div className="space-y-6 text-lg text-foreground/90">
                  <p className="leading-relaxed">
                    Hi, I'm <span className="text-primary font-semibold">Sathish Kumar K</span>, a passionate DevOps Engineer with over{" "}
                    <span className="text-secondary font-semibold">2+ years of hands-on experience</span> in building and maintaining scalable cloud infrastructure.
                  </p>
                  <p className="leading-relaxed">
                    I specialize in <span className="text-secondary font-semibold">multi-cloud architecture</span> across AWS, Azure, GCP, and Oracle Cloud. My expertise spans CI/CD automation, containerization with Docker and Kubernetes, Infrastructure as Code with Terraform and Ansible, and comprehensive monitoring solutions.
                  </p>
                  <p className="leading-relaxed">
                    At DoodleBlue Innovation, I've managed enterprise-level infrastructure ensuring high availability and security. I've also worked with Talentpro India, deploying scalable microservices architecture on AWS ECS.
                  </p>
                  <p className="leading-relaxed">
                    My expertise extends into <span className="text-primary font-semibold">Data Science, AI, and MLOps</span>, where I bridge the gap between data science teams and production environments, automating ML model deployments and building robust data pipelines.
                  </p>
                  <p className="leading-relaxed italic text-muted-foreground">
                    When I'm not architecting cloud infrastructure, you'll find me exploring emerging technologies, learning about AI/ML advancements, and constantly pushing the boundaries of what's possible in DevOps.
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <EnhancedSkills />

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">Professional Journey</h2>
            <div className="h-1 w-24 bg-gradient-neon mx-auto mb-12 rounded-full" />

            <div className="max-w-5xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div key={exp.company} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                  <Card className="bg-gradient-card border-primary/20 p-8 hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{exp.role}</h3>
                        <p className="text-xl text-secondary">{exp.company}</p>
                      </div>
                      <Badge className="bg-accent/20 text-accent border-accent/30 text-lg px-4 py-2 mt-2 md:mt-0 w-fit">{exp.period}</Badge>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                          <span className="text-foreground/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">Featured Projects</h2>
            <div className="h-1 w-24 bg-gradient-neon mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div key={project.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                  <Card className="bg-gradient-card border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="text-primary" size={24} />
                      <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-secondary mb-2">Tools Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <Badge key={tool} className="bg-secondary/20 text-secondary border-secondary/30">{tool}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="border-t border-border pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="text-accent" size={18} />
                          <p className="text-accent font-bold">{project.impact}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{project.outcome}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">Impact Stories</h2>
            <div className="h-1 w-24 bg-gradient-neon mx-auto mb-12 rounded-full" />

            <div className="max-w-6xl mx-auto space-y-8">
              {caseStudies.map((study, index) => (
                <motion.div key={study.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
                  <Card className="bg-gradient-card border-primary/20 p-8 hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-primary mb-4">{study.title}</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-destructive mb-2 flex items-center gap-2"><Shield size={20} /> The Problem</h4>
                        <p className="text-foreground/80">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-secondary mb-2 flex items-center gap-2"><Cpu size={20} /> The Solution</h4>
                        <p className="text-foreground/80">{study.solution}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-accent mb-2">Tools & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tools.map((tool) => (
                          <Badge key={tool} className="bg-accent/20 text-accent border-accent/30">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-border pt-6">
                      <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2"><TrendingUp size={20} /> Impact & Results</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-destructive mb-1">Before:</p>
                          <p className="text-foreground/80">{study.impact.before}</p>
                        </div>
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-primary mb-1">After:</p>
                          <p className="text-foreground/80">{study.impact.after}</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {study.impact.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-foreground/80">
                            <CheckCircle2 className="text-primary" size={18} />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Certifications Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">Certifications</h2>
            <div className="h-1 w-24 bg-gradient-neon mx-auto mb-12 rounded-full" />

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div key={cert.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                  <Card className="bg-gradient-card border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Award className="text-primary" size={28} />
                      </div>
                      <p className="text-foreground font-medium">{cert.name}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">Let's Build Something Amazing Together</h2>
            <div className="h-1 w-24 bg-gradient-neon mx-auto mb-12 rounded-full" />

            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-card border-primary/20 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:shadow-glow-primary transition-all duration-300">
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

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-center text-muted-foreground mb-4">Connect with me:</p>
                  <div className="flex justify-center gap-4">
                    <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary">
                      <Linkedin size={20} />
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary">
                      <Github size={20} />
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary">
                      <Mail size={20} />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Sathish Kumar K. Built with passion for automation and excellence.</p>
            <div className="flex items-center gap-2">
              <Network className="text-primary" size={20} />
              <span className="text-sm text-foreground">Multi-Cloud | DevOps | MLOps | Data Science</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
