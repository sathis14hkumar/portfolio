import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Cloud,
  Server,
  Container,
  GitBranch,
  Database,
  Rocket,
  LineChart,
  Code,
  Brain,
} from "lucide-react";

const skills = [
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: [
      { name: "AWS", level: 95 },
      { name: "Azure", level: 90 },
      { name: "GCP", level: 85 },
      { name: "Oracle Cloud", level: 75 },
    ],
  },
  {
    category: "DevOps & CI/CD",
    icon: Rocket,
    items: [
      { name: "Jenkins", level: 95 },
      { name: "GitLab CI", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "ArgoCD", level: 80 },
    ],
  },
  {
    category: "Infrastructure as Code",
    icon: Code,
    items: [
      { name: "Terraform", level: 95 },
      { name: "Ansible", level: 85 },
      { name: "CloudFormation", level: 80 },
    ],
  },
  {
    category: "Containers & Orchestration",
    icon: Container,
    items: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "EKS/GKE/AKS", level: 85 },
      { name: "Helm", level: 85 },
    ],
  },
  {
    category: "Monitoring & Logging",
    icon: LineChart,
    items: [
      { name: "Prometheus", level: 90 },
      { name: "Grafana", level: 90 },
      { name: "ELK/EFK", level: 85 },
      { name: "CloudWatch", level: 85 },
    ],
  },
  {
    category: "Data Science & MLOps",
    icon: Brain,
    items: [
      { name: "Python", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "MLflow", level: 80 },
      { name: "Kubeflow", level: 75 },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "RDS", level: 85 },
      { name: "Cloud SQL", level: 80 },
    ],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    items: [
      { name: "Git", level: 95 },
      { name: "GitLab", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Bitbucket", level: 80 },
    ],
  },
];

const EnhancedSkills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <skillSet.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {skillSet.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {skillSet.items.map((skill, idx) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-foreground/80">
                            {skill.name}
                          </span>
                          <span className="text-sm text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-neon rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1 + idx * 0.1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedSkills;
