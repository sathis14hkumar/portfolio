import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Building Scalable CI/CD Pipelines with GitLab and Kubernetes",
    excerpt:
      "Learn how to design and implement production-grade CI/CD pipelines that scale with your team and infrastructure needs.",
    category: "DevOps",
    date: "Nov 2024",
    readTime: "8 min read",
    tags: ["GitLab CI", "Kubernetes", "CI/CD"],
  },
  {
    title: "Multi-Cloud Architecture: Strategies for AWS, Azure, and GCP",
    excerpt:
      "A comprehensive guide to designing cloud-agnostic infrastructure that leverages the best of multiple cloud providers.",
    category: "Cloud",
    date: "Oct 2024",
    readTime: "12 min read",
    tags: ["AWS", "Azure", "GCP", "Terraform"],
  },
  {
    title: "MLOps Best Practices: From Model Training to Production",
    excerpt:
      "Discover how to build robust ML pipelines that bridge the gap between data science experimentation and production deployment.",
    category: "MLOps",
    date: "Sep 2024",
    readTime: "10 min read",
    tags: ["MLOps", "Kubeflow", "MLflow"],
  },
  {
    title: "Container Security: Hardening Your Docker and Kubernetes Workloads",
    excerpt:
      "Essential security practices for containerized applications, from image scanning to runtime protection.",
    category: "Security",
    date: "Aug 2024",
    readTime: "7 min read",
    tags: ["Docker", "Kubernetes", "Security"],
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Technical Blog
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sharing insights on DevOps, cloud architecture, and MLOps best practices
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary h-full flex flex-col group cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {post.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-secondary/30 text-secondary text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Articles
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
